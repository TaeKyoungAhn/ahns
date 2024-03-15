import React from 'react';
import './home.css';
import IM from '../../assets/photo1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        
        <section className="home container" id="home">
              
            <div className="intro">
                <img src={IM} alt="" className="home__img" />
                <h1 className="home__name">TaeKyoung Ahn</h1>
                <span className="home__education">Stay Hungry, Stay Foolish</span>
                <HeaderSocials/>

                <a href="#contact" className="btn">Hire Me</a>
                <ScrollDown/>
            </div>
            <Shapes/>  
        </section>
    );
}

export default Home;