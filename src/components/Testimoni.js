import React from 'react'
import petik from '../assets/Petik.png'
import org1 from '../assets/org1.png'
import org2 from '../assets/org2.png'
import org3 from '../assets/org3.png'
import './Testimoni.css'

export const Testimoni = () => {
    return (
        <section style={{ marginTop: "50px" }}>
            <div className='bg'>
                <h1>Testimoni</h1>
                <div className='container-custome'>
                    <div className='content-card'>
                        <div className='card-testi'>
                            <img src={petik} />
                            <p>Kursus online di Arkademi sangat berkesan, materinya simple tidak berbelit-belit. Mudah dicerna bagi para pemula seperti saya. Apalagi dengan sertifikat yang diberi setelah lulus dalam kuis. Sukses terus buat Arkademi!</p>
                            <div className='identitas'>
                                <img src={org1} />
                                <div className='text'>
                                    <h4>Nizar Putra (Bandung)</h4>
                                    <p>Siswa kelas Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-testi'>
                            <img src={petik} />
                            <p>Materi kursus online di Arkademi sangat menarik, isinya daging semua dan layak dipelajari. Pematerinya juga berkompeten di bidangnya. Ditambah penyajian kelas sangat ciamik dan user friendly. Solusi buat pebisnis.</p>
                            <div className='identitas'>
                                <img src={org2} />
                                <div className='text'>
                                    <h4>Fuad Hasan (Cilegon)</h4>
                                    <p>Siswa kelas Inbound Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-testi'>
                            <img src={petik} />
                            <p>Saya beruntung bergabung ke kursus online di Arkademi. Metode penyampaian sangat jelas singkat dan memudahkan belajar. Ditambah lagi tampilan presentasi yang membuat kita tidak jenuh dalam belajar online.</p>
                            <div className='identitas'>
                                <img src={org3} />
                                <div className='text'>
                                    <h4>Dewi Wijayanti (Jakarta)</h4>
                                    <p>Siswa kelas Brevet Pajak A/B</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
