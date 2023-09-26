import React from 'react'

const Program = ({icon, title, text}) => {
  return (
    <div className="program">
        <div className='icon-container'>{icon}</div>
        <div className='program-title'>{title}</div>
        <span>{text}</span>
    </div>
  );
};

export default Program;