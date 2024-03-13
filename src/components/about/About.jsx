import React from "react";
import "./about.css";
import image from "../../assets/avatar-2.svg";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about container grid">
                <img src={image} alt="" className="about__img" />
            </div>
        </section>
    )
}

export default About;