import React, { useState, useEffect } from 'react';
import SliderControls from './SliderControls';
import Slide from './Slide';
import cx from 'classnames';
import styles from './Slider.module.css';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const Slider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalTime, setIntervalTime] = useState(2000);
  const [intervalId, setIntervalId] = useState(null);
  const [timeOutId, setTimeoutId] = useState(null);
  const [playNextImage, setPlayNextImage] = useState(false);
  const [isShowControls, setIsShowControls] = useState(true);

  useEffect(() => {
    return () => {
      stopSlider();
    };
  }, []);

  useEffect(() => {
    if (playNextImage) {
      getNextIndex();
      setPlayNextImage(false);
    }
  }, [playNextImage]);

  const getNextIndex = () => {
    setCurrentIndex((currentIndex + 1) % props.slides.length);
  };

  const getPrevIndex = () => {
    setCurrentIndex(
      (currentIndex - 1 + props.slides.length) % props.slides.length
    );
  };

  const startSlider = () => {
    setIsPlaying(true);

    setIntervalId(
      setInterval(function () {
        setPlayNextImage(true);
      }, intervalTime)
    );
  };

  const stopSlider = () => {
    clearInterval(intervalId);
    setIsPlaying(false);
  };

  const changeInterval = (value) => {
    stopSlider();
    setIntervalTime(value);
    startSlider();
  };

  const getCurrentSlide = () => {
    const { slides } = props;
    return slides[currentIndex];
  };

  const onMouseMoveHandler = () => {
    clearTimeout(timeOutId);
    setIsShowControls(true);
    setTimeoutId(
      setTimeout(() => {
        setIsShowControls(false);
      }, 2000)
    );
  };

  const onMouseLeaveHandler = () => {
    setIsShowControls(false);
  };

  const fullscreenHandle = useFullScreenHandle();

  const sliderWrapperStyles = cx(styles.sliderWrapper, {
    [styles.fullscreenOff]: fullscreenHandle.active === false,
  });

  return (
    <FullScreen handle={fullscreenHandle}>
      <div
        className={sliderWrapperStyles}
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <Slide {...getCurrentSlide()} />
        <SliderControls
          isPlaying={isPlaying}
          isFullscreen={fullscreenHandle.active}
          intervalTime={intervalTime}
          changeInterval={changeInterval}
          startSlider={startSlider}
          stopSlider={stopSlider}
          getNextIndex={getNextIndex}
          getPrevIndex={getPrevIndex}
          isShowControls={isShowControls}
          fullscreenHandle={
            fullscreenHandle.active
              ? fullscreenHandle.exit
              : fullscreenHandle.enter
          }
        />
      </div>
    </FullScreen>
  );
};

export default Slider;
