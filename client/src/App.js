import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {Provider} from 'react-redux';
import store from '../src/store/store.js';
import {BrowserRouter,NavLink, Routes,Route} from 'react-router-dom';

import Login from './components/login/login';
import Homepage from './pages/Homepage';
function App() {
 
  return (
<BrowserRouter>
    <Provider store={store}>
  
        <Routes>
          <Route path='/' element={<Login/>} exact />
          <Route path='*' element={<Homepage/>} exact />

          
        </Routes>
 
    </Provider>
    </BrowserRouter>
  );
}

export default App;
