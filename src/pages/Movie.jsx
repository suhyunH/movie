import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { apiGet, getMovie, IMG_BASE } from '../misc/config';

function Movie(){
    const [movieDetail, setMovieDetail]= useState([]);
    const [castList, setCastList] = useState([]);
    const {id}= useParams();

    useEffect(()=>{
        // apiGet(`movie/${id}/credits?`).then(results=>{
        //    setCastList(results.cast);
        // });
        getMovie(`movie/${id}?`).then(response=>
            setMovieDetail([response])
        );
    },[]);

    return(
    <div>
        {movieDetail.map((movie)=>
        <div key={movie.id}>
            <img src={`${IMG_BASE}w500${movie.poster_path}`} alt={movie.original_title}/>
            {movie.images.logos[0] ?

            <img src={`${IMG_BASE}w200${movie.images.logos[0].file_path}`}/> 
            :
            <h4>{movie.title}</h4>
            }
            <h4>{movie.overview}</h4>
        </div>)}

        {/* {castList.map((cast)=>
            <ul key={cast.credit_id}> 
                <li><h2>{cast.name}</h2></li>
                <li>{cast.character}</li>
            </ul>
        )} */}
    </div>
    );
}

export default Movie;