import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { apiGet, IMG_BASE } from '../../misc/config';
import './upComing.scss'

const UpComing =()=>{
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    useEffect(()=>{
        apiGet("movie/upcoming?").then(response=> {
            setUpcomingMovies(response.results);
        });
    },[]);
   return(
       <div className='container'>
       <h2 className='title'>What's Coming Next</h2>
       <div className='upcomingContainer'>
            {upcomingMovies.slice(undefined,3).map(movie=>
                <div className='upcomingList' key={movie.id}>
                    <div className='upcomingInfo'>
                        <img className="bgImg" src={`${IMG_BASE}original${movie.backdrop_path}`} alt={movie.original_title}/>
                        <div className='upcomingInside'>
                            <img className='poster' src={`${IMG_BASE}w200${movie.poster_path}`} alt={movie.original_title}/>
                           <div className='upcomingDescription'>
                              <h1>{movie.original_title}</h1>
                                <span>{movie.overview}</span>
                                <span>coming out {movie.release_date}</span>
                                <Link to={`/movie/${movie.id}`}>
                                     <span>See more</span>
                                </Link>
                           </div>
                       </div>
                    </div>
                </div>
            )}
       </div>
       </div>
   )

}

export default UpComing;