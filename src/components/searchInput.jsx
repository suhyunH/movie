import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';


const SearchInput=()=>{
    const navigate = useNavigate();

    const [input, setInput]=useState("");
    const onSearch=(ev)=>{
        ev.preventDefault()
        navigate('/search',{state:input});
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
    <div>
        <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} placeholder='Search the movie' value={input} />
         <button onClick={onSearch}>search</button>
    </div>
)
}

export default SearchInput;