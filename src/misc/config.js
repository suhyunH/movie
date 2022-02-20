
export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = "https://api.themoviedb.org/3/";
export const IMG_BASE = 'http://image.tmdb.org/t/p/';

export async function apiGet(query){
    const response = 
        await fetch (`https://api.themoviedb.org/3/${query}api_key=${API_KEY}`)
        .then(r =>r.json());
      return response;
}