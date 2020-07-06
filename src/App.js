import React from 'react';
import {Header} from './Components/Header';
import { Products } from './Components/Products';
import { Home } from './Components/Home';
import { ProductDetails } from './Components/ProductDetails';
import { NotFound } from './Components/NotFound';
import { Routes ,Route} from 'react-router';
import { ProductIndex } from './Components/ProductIndex';
import './App.css';


function App() {
  return (
    <div>
        <Header />
        <h1>Welcome OnlineShop</h1>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='products' element= {<Products />}>
            <Route path="/" element={<ProductIndex />}></Route>
            <Route path=':productId' element= {<ProductDetails />}></Route>
          </Route>
          <Route path='*' element= {<NotFound/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
