import React from 'react'
import Popular from '../components/main/popular';
import UpComing from '../components/main/upComing';
import SearchInput from '../components/searchInput';

function Home(){

    return(
        <>
        <SearchInput/>
        <UpComing />
        <Popular />
        </>
    )

}

export default Home;