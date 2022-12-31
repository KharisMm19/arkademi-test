import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.css'
import 'swiper/css';
import gambar from '../assets/jvfkbv.png';
import cor1 from '../assets/cor2-1.png'
import cor2 from '../assets/cor2-2.png'
import cor3 from '../assets/cor2-3.png'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Carousel = () => {
    return (
        <div class="container-custome">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className='swipe'
            >
                <SwiperSlide>
                    <img src={gambar} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={gambar} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={gambar} />
                </SwiperSlide>
            </Swiper>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                // pagination={{ clickable: true }}
                navigation
            >
                <SwiperSlide>
                    <img src={cor1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cor2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cor3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cor3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cor3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cor3} />
                </SwiperSlide>
            </Swiper>
            <div className='con'>
                <button className='btn'>Lihat Semua Spesialisasi</button>
            </div>
        </div>
    )
}
