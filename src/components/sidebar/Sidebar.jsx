import React from 'react';
import './sidebar.css';
import Logo from '../../assets/Logo.png';

const Sidebar = () => {
    return (
        <aside class='aside'>
        <a href='#Home' className='nav__logo'>
            <img src={Logo} alt="" />
        </a>

        <nav className='nav'>
            <div className='nav__menu'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href='#Home' className='nav__link'>
                            <i className="icon-home"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#About' className='nav__link'>
                            <i className="icon-user"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#Skills' className='nav__link'>
                            <i className="icon-wrench"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#Portfolio' className='nav__link'>
                            <i className="icon-briefcase"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#Resume' className='nav__link'>
                            <i className="icon-doc"></i>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#Contact' className='nav__link'>
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
    );
}

export default Sidebar;