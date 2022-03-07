import { Favorite, FavoriteBorder } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Nav from '../components/nav';
import {  getMovie, IMG_BASE } from '../misc/config';
import { useMovies } from '../misc/custom_hook';
import "./Search.scss"

function Search(){
    const [search, setSearch] = useState([]);
    const {state}= useLocation();
    const [likedMovies, dispatchLiked] =useMovies();
    useEffect(()=>{        
        getMovie(`search/movie?query=${state}&`).then(response=> {
            setSearch(response.results);
         });
    },[])
    
return(
    <>
    <Nav />
    <div className='container'>

    <h2 className='title'>#What You are lookig for</h2>
            <div className='searched_movie'>
                {search.map((movie)=> {
                    const isLiked = likedMovies.includes(movie.id);
                    const onLikedClick=()=>{
                        if(isLiked){
                             dispatchLiked({type:'REMOVE',id: movie.id})
                        }else{
                            dispatchLiked({type:'ADD', id: movie.id})
                        }
                    }
                        return(
                        <div className='movie_box' key={movie.id}>    
                            <button type='button' className='bookmarkbtn' onClick={onLikedClick}>
                                {isLiked?
                                <Favorite />
                                :
                                <FavoriteBorder/>
                                }
                                </button>     
                            <Link to={`/movie/${movie.id}`}  style={{textDecoration:'none'}}>
                            <img src={movie.poster_path?`${IMG_BASE}w200${movie.poster_path}`: null} alt={movie.original_title}/>
                            <h4>{movie.original_title}</h4>
                            </Link>
                        </div>
                        )
                            
                })}
            </div>
    </div>
    </>
)
}

export default Search;