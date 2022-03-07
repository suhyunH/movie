import { useEffect, useReducer } from 'react';

function moviesReducer(prevState, action){
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

export function useMovies(key="movies"){
    return usePersistedReducer(moviesReducer, [], key);
}