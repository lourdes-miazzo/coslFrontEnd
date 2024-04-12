import React from 'react'
import "./carrousel.css"
import carr1 from "/images/carr1.jpg"
import carr2 from "/images/carr2.jpg"
import carr3 from "/images/carr3.jpg"





const Carrousel = () => {
  return (
    <>
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={carr1} className="d-block w-100" alt="..."/>
            </div> 
            <div className="carousel-item">
            <img src={carr2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={carr3} className="d-block w-100" alt="..."/>
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