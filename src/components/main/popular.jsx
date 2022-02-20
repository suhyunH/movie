import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { apiGet, IMG_BASE } from '../../misc/config';

const Popular = ()=>{
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(()=>{
        apiGet("movie/popular?").then(response=> {
            setPopularMovies(response.results);
        });
        
    },[]);
    return (
        <>

            <h1>Popular movies</h1>
            <div className='container'>
                {popularMovies.map((movie)=> 
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
export default Popular;