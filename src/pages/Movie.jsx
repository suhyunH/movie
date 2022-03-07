import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Nav from '../components/nav';
import { apiGet, getMovie, IMG_BASE } from '../misc/config';
import YouTube from 'react-youtube';
import Styles from'./Movie.module.scss'
import Similar from '../components/movie/Similar';
import { FavoriteBorder } from '@material-ui/icons';
import Cast from '../components/movie/Cast';

function Movie(){
    const [movieDetail, setMovieDetail]= useState([]);
    const {id}= useParams();

    useEffect(()=>{
        let  isComponentMounted = true;
        if(isComponentMounted){
            getMovie(`movie/${id}?`).then(response=>
                setMovieDetail([response])
            );
        }
        return ()=>{
            isComponentMounted=false;
        }
    },[]);
    console.log(movieDetail);

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
                    height: '400',
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
                    <button className={Styles.bookmarkbtn}><FavoriteBorder/></button>
                    <img src={`${IMG_BASE}w300${movie.poster_path}`} alt={movie.original_title}/>
                </div>    
                <div className={Styles.detail}>
                    {(movie.genres).map((i)=>
                    <button key={i.id}>
                        {i.name}
                    </button>
                    )}
                    <h4>⭐️ {movie.vote_average}</h4>
                    <h4>Released At : {movie.release_date}</h4>
                    <h4>Language : {movie.spoken_languages[0].english_name}</h4>
                    <h4>Runtime : {Math.floor(movie.runtime/60)} hour(s) {movie.runtime%60} minutes</h4>
                    <span>{movie.overview}</span>
                </div>    
            </div>
            
        </div>)}
        <Cast />
        <Similar />
    </div>
    </>
    );
}


export default Movie;