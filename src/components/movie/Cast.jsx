import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Styles from './Cast.module.scss'
import { apiGet, IMG_BASE } from '../../misc/config';

function Cast() {
   const [castList, setCastList] = useState([]);
   const{id}= useParams();
    useEffect(()=>{
        let  isComponentMounted = true;
        if(isComponentMounted){
            apiGet(`movie/${id}/credits?`).then(results=>{
               setCastList(results.cast.splice(0,8));
            });
        }
        return ()=>{
            isComponentMounted=false;
        }
    },[id]);
  return (
         <div className={Styles.cast_container}>
            <h2>Cast</h2>
            <div className={Styles.cast}>
                {castList.map((cast)=>
                    <div key={cast.credit_id} className={Styles.cast_card}> 
                        <img src={cast.profile_path? `${IMG_BASE}w200${cast.profile_path}`: null}/>
                        <h3>{cast.name}</h3>
                        <span>{cast.character}</span>
                    </div>
                )}
            </div>
        </div>
  )
}

export default Cast