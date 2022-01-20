import React from 'react';
import { useSelector } from 'react-redux';
import './ArenaPlayer.scss';

const ArenaPlayer = () => {
  const oneCharacter = useSelector((state) => state.characters.myCharacter);
  let charactersHealh = oneCharacter.health;
  let charactersEnergy = oneCharacter.energy;

  return (
    <>
      {oneCharacter && (
        <div className='arena-player'>
          <div className='img-container'>
            <img src={oneCharacter.image} alt='' />
          </div>
          <h3 className='text-center'>Race: {oneCharacter.race}</h3>

          <h4>Health</h4>
          <div className='health-progress'>
            <div className='progress-bar one' style={{ width: `${charactersHealh}%` }}></div>
          </div>
          <h4>Energy</h4>
          <div className='energy-progress'>
            <div className='energy two' style={{ width: `${charactersEnergy}%` }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArenaPlayer;
