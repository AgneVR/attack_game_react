import React from 'react';
import { Link } from 'react-router-dom';
import './EndGameView.scss';

const EndGameView = () => {
  return (
    <div className='end-game'>
      <div className='text-container'>
        <h1>Game over</h1>
        <Link to={`/`}>Start again</Link>
      </div>
    </div>
  );
};

export default EndGameView;
