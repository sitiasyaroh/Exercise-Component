import {useState} from 'react';
import React from 'react';
import Product from './Product';
import './App.css';

function App() {
  const [listProd, setListProd] = useState([
    {
      Product: "RAM",
    },
    {
      Product: "Laptop",
    },
    {
      Product: "CD/DVD",
    },
    {
      Product: "Flashdisk",
    },
    {
      Product: "Harddisk",
    },
  ]);

  return (
    <div className="App">
      <p>List Product</p>
      {listProd.map((item) => {
        return <li>{item.Product}</li>;
      })}
      <Product daftarProduct={listProd} />
    </div>
  );
}

export default App;
