import React from 'react';

const Slide = (props) => {
  const { title, description, src } = props;
  return (
    <div>
      <span>{description}</span>
      <img src={src} alt={title} />
    </div>
  );
};

export default Slide;
