import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMyCharacter } from '../../features/allCharacters';
import './DrawCharacters.scss';

const DrawCharacters = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const drawCharacters = useSelector((state) => state.characters.value);

  const onClickHandler = (el) => {
    dispatch(setMyCharacter(el));
    navigate('/main');
  };

  return (
    <div className='characters-container'>
      {drawCharacters.map((el, i) => (
        <div className='one-chatacter' key={i} onClick={() => onClickHandler(el)}>
          <div className='img-container'>
            <img src={el.image} alt='' />
          </div>

          <div className='d-flex around'>
            <div>
              <h3>Race: {el.race}</h3>
              <p>Damage: {el.damage}</p>
              <p>Health: {el.health}</p>
              <p>Energy: {el.energy}</p>
            </div>
            <div>
              <h3>Gold: {el.gold}</h3>
              <p>Stamina: {el.stamina}</p>
              <p>Strength: {el.strength}</p>
              <p>Inventory Slots: {el.inventorySlots}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrawCharacters;
