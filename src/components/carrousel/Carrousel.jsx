import React from 'react'
import "./carrousel.css"



const Carrousel = () => {
  return (
    <>
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceart-fb0d5.appspot.com/o/foto%20corregida%20cable.jpg?alt=media&token=6a673e20-821d-46b6-bb88-1ee0de7611ea" className="d-block w-100" alt="..."/>
            </div> 
            <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceart-fb0d5.appspot.com/o/2recorte.jpg?alt=media&token=0ae97b4f-a2ab-41da-91a2-cd44da20123e" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceart-fb0d5.appspot.com/o/3recorte.jpg?alt=media&token=c61be2d5-14cb-480e-990b-7d16c8df9d45" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </>
  )
}

export default Carrousel