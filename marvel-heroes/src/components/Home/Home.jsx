import {Fragment} from 'react';
import Header from './Header'
import {Footer} from './Footer'
//import {UserList} from './userlist/UserList'
//import React, {useState} from 'react';
//import {Search} from './Search'
import { HeroCards} from './HeroCards';

const Home = () => {  
    
  return (
    <Fragment>
      <Header />
      <HeroCards />
      {/* <Search /> */}
      {/* <HeroList /> */}
      <Footer />      
    </Fragment>        
    )
}

export default Home;