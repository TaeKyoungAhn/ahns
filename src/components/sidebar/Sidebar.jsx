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
                            <i className='bx bx-grid-alt nav__icon'></i>
                            <span className='nav__name'>Home</span>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#About' className='nav__link'>
                            <i className='bx bx-user nav__icon'></i>
                            <span className='nav__name'>About</span>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#Skills' className='nav__link'>
                            <i className='bx bx-code-alt nav__icon'></i>
                            <span className='nav__name'>Skills</span>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#Projects' className='nav__link'>
                            <i className='bx bx-book-content nav__icon'></i>
                            <span className='nav__name'>Projects</span>
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#Contact' className='nav__link'>
                            <i className='bx bx-message-detail nav__icon'></i>
                            <span className='nav__name'>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        </aside>
    );
}

export default Sidebar;