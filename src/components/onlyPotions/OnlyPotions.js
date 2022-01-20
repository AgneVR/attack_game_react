import React from 'react';
import { useSelector } from 'react-redux';
import '../userInventory/UserInventory.scss';

const OnlyPotions = () => {
  const myInventory = useSelector((state) => state.characters.myCharacterInventory);
  return (
    <div className='inventory-block only-potions'>
      <h4>My potions</h4>
      <div className='inventory-weapons'>
        {myInventory && myInventory.potions.length > 0 ? (
          myInventory.potions.map((el, i) => (
            <div className='inventory-weapon' key={`${i}-potions`}>
              <img src={el.image} alt='' />
              <p>Price: {el.price}</p>
              <button>Use potion</button>
            </div>
          ))
        ) : (
          <p className='text-center'>No potions</p>
        )}
      </div>
    </div>
  );
};

export default OnlyPotions;
