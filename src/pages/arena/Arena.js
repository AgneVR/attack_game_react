import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArenaPlayer from '../../components/arenaPlayer/ArenaPlayer';
import ArenaMonster from '../../components/arenaMonster/ArenaMonster';
import RandomItems from '../../components/randomItems/RandomItems';
import OnlyPotions from '../../components/onlyPotions/OnlyPotions';
import DrawPotions from '../../components/drawPotions/DrawPotions';
import UserInventory from '../../components/userInventory/UserInventory';
import { setRandomEnemy } from '../../features/monsters';
import './Arena.scss';

const Arena = () => {
  const [showInventory, setShowInventory] = useState(false);

  const monster = useSelector((state) => state.monsters.randomMonster);

  const dispatch = useDispatch();

  const onClickFindEnemyHandler = () => {
    dispatch(setRandomEnemy());
  };

  const onClickInventoryShowHandler = () => {
    setShowInventory(!showInventory);
  };
  function enemySide() {
    if (monster !== null && monster.health > 0) {
      return <ArenaMonster />;
    } else if (monster !== null && monster.health === 0) {
      return <RandomItems />;
    }
  }

  return (
    <>
      <div className='arena-container'>
        <div className='d-flex center'>
          <div className='characters-side'>
            <ArenaPlayer onClickInventoryShowHandler={onClickInventoryShowHandler} />
            {showInventory && <UserInventory />}

            <OnlyPotions />
          </div>
          <div className='buttons-side  justify-center d-flex'>
            {!monster ? (
              <button className='enemy-btn' onClick={onClickFindEnemyHandler}>
                Find Enemy
              </button>
            ) : (
              <button className='attack-btn'>Attack</button>
            )}
          </div>
          <div className='enemy-side'>{enemySide()}</div>
        </div>
        {monster && monster.health === 0 && (
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
        )}
      </div>
    </>
  );
};

export default Arena;
