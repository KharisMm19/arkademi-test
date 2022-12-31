import React from 'react'
import { Navigation } from 'swiper'
import flashsale from '../assets/flashsale.png'
import { Card } from './Card'
import './FlashsaleSec.css'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'
import timeIcon from '../assets/timer.png'

export const FlashSaleSec = () => {
    return (
        <section style={{ marginTop: "50px" }}>
            <div className='container-custome'>
                <div className='title'>
                    <img src={flashsale} />
                    <p>Flashsale</p>
                    <p style={{ paddingLeft: "20px", fontSize: "15px", color: "#5A5C60", fontWeight: 600 }}>Berakhir dalam</p>
                    <div className='timer'>
                        <img className='icon-timer' src={timeIcon}/>
                        <p>08 : 52 : 05</p>
                    </div>
                </div>
                <div>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={5}
                        navigation

                    >
                        <SwiperSlide>
                            <Card diskon="30%" harga="320.000" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card diskon="40%" harga="320.000"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card diskon="30%" harga="320.000" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card diskon="50%" harga="320.000"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card diskon="30%" harga="320.000"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card diskon="30%" harga="320.000" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
