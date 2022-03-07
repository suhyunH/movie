import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Nav from '../components/nav';
import { apiGet, getMovie, IMG_BASE } from '../misc/config';
import YouTube from 'react-youtube';
import Styles from'./Movie.module.scss'
import Similar from '../components/Similar';

function Movie(){
    const [movieDetail, setMovieDetail]= useState([]);
    const [castList, setCastList] = useState([]);
    const {id}= useParams();
    let trailer;
    useEffect(()=>{
        let  isComponentMounted = true;
        if(isComponentMounted){
            apiGet(`movie/${id}/credits?`).then(results=>{
               setCastList(results.cast.splice(0,8));
            });
            getMovie(`movie/${id}?`).then(response=>
                setMovieDetail([response])
            );
        }
        return ()=>{
            isComponentMounted=false;
        }
    },[]);

    return(
        <>
        <Nav />
        <div className={Styles.movie_container}>
        {movieDetail.map((movie)=>
        <div key={movie.id} className={Styles.movie}>
            <div className={Styles.logo}>
                {movie.images.logos[0] ?
                <img src={`${IMG_BASE}w200${movie.images.logos[0].file_path}`}/> 
                :
                <h1>{movie.title}</h1>}
            </div>  
            {
            movie.videos?
                <YouTube
                videoId={movie.videos.results[0].key}
                containerClassName={Styles.youtube}
                opts={{
                    height: '390',
                    width: '80%',
                    textAlign:"center",
                    playerVars: {
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                }}}
                />
                :
                null
            }

            <div className={Styles.content}>
                <div className={Styles.poster}>
                    <img src={`${IMG_BASE}w300${movie.poster_path}`} alt={movie.original_title}/>
                </div>    
                <div className={Styles.detail}>
                    {(movie.genres).map((i)=>
                    <button key={i.id}>
                        {i.name}
                    </button>
                    )}
                    <h4>⭐️ {movie.vote_average}</h4>
                    <h4>Released At: {movie.release_date}</h4>
                    <h4>Runtime: {Math.floor(movie.runtime/60)} hour(s) {movie.runtime%60} minutes</h4>
                    <span>{movie.overview}</span>
                </div>    
            </div>
            
        </div>)}
        <div className={Styles.cast_container}>
            <h2>Cast</h2>
            <div className={Styles.cast}>
                {castList.map((cast)=>
                    <div key={cast.credit_id} className={Styles.cast_card}> 
                        <img src={`${IMG_BASE}w200${cast.profile_path}`}/>
                        <h3>{cast.name}</h3>
                        <span>{cast.character}</span>
                    </div>
                )}
            </div>
        </div>
     <Similar />
    </div>
    </>
    );
}

export default Movie;