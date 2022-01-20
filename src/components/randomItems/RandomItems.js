import React from 'react';
import { useSelector } from 'react-redux';
import './RandomItems.scss';

const RandomItems = () => {
  const monster = useSelector((state) => state.monsters.randomMonster);
  console.log(monster);

  return (
    <div className='random-items-container'>
      {monster &&
        monster.drops.length > 0 &&
        monster.drops.map((el, i) => (
          <div className='one-drop' key={i}>
            <div>
              <img src={el.image} alt='' />
            </div>
            <p>Price: {el.price}</p>
          </div>
        ))}
    </div>
  );
};

export default RandomItems;
