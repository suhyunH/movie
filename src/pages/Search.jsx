import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { apiGet, IMG_BASE } from '../misc/config';

function Search(){
    const [search, setSearch] = useState([]);
    const {state}= useLocation();
    useEffect(()=>{        
        apiGet(`search/movie?query=${state}&`).then(response=> {
            setSearch(response.results);
         });
    },[]);
return(
    <>
    <h1>movies</h1>
            <div className='container'>
                {search.map((movie)=> 
                <div className='movie_box' key={movie.id}>       
                    <Link to={`/movie/${movie.id}`}  style={{textDecoration:'none'}}>
                    <img src={`${IMG_BASE}w200${movie.poster_path}`} alt={movie.original_title}/>
                    <h4>{movie.original_title}</h4>
                    </Link>
                </div>
                )}
            </div>
    </>
)
}

export default Search;