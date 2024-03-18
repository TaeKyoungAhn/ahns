import React from "react";
import "./about.css";
import image from "../../assets/Profile.svg";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        <b>창의적이고 효율적인 프로그램을 만든다는 것은 기본이 충실해야 가능하다고 생각합니다.</b><br/> 
                        개발자가 컴퓨터 언어에 대한 이해와 소양을 갖추는 것이야 말로 모든 일의 시작이자 출발점이라 생각하여,<br/> 
                        기본적인 지식을 갖추기 위해 <b>다양한 언어와 기반 지식에 대한 공부</b>를 멈추지 않습니다. 
                        </p>
                        <a href="https://taekserver.myasustor.com:10016/portal/apis/fileExplorer/share_link.cgi?link=sRom-y5WvoRywv_JmWUD-Q" className="btn" target="__blank">Portfolio Download</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills___name">Unity 3D</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage unity"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills___name">React JS</h3>
                                <span className="skills__number">60%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage react"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills___name">Python</h3>
                                <span className="skills__number">50%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage python"></span>
                            </div>
                       </div>
                    </div> 
                </div>
            </div>

            <AboutBox/>
        </section>
    )
}

export default About;