import React from 'react';
import DrawCharacters from '../../components/drawCharacters/DrawCharacters';
import './Characters.scss';

const Characters = () => {
  return (
    <div className='d-flex column'>
      <h2 className='text-center'>Choose your character</h2>
      <DrawCharacters />
    </div>
  );
};

export default Characters;
