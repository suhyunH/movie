import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { apiGet, IMG_BASE } from '../../misc/config';
import Styles from './Similar.module.scss'
export default function Similar() {
    const[similar, setSimilar]=useState([]);
    const {id} = useParams();
    let location = useLocation();
    useEffect(()=>{
        let  isComponentMounted = true;
        if(isComponentMounted){
            apiGet(`movie/${id}/similar?`).then(response=>{
               setSimilar(response.results.splice(0,4));
            });
        }
        return ()=>{
            isComponentMounted=false;
        }
    },[id]);


  return (
    <div className={Styles.similar_container}>
     <h2>Similar movies</h2>
     <div className={Styles.similar}>
        {similar?.map((movie)=>
        <div key={movie.id} className={Styles.similar_card}>
            <Link to={`/${movie.id}`} style={{textDecoration:"none"}}  >
            <img src={`${IMG_BASE}w200${movie.poster_path}`}/>
            <h3>{movie.title}</h3>
            </Link>
        </div>
        )}
     </div>
   </div>
  )
}
