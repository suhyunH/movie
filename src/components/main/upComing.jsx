import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiGet, IMG_BASE } from '../../misc/config';
import SwiperCore, {Navigation} from "swiper"
import './upComing.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


const UpComing =()=>{
    SwiperCore.use([Navigation])

 
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
           <Swiper
           spaceBetween={0}
           slidesPerView={1}
           scrollbar={{ draggable: true }}
           pagination={{ clickable: true }}
        navigation={true}
           >
            {upcomingMovies.slice(undefined,3).map(movie=>
            <SwiperSlide key={movie.id}>
                <div className='upcomingList' style={{backgroundImage:`url(${IMG_BASE}original${movie.backdrop_path})`}}>
                    <div className='upcomingInfo'  >
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
            </SwiperSlide>
            )} 
     </Swiper>   
       </div>
       </div>
   )

}

export default UpComing;

