import React from 'react';
import styles from './Slide.module.css';

const Slide = (props) => {
  const { title, description, src } = props;
  return (
    <div className={styles.slide}>
      <span className={styles.description}>{description}</span>
      <img src={src} alt={title} className={styles.slideImage} />
    </div>
  );
};

export default Slide;
