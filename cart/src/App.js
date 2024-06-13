import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      price: 33400,
      name: "Vivo V 21 5G",
      quantity: 0,
    },
    {
      price: 14999,
      name: "Redmi Note 7 pro",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0
      ? newProductList[index].quantity--
      : (newProductList[index].quantity = 0);
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
