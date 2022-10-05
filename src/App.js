//import logo from './logo.svg';
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Home from "./components/Home";
import RegisterTournaments from "./components/RegisterTournaments";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Aqui importamos nuestra imagen
import "./App.css";
import NavBarTournaments from "./components/NavBarTournaments";
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <NavBarTournaments />
         <Routes>
         <Route path='/' element={<Home greeting={'Welcome to Richard Salinas Tennis'} />} />
             <Route path='/category:id' element={<ItemListContainer greeting={'Welcome to Richard Salinas Tennis'} />} />
             <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Welcome to Richard Salinas Tennis'} />} />
             <Route path='/item/:id' element={<ItemDetailContainer />} />  
             <Route path='/Events' element={<h1>Events</h1> } />
             <Route path='/Draws' element={<h1>Draws</h1> } />
             <Route path='/cart' element={<Cart />} />
             <Route path='/cart' element={<Checkout />} />
          </Routes>
      </BrowserRouter>
      
      <footer class="footer__copyright">
        <div>
          <p>Copyright All Rights Reserverd</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
