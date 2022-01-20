import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ArenaPlayer from '../../components/arenaPlayer/ArenaPlayer';
import ArenaMonster from '../../components/arenaMonster/ArenaMonster';
import RandomItems from '../../components/randomItems/RandomItems';
import OnlyPotions from '../../components/onlyPotions/OnlyPotions';
import DrawPotions from '../../components/drawPotions/DrawPotions';
import { setRandomEnemy } from '../../features/monsters';
import './Arena.scss';

const Arena = () => {
  const [showBtn, setShowBtn] = useState(false);

  const dispatch = useDispatch();

  const onClickFindEnemyHandler = () => {
    dispatch(setRandomEnemy());
  };

  return (
    <>
      <div className='arena-container'>
        <div className='d-flex center'>
          <div className='characters-side'>
            <ArenaPlayer />
            <OnlyPotions />
            {/* <UserInventory /> */}
          </div>
          <div className='buttons-side  justify-center d-flex'>
            <button className='enemy-btn' onClick={onClickFindEnemyHandler}>
              Find Enemy
            </button>
            <button className='attack-btn'>Attack</button>
          </div>
          <div className='enemy-side'>
            <ArenaMonster />
            <RandomItems />
          </div>
        </div>
        <div className='end-game'>
          <Link to={`/`} className='character-btn'>
            Go to characters page
          </Link>
          <Link to={`/main`} className='main-btn'>
            Go to main page
          </Link>
          <button className='enemy-btn' onClick={onClickFindEnemyHandler}>
            Find enemy
          </button>
        </div>
      </div>
    </>
  );
};

export default Arena;
