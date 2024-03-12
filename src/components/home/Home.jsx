import React from 'react';
import './home.css';
import IM from '../../assets/photo1.svg';


const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={IM} alt="" className="home__img" />
                <h1 className="home__name">TaeKyoung Ahn</h1>
                <span class="home__education">Stay Hungry, Stay Foolish</span>
            </div>
        </section>
    );
}

export default Home;