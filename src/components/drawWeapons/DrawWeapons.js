import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMyInventoryWeapons } from '../../features/allCharacters';
import { substractGold } from '../../features/allCharacters';
import '../drawPotions/DrawPotions.scss';

const DrawWeapons = () => {
  const weapons = useSelector((state) => state.trader.value.weapons);
  const effects = useSelector((state) => state.effects.value);
  const myInventor = useSelector((state) => state.characters.myCharacterInventory);
  const myCharacter = useSelector((state) => state.characters.myCharacter);

  const dispatch = useDispatch();

  function drawEffects(weaponEffects) {
    if (weaponEffects.length > 0) {
      return weaponEffects.map((el, i) => {
        return <li key={i}>{effects[el].title}</li>;
      });
    }
  }

  const onClickHandler = (item) => {
    if (
      myInventor.potions.length + myInventor.weapons.length < myCharacter.inventorySlots &&
      myCharacter.gold >= item.price
    ) {
      dispatch(setMyInventoryWeapons(item));
      dispatch(substractGold(item.price));
    } else {
      alert('No space left for weapons or You have not enought money');
    }
  };

  return (
    <div className='items-container'>
      {weapons && weapons.length > 0
        ? weapons.map((el, i) => (
            <div className='single-item weapon' onClick={() => onClickHandler(el)} key={i}>
              <div>
                <img src={el.image} alt='' />
              </div>
              <p>Max Damage: {el.maxDamage}</p>
              <p>Energy Per Hit: {el.energyPerHit}</p>
              <div>
                Effects: <ul>{drawEffects(el.effects)}</ul>
              </div>
              <p>Price: {el.price}</p>
            </div>
          ))
        : ''}
    </div>
  );
};

export default DrawWeapons;
