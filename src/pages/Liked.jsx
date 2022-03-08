import { Favorite, FavoriteBorder } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import { apiGet, IMG_BASE } from '../misc/config';
import { useMovies } from '../misc/custom_hook';

function Liked(){

    const [liked, dispatchLiked] = useMovies();
    const [movies, setMovies] =useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        if(liked && liked.length>0){
            const promises = liked.map(id=>
                apiGet(`movie/${id}?`));
            Promise.all(promises).then(results=>{
                setMovies(results);
                setIsLoading(false);
            }).catch(err=>{
                setError(err.message);
                setIsLoading(false);
            });
        }else{
            setIsLoading(false);
        }
    },[])

   return(
    <>
    <Nav />
    <div className='container'>

    <h2 className='title'>#Liked</h2>
            <div className='searched_movie'>
                {movies.map((movie)=> {
                    const isLiked = liked.includes(movie.id);
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

export default Liked;