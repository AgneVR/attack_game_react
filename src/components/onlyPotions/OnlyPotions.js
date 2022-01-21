import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePotionInArena } from '../../features/allCharacters';
import { getPotionEnergyInArena, getPotionHealtInArena } from '../../features/allCharacters';
import '../userInventory/UserInventory.scss';

const OnlyPotions = () => {
  const myInventory = useSelector((state) => state.characters.myCharacterInventory);

  const dispatch = useDispatch();

  const onClickPoisonHandler = (el, i) => {
    if (el.effect.health) {
      dispatch(getPotionHealtInArena(el.effect.health));
    } else if (el.effect.energy) {
      dispatch(getPotionEnergyInArena(el.effect.energy));
    }
    dispatch(removePotionInArena(i));
  };

  return (
    <div className='inventory-block only-potions'>
      <h4>My potions</h4>
      <div className='inventory-weapons'>
        {myInventory && myInventory.potions.length > 0 ? (
          myInventory.potions.map((el, i) => (
            <div className='inventory-weapon potion' key={`${i}-potions`}>
              <img src={el.image} alt='' />
              <p>{el.title}</p>
              <p>Price: {el.price}</p>
              <button onClick={() => onClickPoisonHandler(el, i)}>Use potion</button>
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
