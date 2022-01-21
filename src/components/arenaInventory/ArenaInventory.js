import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGold } from '../../features/allCharacters';
import { removeDropItem } from '../../features/allCharacters';
import './ArenaInventory.scss';

const ArenaInventory = () => {
  const myInventory = useSelector((state) => state.characters.myCharacterInventory);

  const dispatch = useDispatch();

  const onClickDropItemsHandler = (el, i) => {
    dispatch(addGold(el.price));
    dispatch(removeDropItem(i));
  };
  return (
    <div className='inventory-block arena-block'>
      <h4 className='text-center'>My weapons</h4>
      <div className='inventory-weapons'>
        {myInventory && myInventory.weapons.length > 0 ? (
          myInventory.weapons.map((el, i) => (
            <div className='inventory-weapon' key={`${i}-weapons`}>
              <div className='img-style'>
                <img src={el.image} alt='' />
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>No weapons</p>
        )}
      </div>
      <h4 className='text-center'>My potions</h4>
      <div className='inventory-weapons'>
        {myInventory && myInventory.potions.length > 0 ? (
          myInventory.potions.map((el, i) => (
            <div className='inventory-weapon' key={`${i}-potions`}>
              <div className='img-style'>
                <img src={el.image} alt='' />
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>No potions</p>
        )}
      </div>
      <h4 className='text-center'>My drop items</h4>
      <div className='inventory-weapons'>
        {myInventory && myInventory.dropItems.length > 0 ? (
          myInventory.dropItems.map((el, i) => (
            <div className='inventory-weapon' key={`${i}-dropItems`}>
              <img src={el.image} alt='' />
              <p className='drop-price'>Price: {el.price}</p>
              <button onClick={() => onClickDropItemsHandler(el, i)}>Sell</button>
            </div>
          ))
        ) : (
          <p className='text-center'>No drop items</p>
        )}
      </div>
    </div>
  );
};

export default ArenaInventory;
