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
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newTotalAmount -= newProductList[index].price;
      newProductList[index].quantity--;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

const resetQuantity = () => {
  let newProductList = [...productList];
  newProductList.map((products) => {
    products.quantity = 0
  })
  setProductList(newProductList);
  setTotalAmount(0);
}

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
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
