import React from "react";
import "./skills.css";
import SkillData from "./Data";


const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container grid">
                {SkillData.map(({id, image, title, subtitle, comment}) => {
                    return(
                        <div className="skills__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" className="skills__img"/>
                            </div>
                            <h3 className="skills__title">{title}</h3>
                            <span className="skills__subtitle">{subtitle}</span>
                            <div className="skills__comment">{comment}</div>
                            </div>
                    )
                })}
                </div>

            </section>
    );
}

export default Skills;
