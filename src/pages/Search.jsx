import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import SearchInput from '../components/nav/searchInput';
import { apiGet, getMovie, IMG_BASE } from '../misc/config';
import "./Search.scss"

function Search(){
    const [search, setSearch] = useState([]);
    const {state}= useLocation();
    useEffect(()=>{        
        getMovie(`search/movie?query=${state}&`).then(response=> {
            setSearch(response.results);
         });
    },[]);
return(
    <>
    <Nav />
    <div className='container'>

    <h2 className='title'>movies</h2>
            <div className='searched_movie'>
                {search.map((movie)=> 
                <div className='movie_box' key={movie.id}>       
                    <Link to={`/movie/${movie.id}`}  style={{textDecoration:'none'}}>
                    <img src={`${IMG_BASE}w200${movie.poster_path}`} alt={movie.original_title}/>
                    <h4>{movie.original_title}</h4>
                    </Link>
                </div>
                )}
            </div>
    </div>
    </>
)
}

export default Search;