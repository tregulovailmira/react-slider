import React from 'react';
import Icon from '@mdi/react';

const Control = (props) => {
  const { path, onClick } = props;
  return (
    <div onClick={onClick}>
      <Icon path={path} size={2} color="black" />
    </div>
  );
};

export default Control;
