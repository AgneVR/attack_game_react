import React, { useState } from 'react';
import NavBar from '../../components/navBar/NavBar';
import DrawWeapons from '../../components/drawWeapons/DrawWeapons';
import UserInventory from '../../components/userInventory/UserInventory';
import DrawPotions from '../../components/drawPotions/DrawPotions';
import './Shop.scss';

const Shop = () => {
  const [showItems, setShowItems] = useState('weapons');

  const onClickHandler = (items) => {
    if (items === 'weapons') {
      setShowItems('weapons');
    } else if (items === 'potions') {
      setShowItems('potions');
    }
  };

  return (
    <>
      <NavBar showMain={true} />
      <div className='container-shop d-flex'>
        <div className='info-block'>
          <div className='left-side-weapons'>
            <div className='btn-container'>
              <button className='btn1' onClick={() => onClickHandler('weapons')}>
                Weapons
              </button>
              <button className='btn2' onClick={() => onClickHandler('potions')}>
                Potions
              </button>
            </div>
            <div className='weap'>
              {showItems === 'weapons' ? <DrawWeapons /> : <DrawPotions />}
            </div>
          </div>
          <div className='left-side-inventory'>
            <UserInventory />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
