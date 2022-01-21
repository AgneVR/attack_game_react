import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ArenaInventory from '../arenaInventory/ArenaInventory';
import './ArenaPlayer.scss';

const ArenaPlayer = () => {
  const [changeBtnText, setChangeBtnText] = useState('Show Inventory');
  const [showInventory, setShowInventory] = useState(false);
  const oneCharacter = useSelector((state) => state.characters.myCharacter);

  const characterHealthCalc = () => {
    return (oneCharacter.health * 100) / oneCharacter.fullHealth;
  };
  const characterEnergyCalc = () => {
    return (oneCharacter.energy * 100) / oneCharacter.fullEnergy;
  };

  const onClickInventoryShowHandler = (text) => {
    setShowInventory(!showInventory);
    if (changeBtnText === text) {
      setChangeBtnText('Hide Inventory');
    } else {
      setChangeBtnText('Show Inventory');
    }
  };

  return (
    <>
      {oneCharacter && (
        <div className='arena-player'>
          <div className='img-container'>
            <img src={oneCharacter.image} alt='' />
          </div>
          <h3 className='text-center'>Race: {oneCharacter.race}</h3>
          <h4 className='text-center'>Gold: {oneCharacter.gold}</h4>
          <div className='inventory-show-block'>
            <button
              className='invent-btn'
              onClick={() => onClickInventoryShowHandler('Show Inventory')}
            >
              {changeBtnText}
            </button>
            {showInventory && <ArenaInventory />}
          </div>
          <h4>Health: {oneCharacter.health}</h4>
          <div className='health-progress'>
            <div className='progress-bar one' style={{ width: `${characterHealthCalc()}%` }}></div>
          </div>
          <h4>Energy: {oneCharacter.energy}</h4>
          <div className='energy-progress'>
            <div className='energy two' style={{ width: `${characterEnergyCalc()}%` }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArenaPlayer;
