import React from 'react'
import Navber from './../components/Navber/Navber';
import Banner from './../components/Banner/Banner';
import Service from './../components/Service/Service';
import Experinc from './../components/experience/Experinc';
import Works from './../components/Works/Works';
import Counter from './../components/counter/Counter';
import Company from './../components/Company/Company';
import Coustomer from './../components/customer/Coustomer';
import Tolk from './../components/Tolk/Tolk';
import Footer from './../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <Navber/>
    <Banner/>
    <Service/>
    <Experinc/>
    <Works/>
    <Counter/>
    <Company/>
    <Coustomer/>
    <Tolk/>
    <Footer/>

    </>
  )
}

export default Home
