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
import styles from './SliderControls.module.css';
import cx from 'classnames';

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
    fullscreenHandle,
    slylesClasses,
    isShowControls,
  } = props;

  const changeIntervalTime = (event) => {
    changeInterval(event.target.value);
  };

  const inputStyles = cx(styles.timeInterval, styles.absolute, {
    [styles.inputHide]: !isShowControls,
  });
  const controlStyles = cx(
    styles.sliderControls,
    styles.absolute,
    slylesClasses,
    {
      [styles.hideControls]: !isShowControls,
      [styles.fullscreenOffControlls]: !isFullscreen,
      [styles.fullscreenControlls]: isFullscreen,
    }
  );
  return (
    <>
      <input
        type="range"
        value={intervalTime}
        onChange={changeIntervalTime}
        min={500}
        max={10000}
        className={inputStyles}
      />
      <div className={controlStyles}>
        <Control path={mdiArrowLeftBold} onClick={getPrevIndex} />
        <Control
          path={isPlaying ? mdiStop : mdiPlay}
          onClick={isPlaying ? stopSlider : startSlider}
        />
        <Control path={mdiArrowRightBold} onClick={getNextIndex} />
        <Control
          path={isFullscreen ? mdiFullscreenExit : mdiFullscreen}
          onClick={fullscreenHandle}
        />
      </div>
    </>
  );
};

export default SliderControls;
