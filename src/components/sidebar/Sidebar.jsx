import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../assets/Logo.png';

const Sidebar = () => {
    const [toggle,showMenu] = useState(false);

    return (
        <>
        <aside className={toggle ? "aside show-menu": "aside"}>
        <a href='#home' className='nav__logo'>
            <img src={Logo} alt="" />
        </a>

        <nav className='nav'>
            <div className='nav__menu'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href='#home' className='nav__link'>
                            <i className="icon-home"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#about' className='nav__link'>
                            <i className="icon-user"></i>
                        </a>
                    </li>
                    {/* <li className='nav__item'>
                        <a href='#services' className='nav__link'>
                            <i className="icon-wrench"></i>
                        </a>
                    </li> */}
                    <li className='nav__item'>
                        <a href='#resume' className='nav__link'>
                            <i className="icon-briefcase"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#portfolio' className='nav__link'>
                            <i className="icon-energy"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#skills' className='nav__link'>
                            <i className="icon-wrench"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#blog' className='nav__link'>
                            <i className="icon-notebook"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#contact' className='nav__link'>
                            <i className="icon-phone"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div className='nav__footer'>
            <span className="copyright">&copy; 2024 - 2025.</span>
        </div>
        </aside>

        <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} 
        onClick={() => showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
        </>
    );
};

export default Sidebar;