import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import DrawOneCharacter from '../../components/drawOneCharacter/DrawOneCharacter';
import UserInventory from '../../components/userInventory/UserInventory';

import './Main.scss';

const Main = () => {
  return (
    <>
      <NavBar />
      <div className='container-main'>
        <div className='character-side'>
          <DrawOneCharacter />
        </div>
        <div className='inventory-side'>
          <UserInventory />
        </div>
      </div>
    </>
  );
};

export default Main;
