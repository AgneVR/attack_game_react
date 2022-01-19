import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Characters from './pages/characters/Characters';
import Shop from './pages/shop/Shop';
import Arena from './pages/arena/Arena';
import Main from './pages/main/Main';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/arena' element={<Arena />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
