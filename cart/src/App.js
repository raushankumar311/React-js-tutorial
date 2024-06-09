import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';


function App() {
  const productList = [
    {
      price: 33400,
      name: "Vivo V 21 5G",
      quantity: 0
    },
    {
      price: 14999,
      name: "Redmi Note 7 pro",
      quantity: 0
    }
  ]
  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
      <ProductList productList ={productList}/>
    </main>
    {/* <Footer/> */}
    </>
  );
}

export default App;
