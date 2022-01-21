import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMyInventoryPotions } from '../../features/allCharacters';
import { substractGold } from '../../features/allCharacters';
import './DrawPotions.scss';

const DrawPotions = () => {
  const potions = useSelector((state) => state.trader.value.potions);
  const myInventor = useSelector((state) => state.characters.myCharacterInventory);
  const myCharacter = useSelector((state) => state.characters.myCharacter);

  const dispatch = useDispatch();

  const onClickHandler = (item) => {
    if (
      myInventor.potions.length + myInventor.weapons.length + myInventor.dropItems.length <
        myCharacter.inventorySlots &&
      myCharacter.gold >= item.price
    ) {
      dispatch(setMyInventoryPotions(item));
      dispatch(substractGold(item.price));
    } else {
      alert('No space left for weapons or You have not enought money');
    }
  };

  return (
    <div className='items-container'>
      {potions && potions.length > 0
        ? potions.map((el, i) => (
            <div key={i} className='single-item' onClick={() => onClickHandler(el)}>
              <div>
                <img src={el.image} alt='' />
              </div>
              <p>{el.title}</p>
              <p>Price: {el.price}</p>
            </div>
          ))
        : ''}
    </div>
  );
};

export default DrawPotions;
