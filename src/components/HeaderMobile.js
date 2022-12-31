import React from 'react'
import love from "../assets/love.png"
import './HeaderMobile.css'

export const HeaderMobile = () => {
    return (
        <header className='kontainer-navbar-apl-arkademi'>
            <nav className='navbar'>
                <div className='container-custome'>
                    <a className='brand-text-icon'>
                        <img src='https://arkademi.com/static/media/logo_putih.392c7f0d.svg' alt='logo arkademi' />
                    </a>
                    <div className='love'>
                        <img src={love} alt="Love" />
                    </div>
                    <div className=''>
                        <ul className=''>
                            <li className=''>
                                <a className='btn-masuk'>Masuk</a>
                            </li>
                            <li className=''>
                                <a className='btn-daftar'>Daftar</a>
                            </li>
                        </ul>
                    </div>
                    <div className='pencarian'>
                        <div className='wrapper'>
                            <input type={'text'} placeholder='Cari kursus' />
                            <img className='gbr' src='https://arkademi.com/static/media/ikon-pencarian.7f1a7ca7.svg' alt='icon' />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
