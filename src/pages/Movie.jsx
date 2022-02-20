import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { apiGet, IMG_BASE } from '../misc/config';

function Movie(){
    const [movieDetail, setMovieDetail]= useState([]);
    const [castList, setCastList] = useState([]);
    const {id}= useParams();

    useEffect(()=>{
        apiGet(`movie/${id}?`).then(results=> {
            setMovieDetail([results]);
            console.log([results])
        });
        apiGet(`movie/${id}/credits?`).then(results=>{
           setCastList(results.cast);
        })
    },[]);
     console.log(castList);
    return(
    <div>
        {movieDetail.map((movie)=><div key={movie.id}>
            <img src={`${IMG_BASE}w500${movie.poster_path}`} alt={movie.original_title}/>
            <h4>{movie.name}</h4>
        </div>)}

        {castList.map((cast)=>
            <ul key={cast.credit_id}> 
                <li><h2>{cast.name}</h2></li>
                <li>{cast.character}</li>
            </ul>
        )}
    </div>
    );
}

export default Movie;