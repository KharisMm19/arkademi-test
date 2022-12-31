import React from 'react'
import mediaCipta from '../assets/mediaCipta.png'
import rewata from '../assets/Rewata.png'
import LKPDuta from '../assets/LKPDuta.png'
import gajahMada from '../assets/GajahMada.png'
import LKPGlobal from '../assets/LKPGlobalBontang.png'
import binuri from '../assets/Binuri.png'
import senjaHasta from '../assets/senjaHasta.png'
import mitraPolri from '../assets/mitraPolri.png'
import suryaCom from '../assets/suryaCom.png'
import YesStudy from '../assets/YesStudy.png'
import smartBrain from '../assets/smartBrain.png'
import avicennaCipta from '../assets/avicennaCipta.png'
import LKPMsi from '../assets/LKPMsi.png'
import globalAntusias from '../assets/globalAntusias.png'

export const Lembaga = () => {
  return (
    <section style={{ marginTop: "50px" }}>
            <div className='container-custome'>
                <div className='title-populer'>
                    <p>Lembaga</p>
                </div>
                <div className='content-card'>
                    <div className='card-icon'>
                        <img src={mediaCipta} />
                        <p>MEDIA CIPTA PRESTASI</p>
                    </div>
                    <div className='card-icon'>
                        <img src={rewata} />
                        <p>REWATA CONSULTANT</p>
                    </div>
                    <div className='card-icon'>
                        <img src={LKPDuta} />
                        <p>LKP DUTA</p>
                    </div>
                    <div className='card-icon'>
                        <img src={gajahMada} />
                        <p>GAJAH MADA YOGYAKARTA</p>
                    </div>
                    <div className='card-icon'>
                        <img src={LKPGlobal} />
                        <p>LKP GLOBAL BONTANG</p>
                    </div>
                    <div className='card-icon'>
                        <img src={binuri} />
                        <p>BINURI LEARNING CENTER</p>
                    </div>
                    <div className='card-icon'>
                        <img src={senjaHasta} />
                        <p>SENJA HASTA AZIZAH</p>
                    </div>
                </div>
                <div className='content-card'>
                    <div className='card-icon'>
                        <img src={mitraPolri} />
                        <p>MITRA POLRI</p>
                    </div>
                    <div className='card-icon'>
                        <img src={suryaCom} />
                        <p>SURYA COMPUTER</p>
                    </div>
                    <div className='card-icon'>
                        <img src={YesStudy} />
                        <p>YES STUDY</p>
                    </div>
                    <div className='card-icon'>
                        <img src={smartBrain} />
                        <p>SMART BRAIN</p>
                    </div>
                    <div className='card-icon'>
                        <img src={avicennaCipta} />
                        <p>AVICENNA CIPTA TRAINING</p>
                    </div>
                    <div className='card-icon'>
                        <img src={LKPMsi} />
                        <p>LKP MSI</p>
                    </div>
                    <div className='card-icon'>
                        <img src={globalAntusias} />
                        <p>GLOBAL ANTUSIAS SEMESTA</p>
                    </div>
                </div>
            </div>
        </section>
  )
}
