import React, { useState, useEffect, useCallback } from 'react';
import SliderControls from './SliderControls';
import Slide from './Slide';

const Slider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [intervalTime, setIntervalTime] = useState(2000);
  const [intervalId, setIntervalId] = useState(null);
  const [playNextImage, setPlayNextImage] = useState(false);

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

  const changeFullScreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      <Slide {...getCurrentSlide()} />
      <SliderControls
        isPlaying={isPlaying}
        isFullscreen={isFullscreen}
        intervalTime={intervalTime}
        changeInterval={changeInterval}
        startSlider={startSlider}
        stopSlider={stopSlider}
        getNextIndex={getNextIndex}
        getPrevIndex={getPrevIndex}
        changeFullScreen={changeFullScreen}
      />
    </div>
  );
};

export default Slider;
