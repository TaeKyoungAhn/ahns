import React from "react";
import "./skills.css";
import SkillData from "./Data";
import {Pagination} from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills</h2>

            <Swiper className="skills__container grid"
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            pagination={{clickable: true}}
           
            >
                {SkillData.map(({id, image, title, subtitle, comment}) => {
                    return(
                        <SwiperSlide className="skills__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" className="skills__img"/>
                            </div>
                            <h3 className="skills__title">{title}</h3>
                            <span className="skills__subtitle">{subtitle}</span>
                            <div className="skills__comment">{comment}</div>
                            </SwiperSlide>
                    )
                })}
                </Swiper>

            </section>
    );
}

export default Skills;
