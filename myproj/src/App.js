import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import AboutUs from './components/pages/AboutUs/AboutUs';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';

import './App.css';


function App() {

  /*const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 899 },
    { id: 2, title: 'Product 2', price: 982 },
    { id: 3, title: 'Product 3', price: 322 },
    { id: 4, title: 'Product 4', price: 763 },
    { id: 5, title: 'Product 5', price: 389 },
  ]);*/


  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path="/" element={<ProductList />}>
        </Route>
        <Route path='about' element={<AddProduct />}></Route>
        <Route path='add' element={<AddProduct />}></Route>
        <Route path='/edit/:id' element={<EditProduct />}></Route>
      </Routes>


    </div>
  );
}

export default App;