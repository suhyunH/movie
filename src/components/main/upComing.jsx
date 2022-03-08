import React,{useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getMovie, IMG_BASE } from '../../misc/config';
import SwiperCore, {Navigation} from "swiper"
import Styles from './upComing.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


const UpComing =()=>{
    SwiperCore.use([Navigation])
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(()=>{
        let  isComponentMounted = true;
        if(isComponentMounted){
            getMovie("movie/upcoming?").then(response=> {
                setUpcomingMovies(response.results);
            });
        }
        return()=>{
            isComponentMounted=false;
        }
    },[]);    
   return(
       <div>     
       <div className={Styles.upcomingContainer}>
           <Swiper
           spaceBetween={0}
           slidesPerView={1}
           scrollbar={{ draggable: true }}
           navigation={true}
           >
            {upcomingMovies.slice(undefined,3).map(movie=>
            <SwiperSlide key={movie.id}>
                <div className={Styles.upcomingList} style={{backgroundImage:`url(${IMG_BASE}original${movie.backdrop_path})`}}>
                    <div className={Styles.upcomingInfo}  >
                        <div className={Styles.upcomingInside}>
                            <img className={Styles.poster} src={`${IMG_BASE}w200${movie.poster_path}`} alt={movie.original_title}/>
                           <div className={Styles.upcomingDescription}>
                              <h1>{movie.original_title}</h1>
                                <span>{movie.overview}</span>
                                <span>coming out {movie.release_date}</span>
                                <Link to={`/movie/${movie.id}`}>
                                     <button>See more</button>
                                </Link>
                           </div>
                       </div>
                    </div>
                </div>
            </SwiperSlide>
            )} 
     </Swiper>   
       </div>
       </div>
   )

}

export default UpComing;

