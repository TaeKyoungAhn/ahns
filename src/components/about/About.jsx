import React from "react";
import "./about.css";
import image from "../../assets/avatar-2.svg";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I am a Unity 3D Programmer with a passion for creating interactive experiences. 
                            I have a strong foundation in game development and a keen eye for detail. 
                            I am always looking for new opportunities to learn and grow as a developer.
                        </p>
                        <a href="taekyoung.site" className="btn" target="__blank">Download</a>
                        </div>
                    </div> 
            </div>
        </section>
    )
}

export default About;