import React from "react";

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">198</h3>
                    <span className="about__name">Project completed</span>
                </div>
                </div>

                <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">5670</h3>
                    <span className="about__name">cup of coffee</span>
                </div>
                </div>

                <div className="about__box">
                <i className="about__icon icon-screen-desktop"></i>

                <div>
                    <h3 className="about__title">427</h3>
                    <span className="about__name">Satisfied clients</span>
                </div>
                </div>

                <div className="about__box">
                <i className="about__icon icon-note"></i>

                <div>
                    <h3 className="about__title">53</h3>
                    <span className="about__name">Nominees winner</span>
                </div>
                </div>
        </div>
    )
}

export default AboutBox;