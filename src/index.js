import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import allCharactersReducer from './features/allCharacters';
import traderReducer from './features/traderWeaponsPotions';
import monstersReducer from './features/monsters';
import effectsReducer from './features/effects';

const store = configureStore({
  reducer: {
    characters: allCharactersReducer,
    trader: traderReducer,
    monsters: monstersReducer,
    effects: effectsReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
