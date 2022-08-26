import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Acordion from '../components/acordion/Acordion';
import Cards from '../components/cards/Cards';
import Icons from '../components/icons/Icons';
import Offcanvas from '../components/offcanvas/Offcanvas';
import Footer from '../components/footer/Footer';
function Index() {
    return (
        <main>
            <Navbar />
            <Carousel/>
            <Banner />
            <Acordion />
            <Cards />
            <Icons />
            <Offcanvas />
            <Footer />
            
        </main>
    )
}
export default Index;
