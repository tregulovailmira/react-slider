import React from 'react';
import Control from './Control';
import {
  mdiArrowLeftBold,
  mdiArrowRightBold,
  mdiPlay,
  mdiStop,
  mdiFullscreen,
  mdiFullscreenExit,
} from '@mdi/js';

const SliderControls = (props) => {
  const {
    isPlaying,
    isFullscreen,
    intervalTime,
    changeInterval,
    startSlider,
    stopSlider,
    getNextIndex,
    getPrevIndex,
    changeFullScreen,
  } = props;

  const changeIntervalTime = (event) => {
    changeInterval(event.target.value);
  };
  return (
    <>
      <input
        type="range"
        value={intervalTime}
        onChange={changeIntervalTime}
        min={500}
        max={10000}
      />
      <div>
        <Control path={mdiArrowLeftBold} onClick={getPrevIndex} />
        <Control
          path={isPlaying ? mdiStop : mdiPlay}
          onClick={isPlaying ? stopSlider : startSlider}
        />
        <Control path={mdiArrowRightBold} onClick={getNextIndex} />
        <Control
          path={isFullscreen ? mdiFullscreenExit : mdiFullscreen}
          onClick={changeFullScreen}
        />
      </div>
    </>
  );
};

export default SliderControls;
