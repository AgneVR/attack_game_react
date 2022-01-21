import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DrawCharacters from '../../components/drawCharacters/DrawCharacters';
import { resetGame } from '../../features/allCharacters';
import './Characters.scss';

const Characters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetGame());
  }, []);

  return (
    <>
      <div className='d-flex column'>
        <h2 className='text-center'>Choose your character</h2>
        <DrawCharacters />
      </div>
    </>
  );
};

export default Characters;
