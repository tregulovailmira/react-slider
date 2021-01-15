import React from 'react';
import Icon from '@mdi/react';
import styles from './Control.module.css';

const Control = (props) => {
  const { path, onClick } = props;
  return (
    <div onClick={onClick} className={styles.control}>
      <Icon path={path} size={2} color="black" />
    </div>
  );
};

export default Control;
