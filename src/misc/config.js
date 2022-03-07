import { useEffect, useReducer } from 'react';

export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = "https://api.themoviedb.org/3/";
export const IMG_BASE = 'http://image.tmdb.org/t/p/';

export async function apiGet(query){
    const response = 
        await fetch (`https://api.themoviedb.org/3/${query}api_key=${API_KEY}`)
        .then(r =>r.json());
      return response;
}

export async function getMovie(query){
  const response = 
  await fetch (`https://api.themoviedb.org/3/${query}api_key=${API_KEY}&append_to_response=videos,images`)
  .then(r =>r.json());
return response;
}

function showsReducer(prevState, action){
  switch(action.type){
      case'ADD':{
          return [...prevState, action.id]
      }
      case'REMOVE':{
          return prevState.filter((id)=>id!==action.id);
      }
      default: return prevState;
  }
}
// 
function usePersistedReducer(reducer, initialState,key){
const [state, dispatch] = useReducer(reducer, initialState,(initial)=>{
  const persisted = localStorage.getItem(key);
  return persisted? JSON.parse(persisted): initial;
});
  useEffect(()=>{
      localStorage.setItem(key, JSON.stringify(state))
  },[state]);

  return [state, dispatch];
}


// 

export function useShows(key="shows"){
  return usePersistedReducer(showsReducer, [], key);
}