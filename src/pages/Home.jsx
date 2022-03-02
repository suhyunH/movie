import React from 'react'
import Popular from '../components/main/popular';
import UpComing from '../components/main/upComing';
import Nav from '../components/nav';
import SearchInput from '../components/nav/searchInput';

function Home(){

    return(
        <>
        <Nav/>
        <UpComing />
        <Popular />
        </>
    )

}

export default Home;