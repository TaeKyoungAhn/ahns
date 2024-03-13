import React from "react";

const HeaderSocials = () => {
    return(
        <div className="home__socials">
            <a herf="https://www.instagram.com/taek_ahn/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>

            <a herf="https://github.com/TaeKyoungAhn" className="home__social-link" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>

            <a herf="https://www.notion.so/Unity-3D-Programmer-18d7192786f245a0935767a6d5005e80" className="home__social-link" target="_blank">
                <i class="fa-solid fa-image-portrait"></i>
            </a>

            <a herf="https://www.linkedin.com/in/%ED%83%9C%EA%B2%BD-%EC%95%88-53864a25a/" className="home__social-link" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
    )
}

export default HeaderSocials;