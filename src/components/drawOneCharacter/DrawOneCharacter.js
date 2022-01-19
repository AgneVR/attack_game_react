import React from 'react';
import { useSelector } from 'react-redux';
import './DrawOneCharacter.scss';

const DrawOneCharacter = () => {
  const oneCharacter = useSelector((state) => state.characters.myCharacter);
  const myWeapon = useSelector((state) => state.characters.myWeapom);
  return (
    <>
      {oneCharacter && (
        <div className='one-chatacter'>
          <div className='img-container'>
            <img src={oneCharacter.image} alt='' />
          </div>

          <div className='d-flex around'>
            <div>
              <h3>Race: {oneCharacter.race}</h3>
              <p>Damage: {oneCharacter.damage}</p>
              <p>Health: {oneCharacter.health}</p>
              <p>Energy: {oneCharacter.energy}</p>
            </div>
            <div>
              <h3>Gold: {oneCharacter.gold}</h3>
              <p>Stamina: {oneCharacter.stamina}</p>
              <p>Strength: {oneCharacter.strength}</p>
              <p>Inventory Slots: {oneCharacter.inventorySlots}</p>
            </div>
          </div>
          <div className='d-flex center justify-center column'>
            <h3>Chosen weapon:</h3>
            <div className='chosen-weapon'>
              {myWeapon !== null && <img src={myWeapon.image} alt='' />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawOneCharacter;
