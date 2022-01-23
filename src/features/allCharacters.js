import { createSlice } from '@reduxjs/toolkit';

export const allCharactersReducer = createSlice({
  name: 'characters',
  initialState: {
    value: [
      {
        image:
          'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte097d3ac18c5b8ed/6165ec51ff59d903990f26e3/EE3E9KVL9ROW1613677289232.png',
        race: 'Human',
        damage: 15,
        health: 150,
        energy: 160,
        stamina: 3,
        strength: 1,
        inventorySlots: 8,
        gold: 10000000,
      },
      {
        image:
          'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltad40c8b16ba5146c/6165db02ff59d903990f26dd/3BSJB91SIUBO1613677288515.png',
        race: 'Dwarf',
        damage: 5,
        health: 90,
        energy: 30,
        stamina: 4,
        strength: 3,
        inventorySlots: 5,
        gold: 300,
      },
      {
        image:
          'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltdd9c3bc7630ea097/6165ee1b85a779070bc77f55/A62H0NRB056O1613677289519.png',
        race: 'Elf',
        damage: 4,
        health: 100,
        energy: 40,
        stamina: 5,
        strength: 1,
        inventorySlots: 2,
        gold: 200,
      },
      {
        image:
          'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt5440cbe6b11972e4/6165e787c7341a058edee6c1/ZGHFCTYH33H41613677288710.png',
        race: 'Gnome',
        damage: 3,
        health: 80,
        energy: 80,
        stamina: 7,
        strength: 1,
        inventorySlots: 4,
        gold: 1000,
      },

      {
        image:
          'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt8a0bea138cdc9f77/6165eebb70b75d5011e405d4/GYI6XASNQ8YE1613677290450.png',
        race: 'Orc',
        damage: 7,
        health: 120,
        energy: 40,
        stamina: 1,
        strength: 10,
        inventorySlots: 5,
        gold: 50,
      },
      {
        image:
          'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blte86b6ed1f29656b9/6165e7dedfd0436b6dcf6e2e/YAAFZMAKCVPG1613677288954.png',
        race: 'Goblin',
        damage: 5,
        health: 90,
        energy: 90,
        stamina: 5,
        strength: 2,
        inventorySlots: 3,
        gold: 200,
      },
      {
        image:
          'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt9d279b401555fd09/6165efc047c23d6a01ffdf49/NF9Y4RYPBLZ91613677291342.png',
        race: 'Troll',
        damage: 6,
        health: 100,
        energy: 70,
        stamina: 4,
        strength: 4,
        inventorySlots: 3,
        gold: 100,
      },
      {
        image:
          'https://images.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/blt0b1f2cd145aedbcd/6165f001a3e18902e03811d3/4UX5EM1CFKV81613677292421.png',
        race: 'Undead',
        damage: 4,
        health: 40,
        energy: 50,
        stamina: 10,
        strength: 1,
        inventorySlots: 8,
        gold: 400,
      },
    ],
    myCharacter: null,
    myCharacterInventory: {
      weapons: [],
      potions: [],
      dropItems: [],
    },
    myWeapom: null,
    gameStatus: true,
  },
  reducers: {
    setAllCharacters: (state, action) => {
      state.value = action.payload;
    },
    setMyCharacter: (state, { payload }) => {
      let character = payload;
      state.myCharacter = {
        ...character,
        fullHealth: character.health,
        fullEnergy: character.energy,
      };
    },
    setMyInventoryWeapons: (state, { payload }) => {
      state.myCharacterInventory = {
        ...state.myCharacterInventory,
        weapons: [...state.myCharacterInventory.weapons, payload],
      };
    },
    setMyInventoryPotions: (state, { payload }) => {
      state.myCharacterInventory = {
        ...state.myCharacterInventory,
        potions: [...state.myCharacterInventory.potions, payload],
      };
    },
    setMyDropItems: (state, { payload }) => {
      state.myCharacterInventory = {
        ...state.myCharacterInventory,
        dropItems: [...state.myCharacterInventory.dropItems, payload],
      };
    },
    substractGold: (state, { payload }) => {
      state.myCharacter.gold -= payload;
    },
    addGold: (state, { payload }) => {
      state.myCharacter.gold += payload;
    },
    removeItemFromWeapon: (state, { payload }) => {
      const deleteIndex = payload;
      const result = state.myCharacterInventory.weapons.filter((el, i) => i !== deleteIndex);
      state.myCharacterInventory.weapons = result;
    },
    removeItemFromPoision: (state, { payload }) => {
      const deleteIndex = payload;
      const result = state.myCharacterInventory.potions.filter((el, i) => i !== deleteIndex);
      state.myCharacterInventory.potions = result;
    },
    removeDropItem: (state, { payload }) => {
      const deleteIndex = payload;
      const result = state.myCharacterInventory.dropItems.filter((el, i) => i !== deleteIndex);
      state.myCharacterInventory.dropItems = result;
    },
    addMyWeapon: (state, { payload }) => {
      let usedslotsCount =
        state.myCharacterInventory.weapons.length +
        state.myCharacterInventory.potions.length +
        state.myCharacterInventory.dropItems.length;
      console.log(usedslotsCount, 'usedslotsCount');

      if (usedslotsCount < state.myCharacter.inventorySlots) {
        const deleteIndex = payload.index;
        const result = state.myCharacterInventory.weapons.filter((el, i) => i !== deleteIndex);
        state.myCharacterInventory.weapons = result;

        if (state.myWeapom !== null) {
          state.myCharacterInventory = {
            ...state.myCharacterInventory,
            weapons: [...state.myCharacterInventory.weapons, state.myWeapom],
          };

          if (state.myWeapom.effects && state.myWeapom.effects.length > 0) {
            state.myWeapom.effects.forEach((el) => {
              let currentEffect = payload.effects[el].effect;
              if (currentEffect.health) {
                state.myCharacter.health -= currentEffect.health;
              } else if (currentEffect.energy) {
                state.myCharacter.energy -= currentEffect.energy;
              } else if (currentEffect.stamina) {
                state.myCharacter.stamina -= currentEffect.stamina;
              } else if (currentEffect.strength) {
                state.myCharacter.strength -= currentEffect.strength;
              } else if (currentEffect.inventorySlots) {
                state.myCharacter.inventorySlots -= currentEffect.inventorySlots;
              }
            });
          }
        }

        state.myWeapom = payload.weapon;

        if (payload.weapon.effects && payload.weapon.effects.length > 0) {
          payload.weapon.effects.forEach((el) => {
            let currentEffect = payload.effects[el].effect;
            if (currentEffect.health) {
              state.myCharacter.health += currentEffect.health;
            } else if (currentEffect.energy) {
              state.myCharacter.energy += currentEffect.energy;
            } else if (currentEffect.stamina) {
              state.myCharacter.stamina += currentEffect.stamina;
            } else if (currentEffect.strength) {
              state.myCharacter.strength += currentEffect.strength;
            } else if (currentEffect.inventorySlots) {
              state.myCharacter.inventorySlots += currentEffect.inventorySlots;
            }
          });
        }
      } else {
        alert('Inventory Full');
      }
    },
    removePotionInArena: (state, { payload }) => {
      const deleteIndex = payload;
      const result = state.myCharacterInventory.potions.filter((el, i) => i !== deleteIndex);
      state.myCharacterInventory.potions = result;
    },
    getPotionHealtInArena: (state, { payload }) => {
      state.myCharacter.health += payload;
    },
    getPotionEnergyInArena: (state, { payload }) => {
      state.myCharacter.energy += payload;
    },
    looseCharacterEnergyInArena: (state, { payload }) => {
      state.myCharacter.energy -= payload;
    },
    looseCharacterHealthInArena: (state, { payload }) => {
      let newHealth = state.myCharacter.health - payload;
      if (newHealth <= 0) {
        state.gameStatus = false;
      } else {
        state.myCharacter.health = newHealth;
      }
    },
    addEnergyAfterMonsterAttack: (state, { payload }) => {
      state.myCharacter.energy += payload;
    },
    resetGame: (state, action) => {
      state.myCharacter = null;
      state.myCharacterInventory = {
        weapons: [],
        potions: [],
        dropItems: [],
      };
      state.myWeapom = null;
      state.gameStatus = true;
    },
  },
});

export const {
  setAllCharacters,
  setMyInventoryWeapons,
  setMyInventoryPotions,
  setMyCharacter,
  substractGold,
  addGold,
  removeItemFromWeapon,
  removeItemFromPoision,
  addMyWeapon,
  removeDropItem,
  setMyDropItems,
  getPotionHealtInArena,
  getPotionEnergyInArena,
  removePotionInArena,
  looseCharacterEnergyInArena,
  looseCharacterHealthInArena,
  addEnergyAfterMonsterAttack,
  resetGame,
} = allCharactersReducer.actions;
export default allCharactersReducer.reducer;
