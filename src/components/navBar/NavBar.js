import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './NavBar.scss';

const NavBar = ({ showMain }) => {
  const myGold = useSelector((state) => state.characters.myCharacter);

  return (
    <>
      <nav>
        <div>
          {showMain ? <Link to={`/main`}>Main</Link> : <Link to={`/shop`}>Shop</Link>}
          <Link to={`/arena`}>Arena</Link>
        </div>
        <h3>Gold: {myGold.gold && myGold.gold}</h3>
      </nav>
    </>
  );
};

export default NavBar;
