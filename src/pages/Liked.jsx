import React, { useEffect, useState } from 'react'
import { apiGet, useShows } from '../misc/config';

function Liked(){
    const [liked] = useShows();
    const [shows, setShows] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        async function myfunction(){
            if(liked&&liked.length>0){
                const promises = liked.map(id=>apiGet(`/movie/${id}`));
               try{

                   const apiData = await Promise.all(promises);
                   const apiDataResult = apiData.map(show => ({ show }));
                   setShows(apiDataResult);
                   setIsLoading(false);
               }catch(err){
                   setError(err.message);
                   setIsLoading(false)
               }
        }else{
            setIsLoading(false);
        };
       }
       myfunction();
   },[]);
}

export default Liked;