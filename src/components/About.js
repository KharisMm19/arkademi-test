import React from 'react'
import imgAbout from '../assets/imgAbout.png'
import arkademiIcon from '../assets/arkademiBlue.png'
import './About.css'
import mox from '../assets/mox.png'
import Y_Combinator from '../assets/Y_Combinator.png'
import aws from '../assets/aws.png'
import google from '../assets/google.png'

export const About = () => {
    return (
        <section style={{ marginTop: "50px" }}>
            <div className='container-custome'>
                <div className='about'>
                    <img src={imgAbout} className='imgAbout' />
                    <div className='desk'>
                        <img src={arkademiIcon} />
                        <p className='des'>
                            Arkademi adalah massive open online course (MOOC) platform karya anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk skill based learning atau pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar dan kursus online melalui aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga kursus dapat membuka dan mengkomersialkan kelas onlinenya dan menjangkau siswa dari seluruh Indonesia.
                        </p>
                        <h4>Akselerator</h4>
                        <p className='desk2'>
                            Arkademi adalah bagian program inkubasi dan akselerator dari perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator), Amazon Web Service (Edstart Program) dan Y Combinator (Startup School) yang dipilih dari tech startup edukasi terbaik dunia.
                        </p>
                        <div className='logo'>
                            <div className='icon'>
                                <img src={mox} />
                                <img src={Y_Combinator} />
                                <img src={aws} />
                                <img src={google} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
