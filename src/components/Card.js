import React from 'react'
import thumb from '../assets/THUMBNAIL.png'
import star from '../assets/star.png'
import './Card.css'

export const Card = ({diskon, harga}) => {
  return (
    <div className='card'>
        <img src={thumb}/>
        <div className='content'> 
            <p clasname='title-card'>Arkademi</p>
            <h4 className='' style={{ fontSize : "12px", margin : "0", marginBottom : "10px" }}>Membuat Landing Page bagi Desainer Website</h4>
            <div className='star'>
                <img className='icon-star' src={star}/>
                <p style={{ fontSize : "10px" }}>4.5  (>1000)</p>
            </div>
            <div className='star'>
                {diskon ? <><p className='diskon'>{diskon}</p>
                <strike style={{ fontSize : "10px" }}>Rp {harga}</strike></> : ""}
            </div>
            <h2 style={{ fontSize : "16px", fontWeight : 800, margin : "0" }}>Rp 280.000</h2>
        </div>
    </div>
  )
}
