//import logo from './logo.svg';
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Home from "./components/Home";
import RegisterTournaments from "./components/RegisterTournaments";
import React, { Component, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import NavBarTournaments from "./components/NavBarTournaments";
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import CacheContext, { CacheProvider } from './contexts/CacheContext';
import FavoritosContext, { FavoritosProvider } from './contexts/FavoritosContext';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Favoritos from './components/Favoritos';
import { CartProvider } from './contexts/CartContext';
import { getFireStore } from 'firebase/firestore';
//import { createAllProducts } from "./utils/products";
import { addDoc } from "./utils/products";

function App() {

  useEffect(() =>{
    //createAllProducts()
  },[]);
  
  return (
    <div className="App">
      <BrowserRouter>
          <CacheProvider>
              <CartProvider>
                <NavBarTournaments />
                <FavoritosProvider>
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
                  </FavoritosProvider>  
            </CartProvider>
        </CacheProvider>
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
