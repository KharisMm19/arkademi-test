import React from 'react'
import bisnis from '../assets/bisnis.png'
import keuangan from '../assets/dompet.png'
import karir from '../assets/shield.png'
import sertifikat from '../assets/doc.png'
import tek from '../assets/tek.png'
import hobi from '../assets/art.png'
import bahasa from '../assets/translate.png'
import './Populer.css'

export const Populer = () => {
    return (
        <section style={{ marginTop: "50px" }}>
            <div className='container-custome'>
                <div className='title-populer'>
                    <p>Kategori Terpopuler</p>
                </div>
                <div className='content-card'>
                    <div className='card-icon'>
                        <img src={bisnis} />
                        <p>Bisnis</p>
                    </div>
                    <div className='card-icon'>
                        <img src={keuangan} />
                        <p>Keuangan</p>
                    </div>
                    <div className='card-icon'>
                        <img src={karir} />
                        <p>Pengembangan Karir</p>
                    </div>
                    <div className='card-icon'>
                        <img src={sertifikat} />
                        <p>Sertifikat</p>
                    </div>
                    <div className='card-icon'>
                        <img src={tek} />
                        <p>Teknologi</p>
                    </div>
                    <div className='card-icon'>
                        <img src={hobi} />
                        <p>Hobi</p>
                    </div>
                    <div className='card-icon'>
                        <img src={bahasa} />
                        <p>Bahasa</p>
                    </div>
                </div>
            </div>
            <div className='con'>
                <button className='btn-kategori'>Lihat Semua Kategori</button>
            </div>
        </section>
    )
}
