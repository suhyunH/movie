import { FavoriteBorder, Search} from '@material-ui/icons';
import React, { useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom';
import "./searchInput.scss"

const SearchInput=()=>{
    const navigate = useNavigate();
    const [input, setInput]=useState("");
    const onSearch=(ev)=>{
        ev.preventDefault();
        if(input){
            navigate('/search',{state:input});
        }

    }
    const onInputChange =(ev)=>{
        setInput(ev.target.value);
    }
    const onKeyDown =(ev)=>{
        if(ev.keyCode ===13){
            onSearch(ev);
          }
    }
return(
        <div className='searchContainer'>
            <input className='searchInput' type="text" onChange={onInputChange} onKeyDown={onKeyDown} placeholder='Search the movie' value={input} required/>
            <button className='searchBtn' onClick={onSearch}>
            <Search />
            </button>
        </div>    
)
}

export default SearchInput;