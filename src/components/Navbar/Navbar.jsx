import React,{useState} from 'react'
import WcIcon from '@mui/icons-material/Wc';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homes from '../Home/Home';
export default function Navbar() {
  const[searchvalue,setsearchvalue]=useState('');
  return (
    <>
    <div className="navbar1">
     <div className='left'>
     <span className="icon"> <WcIcon/> </span>
     <span className="icon-text">Clothes ADDA</span>
     </div> 
     <div className="middle">
     <input type="text" placeholder='Search clothes by name' value={searchvalue} onChange={(e)=>setsearchvalue(e.target.value)}/>
     <Homes searchvalue={searchvalue}/>
     <Link to="/" className='item'>Home</Link>
     <Link to="/items/men" className='item'>Male </Link>
     <Link to="/items/women" className='item'>Female </Link>
     <Link to="/items/others" className='item'>Others Items</Link>
     </div>
     <div className="right">
    <span><SearchIcon/></span>
    <div></div>
    <Link to="/items/favourite"><FavoriteBorderIcon/></Link>
    <Link to="/items/cart"><ShoppingCartIcon/></Link>
     </div>
     </div>

    
     </>
  )
}
