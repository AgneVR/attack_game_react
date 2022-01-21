import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArenaPlayer from '../../components/arenaPlayer/ArenaPlayer';
import ArenaMonster from '../../components/arenaMonster/ArenaMonster';
import RandomItems from '../../components/randomItems/RandomItems';
import OnlyPotions from '../../components/onlyPotions/OnlyPotions';
import EndGameView from '../../components/endGameView/EndGameView';
import { setRandomEnemy, looseHealthInArena, resetMonster } from '../../features/monsters';
import {
  looseCharacterEnergyInArena,
  looseCharacterHealthInArena,
  addEnergyAfterMonsterAttack,
} from '../../features/allCharacters';
import './Arena.scss';

const Arena = () => {
  const monster = useSelector((state) => state.monsters.randomMonster);
  const character = useSelector((state) => state.characters.myCharacter);
  const myWeapon = useSelector((state) => state.characters.myWeapom);
  const gameStatus = useSelector((state) => state.characters.gameStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetMonster());
  }, []);

  const onClickFindEnemyHandler = () => {
    dispatch(setRandomEnemy());
  };

  const onClickAttackHandler = () => {
    //character attack
    let fullDamage = character.damage;

    console.log(character.health);

    if (myWeapon !== null && character.energy >= myWeapon.energyPerHit) {
      fullDamage += weaponDamage();
      dispatch(looseCharacterEnergyInArena(myWeapon.energyPerHit));
    }

    let criticalRandomHit = Math.floor(Math.random() * (100 - 1)) + 1;
    if (criticalRandomHit <= character.strength) {
      fullDamage = fullDamage * 3;
    }
    //monster loose
    dispatch(looseHealthInArena(fullDamage));

    //moster attack
    let randomMonsterDamage = Math.floor(Math.random() * (monster.maxDamage - 1));

    dispatch(looseCharacterHealthInArena(randomMonsterDamage));
    dispatch(addEnergyAfterMonsterAttack(character.stamina));
  };

  const weaponDamage = () => {
    let weponRandomDamage = Math.floor(Math.random() * (myWeapon.maxDamage - 1));
    return weponRandomDamage;
  };

  function enemySide() {
    if (monster !== null && monster.health > 0) {
      return <ArenaMonster />;
    } else if (monster !== null && monster.health <= 0) {
      return <RandomItems />;
    }
  }

  return (
    <>
      {!gameStatus && <EndGameView />}
      <div className='arena-container'>
        <div className='d-flex center'>
          <div className='characters-side'>
            <ArenaPlayer />
            <OnlyPotions />
          </div>
          <div className='buttons-side  justify-center d-flex'>
            {!monster || monster.health <= 0 ? (
              <button className='enemy-btn' onClick={onClickFindEnemyHandler}>
                Find Enemy
              </button>
            ) : (
              <button onClick={onClickAttackHandler} className='attack-btn'>
                Attack
              </button>
            )}
          </div>
          <div className='enemy-side'>{enemySide()}</div>
        </div>
        {monster && monster.health <= 0 && (
          <div className='end-game-btn'>
            <Link to={`/`} className='character-btn'>
              Go to characters page
            </Link>
            <Link to={`/main`} className='main-btn'>
              Go to main page
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Arena;
