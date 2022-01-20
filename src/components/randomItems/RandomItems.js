import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMyDropItems } from '../../features/allCharacters';
import { removeDropItemFromMonster } from '../../features/monsters';
import './RandomItems.scss';

const RandomItems = () => {
  const monster = useSelector((state) => state.monsters.randomMonster);
  const myInventor = useSelector((state) => state.characters.myCharacterInventory);
  const myCharacter = useSelector((state) => state.characters.myCharacter);
  const dispatch = useDispatch();

  const onClickHandler = (item, i) => {
    if (
      myInventor.potions.length + myInventor.weapons.length + myInventor.dropItems.length <
      myCharacter.inventorySlots
    ) {
      console.log(i);
      dispatch(setMyDropItems(item));
      dispatch(removeDropItemFromMonster(i));
    } else {
      alert('No space left for drops');
    }
  };

  return (
    <div className='random-items-container'>
      {monster && monster.drops.length > 0 ? (
        monster.drops.map((el, i) => (
          <div className='one-drop' key={i}>
            <div>
              <img src={el.image} alt='' />
            </div>
            <p>Price: {el.price}</p>
            <button onClick={() => onClickHandler(el, i)}>Add to inventory</button>
          </div>
        ))
      ) : (
        <p>No items left</p>
      )}
    </div>
  );
};

export default RandomItems;
