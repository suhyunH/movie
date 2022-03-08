import {  Favorite, FavoriteBorder } from '@material-ui/icons';
import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { apiGet, IMG_BASE } from '../../misc/config';
import { useMovies } from '../../misc/custom_hook';
import "./popular.scss";

const Popular = ()=>{
    const [popularMovies, setPopularMovies] = useState([]);
    const [likedMovies, dispatchLiked] =useMovies();

    useEffect(()=>{
        apiGet("movie/popular?").then(response=> {
            setPopularMovies(response.results);
        });
    },[]);
    return (
        <div className='container'>
            <h2 className='title'>#Popular movies</h2>
            <div className='popularContainer'>
                {popularMovies.map((movie)=> {
                    const isLiked = likedMovies.includes(movie.id);
                    const onLikedClick=()=>{
                        if(isLiked){
                             dispatchLiked({type:'REMOVE',id: movie.id})
                        }else{
                            dispatchLiked({type:'ADD', id: movie.id})
                        }
                    }
                    return(
                        <div className='popularBox' key={movie.id}>  
                            <button type='button' className='bookmarkbtn' onClick={onLikedClick}>
                                {isLiked?
                                <Favorite />
                                :
                                <FavoriteBorder/>
                                }
                                </button>     
                            <Link to={`/${movie.id}`}  style={{textDecoration:'none'}}>
                            <img src={`${IMG_BASE}w200${movie.poster_path}`} alt={movie.original_title}/>
                            <h4>{movie.original_title}</h4>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
         

    )
}
export default Popular;