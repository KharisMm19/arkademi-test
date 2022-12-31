import React from 'react'
import { Navigation } from 'swiper'
import { Card } from './Card'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react'

export const Bisnis = () => {
  return (
    <section style={{ marginTop: "50px" }}>
            <div className='container-custome'>
                <div className='title'>
                    <p>Bisnis</p>
                    <p className='lihatSemua'>Lihat Semua</p>
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
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card diskon="30%" harga="320.000" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card />
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
