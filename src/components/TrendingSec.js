import React from 'react'
import { Navigation } from 'swiper'
import trending from '../assets/trending.png'
import { Card } from './Card'
import './TrendingSec.css'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TrendingSec = () => {
  return (
    <div className='container-custome'>
        <div className='title'>
            <img src={trending}/>
            <p>Trending</p>
        </div>
        <div>
        <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                
            >
                <SwiperSlide>
                    <Card diskon="30%" harga="320.000"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card diskon="30%" harga="320.000"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card diskon="30%" harga="320.000"/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}
