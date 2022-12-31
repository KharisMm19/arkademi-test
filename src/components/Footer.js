import React from 'react'
import './Footer.css'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import mandiri from '../assets/mandiri.png'
import bca from '../assets/bca.png'
import bni from '../assets/bni.png'
import bri from '../assets/bri.png'
import permata from '../assets/permata.png'
import cimb from '../assets/cimb.png'
import atm from '../assets/atm.png'
import gopay from '../assets/gopay.png'
import shopeepay from '../assets/shopeepay.png'
import alfamart from '../assets/alfamart.png'
import indomart from '../assets/indomart.png'

import fb from '../assets/fb.png'
import yt from '../assets/yt.png'
import ig from '../assets/ig.png'
import linkedin from '../assets/linkedin.png'
import googleplay from '../assets/googleplay.png'
import appstore from '../assets/appstore.png'

export const Footer = () => {
    return (
        <>
            <div className='container-custome'>
                <div className='baris'>
                    <div className='kolom'>
                        <ul>
                            <p>Kategori Populer</p>
                            <li>Keuangan</li>
                            <li>Perpajakan</li>
                            <li>Bisnis</li>
                            <li>Marketing</li>
                            <li>Kewirausahaan</li>
                            <li>Investasi</li>
                        </ul>
                    </div>
                    <div className='kolom'>
                        <ul>
                            <p>Lainnya</p>
                            <li>Paanduan</li>
                            <li>FAQ</li>
                            <li>Tentang Kami</li>
                            <li>Karier</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='kolom'>
                        <p>Metode Pembayaran</p>
                        <div className='ic-list'>
                            <img src={visa} />
                            <img src={mastercard} />
                            <img src={mandiri} />
                            <img src={bca} />
                            <img src={bni} />
                            <img src={bri} />
                            <img src={permata} />
                            <img src={cimb} />
                            <img src={atm} />
                            <img src={gopay} />
                            <img src={shopeepay} />
                            <img src={alfamart} />
                            <img src={indomart} />
                        </div>

                    </div>
                    <div className='kolom'>
                        <p>Ikuti Kami</p>
                        <div className='ic-socmed'>
                            <img src={fb} />
                            <img src={yt} />
                            <img src={ig} />
                            <img src={linkedin} />
                        </div>
                        <p>Arkademi Mobile App</p>
                        <div className='ic-store'>
                            <img src={googleplay} />
                            <img src={appstore} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <div className='container-custome'>
                    <div className='c-foot'>
                        <div className='copyright'>
                            <p>© 2022 PT Arkademi Daya Indonesia</p>
                        </div>
                        <div className='link'>
                            <p>Ketentuan Layanan</p>
                            <p>Kontak</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
