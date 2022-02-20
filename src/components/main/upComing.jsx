import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { apiGet } from '../../misc/config';


const UpComing =()=>{
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    useEffect(()=>{
        apiGet("movie/upcoming?").then(response=> {
            setUpcomingMovies(response.results);
        });
    },[]);
   return(
       <>
       <h2>Upcoming movies</h2>
            {upcomingMovies.slice(undefined,3).map(movie=>
                <div  key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                    <h4>{movie.original_title}</h4>
                    <span>{movie.overview}</span>
                </Link>
                </div>
            )}
       </>
   )

}

export default UpComing;