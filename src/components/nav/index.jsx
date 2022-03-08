import React, { useState } from 'react'
import Hearted from './hearted'
import SearchInput from './searchInput'
import  './index.scss'
import { Link } from 'react-router-dom';
function Nav() {

    const[isScrolled, setIsScrolled]=useState(false);
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0? false: true);
        return()=>(window.onscroll=null);
        
    }
  return (
    <div className={isScrolled? "nav scrolled" : "nav"}>
        <div className='nav_left'>
            <Link to="/" style={{color: "white", fontSize:"large", textDecoration:"none"}}>
                <h3>MovieJoy </h3>
            </Link>
        </div>
        <div className='nav_right'>
            <SearchInput />
            <Hearted/>
        </div>
    </div>
  )
}

export default Nav