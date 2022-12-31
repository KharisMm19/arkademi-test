import React from 'react'
import './Header.css'
import love from "../assets/love.png"

export const Header = () => {
    return (
        <header className='kontainer-navbar-apl-arkademi'>
            <nav className='navbar'>
                <div className='container-fluid container-custome-navbar'>
                    <a className='brand-text-icon'>
                        <img src='https://arkademi.com/static/media/logo_putih.392c7f0d.svg' alt='logo arkademi' />
                    </a>
                    <div className='pencarian'>
                        <div className='wrapper'>
                            <input type={'text'} placeholder='Cari kursus' />
                            <img className='gbr' src='https://arkademi.com/static/media/ikon-pencarian.7f1a7ca7.svg' alt='icon' />
                        </div>
                    </div>
                    <div className='love'>
                        <img src={love} alt="Love" />
                    </div>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item mr-2'>
                                <a className='btn-masuk'>Masuk</a>
                            </li>
                            <li className='nav-item'>
                                <a className='btn-daftar'>Daftar</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='container-custome pencarian2'>
                    <div className='wrapper'>
                        <input type={'text'} placeholder='Cari kursus' />
                        <img className='gbr' src='https://arkademi.com/static/media/ikon-pencarian.7f1a7ca7.svg' alt='icon' />
                    </div>
                </div>
            </nav>
        </header>
    )
}
