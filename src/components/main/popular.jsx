import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { apiGet, IMG_BASE } from '../../misc/config';
import "./popular.scss";

const Popular = ()=>{
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(()=>{
        apiGet("movie/popular?").then(response=> {
            setPopularMovies(response.results);
        });
        
    },[]);
    return (
        <div className='container'>
            <h2 className='title'>Popular movies</h2>
            <div className='popularContainer'>
                {popularMovies.map((movie)=> 
                <div className='popularBox' key={movie.id}>       
                    <Link to={`/movie/${movie.id}`}  style={{textDecoration:'none'}}>
                    <img src={`${IMG_BASE}w200${movie.poster_path}`} alt={movie.original_title}/>
                    <h4>{movie.original_title}</h4>
                    </Link>
                </div>
                )}
            </div>
        </div>
         

    )
}
export default Popular;