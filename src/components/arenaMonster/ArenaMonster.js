import React from 'react';
import { useSelector } from 'react-redux';
import './ArenaMonster.scss';

const ArenaMonster = () => {
  const oneMonster = useSelector((state) => state.monsters.randomMonster);

  const monsterHealthCalc = () => {
    return (oneMonster.health * 100) / oneMonster.fullHealth;
  };

  return (
    <>
      {oneMonster && (
        <div className='monster-box'>
          <div className='img-container'>
            <img src={oneMonster.image} alt='' />
          </div>
          <h3 className='text-center'>Name: {oneMonster.name}</h3>
          <h4>Health: {oneMonster.health}</h4>
          <div className='monsters-progress'>
            <div className='health' style={{ width: `${monsterHealthCalc()}%` }}></div>
          </div>

          <div className='d-flex around'>
            <p>Max Damage: {oneMonster.maxDamage}</p>
            <p>Max Items Drop: {oneMonster.maxItemsDrop}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ArenaMonster;
