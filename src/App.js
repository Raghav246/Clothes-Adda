import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Items from './components/Items/Items.jsx';
import Cart from './Cart.jsx';
import Footer from './components/Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favourites from './Favourites.jsx';
export default function App(){
  const[products,setproducts]=useState([]);
  const[addcart,setaddcart]=useState([]);
  const[addfav,setaddfav]=useState([]);
    useEffect(()=>{
   async function fetchapi(){
    const fetchdata= await fetch(`https://fakestoreapi.com/products`);
    const jsondata=await fetchdata.json();
    setproducts(jsondata);
     }
     fetchapi();
    },[])
    const male="men's clothing";
    const female="women's clothing";
    const others="electronics";
    function receiveData(item){
      const newitem=[...addcart,item];
      setaddcart(newitem);
    }
   

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home product={products}/>}></Route>
        <Route path="/items/men" element={<Items product={products} category={male} receiveData={receiveData}/>}></Route>
        <Route path="/items/women" element={<Items product={products} category={female} receiveData={receiveData}/>}></Route>
        <Route path="/items/others" element={<Items product={products} category={others} receiveData={receiveData} />}></Route>
        <Route path="/items/cart" element={<Cart cartItem={addcart}/>}></Route>
      </Routes>
      
      
    </BrowserRouter>
    </>
  )
 
}


