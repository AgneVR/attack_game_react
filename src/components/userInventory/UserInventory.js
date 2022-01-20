import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGold } from '../../features/allCharacters';
import { removeItemFromPoision } from '../../features/allCharacters';
import { removeItemFromWeapon } from '../../features/allCharacters';
import { addMyWeapon } from '../../features/allCharacters';
import { removeDropItem } from '../../features/allCharacters';
import './UserInventory.scss';

const UserInventory = () => {
  const myInventory = useSelector((state) => state.characters.myCharacterInventory);
  const effects = useSelector((state) => state.effects.value);

  const dispatch = useDispatch();

  const onClickWeaponHandler = (el, i) => {
    dispatch(addGold(el.price / 2));

    dispatch(removeItemFromWeapon(i));
  };

  const onClickPoisonHandler = (el, i) => {
    dispatch(addGold(el.price / 2));
    dispatch(removeItemFromPoision(i));
  };

  const onClickMyWeaponHandler = (el, i) => {
    dispatch(addMyWeapon({ weapon: el, index: i, effects: effects }));
  };

  const onClickDropItemsHandler = (el, i) => {
    dispatch(addGold(el.price));
    dispatch(removeDropItem(i));
  };

  return (
    <div className='inventory-block'>
      <h2 className='text-center'>My weapons</h2>
      <div className='inventory-weapons'>
        {myInventory && myInventory.weapons.length > 0 ? (
          myInventory.weapons.map((el, i) => (
            <div className='inventory-weapon' key={`${i}-weapons`}>
              <div className='img-style'>
                <img src={el.image} alt='' />
              </div>
              <p>Price: {el.price}</p>
              <button onClick={() => onClickMyWeaponHandler(el, i)} className='equip'>
                Equip
              </button>
              <button onClick={() => onClickWeaponHandler(el, i)}>Sell</button>
            </div>
          ))
        ) : (
          <p className='text-center'>No weapons</p>
        )}
      </div>
      <h2 className='text-center'>My potions</h2>
      <div className='inventory-weapons'>
        {myInventory && myInventory.potions.length > 0 ? (
          myInventory.potions.map((el, i) => (
            <div className='inventory-weapon' key={`${i}-potions`}>
              <img src={el.image} alt='' />
              <p>Price: {el.price}</p>
              <button onClick={() => onClickPoisonHandler(el, i)}>Sell</button>
            </div>
          ))
        ) : (
          <p className='text-center'>No potions</p>
        )}
      </div>
      <h2 className='text-center'>My drop items</h2>
      <div className='inventory-weapons'>
        {myInventory && myInventory.dropItems.length > 0 ? (
          myInventory.dropItems.map((el, i) => (
            <div className='inventory-weapon' key={`${i}-dropItems`}>
              <img src={el.image} alt='' />
              <p>Price: {el.price}</p>
              <button onClick={() => onClickDropItemsHandler(el, i)}>Sell</button>
            </div>
          ))
        ) : (
          <p className='text-center'>No potions</p>
        )}
      </div>
    </div>
  );
};

export default UserInventory;
