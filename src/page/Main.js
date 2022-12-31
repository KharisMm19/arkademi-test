import React from 'react'
import { About } from '../components/About'
import { Bisnis } from '../components/Bisnis'
import { Carousel } from '../components/Carousel'
import { FlashSaleSec } from '../components/FlashSaleSec'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
// import { HeaderMobile } from '../components/HeaderMobile'
import { Lembaga } from '../components/Lembaga'
import { PengembanganKarir } from '../components/PengembanganKarir'
import { Populer } from '../components/Populer'
import { PromSpecial } from '../components/PromSpecial'
import { Submenu } from '../components/Submenu'
import { Terbaru } from '../components/Terbaru'
import { Testimoni } from '../components/Testimoni'
import { TrendingSec } from '../components/TrendingSec'
import './Main.css'

export const Main = () => {
    return (
        <div>
            <Header />
            {/* <HeaderMobile/> */}
            <Submenu />
            <Carousel />
            <TrendingSec />
            <FlashSaleSec />
            <Populer />
            <PromSpecial />
            <Lembaga />
            <Terbaru/>
            <Bisnis/>
            <PengembanganKarir/>
            <Testimoni/>
            <About/>
            <Footer/>
        </div>
    )
}
