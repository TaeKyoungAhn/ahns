import React from 'react';
import './home.css';
import IM from '../../assets/avartar1.svg';


const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={IM} alt="" className="home__img" />
            </div>
        </section>
    );
}

export default Home;