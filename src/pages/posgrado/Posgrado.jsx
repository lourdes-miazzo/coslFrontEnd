import React from 'react'
import "./posgrado.css"
import Footer from '../../components/footer/Footer'
import { useState, useEffect } from "react"
import logoI from "/images/logoI.png"
import logoW from "/images/logoW.png"
import logoF from "/images/logoF.png"
import logoEP from "/images/EP.png"
import { Link } from 'react-router-dom'


const Posgrado = () => {
 
    const [litleImgPos, setLitleImgPos]= useState(window.innerWidth <= 1023)
    useEffect(() => {
        const handleResize = () => {
          setLitleImgPos(window.innerWidth <= 1023);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    
        handleResize();
      }, []);
    
    return(
        <>
            <div className={litleImgPos? "backPos": "backPosBig"}>
              <span className="titlePos">ESCUELA DE POSGRADO</span>
              <div className="aroundLogo">
                <img src={logoEP} alt="" className="logoEp" />
              </div>
              <div className="aroundPos">
                <span className="textPos">
                  La Escuela de Posgrado (EP) es un área del Círculo Odontológico de San Luis cuya función principal es programar y desarrollar la actualización científica y académica para el mejoramiento profesional. Esta actividad se lleva a cabo a través de cursos teórico-prácticos, con o sin atención de pacientes, conferencias, <span translate="no">workshops</span>, así como también en la organización de congresos de la institución.
                </span>
                <div className="aroundPeoplePos">
                  <div className="groupPos"><strong>Escuela de Posgrado (EP)</strong></div>
                  <div className="groupPos"><strong>Presidente:</strong> Dra. Yanina Manso</div>
                  <div className="groupPos"><strong>Coordinadores:</strong>
                      <div className="group2Pos">Dra. María Eugenia Borra</div>
                      <div className="group2Pos">Dr.  Darío Capellino</div>
                      <div className="group2Pos">Dr. Facundo Chamorro</div>
                      <div className="group2Pos">Dra. Laura Rocca</div>
                  </div>
                </div>
              </div>
              <div className="aroundLogo">
                <img src={logoEP} alt="" className="logoEp" />
              </div>
                <div className="logosPos">
                        <Link to="" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoF} className="logoIndPos"/></Link>
                        <Link to="https://api.whatsapp.com/send?phone=5492665133187" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoW} className="logoIndPos"/></Link>
                        <Link to="https://www.instagram.com/circulo.odontologicodesanluis?igsh=MXQ3aXdqOTkzN21ibg==" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoI} className="logoIndPos"/></Link>
                </div>
            </div>
            <Footer/>
        </>
  )
}

export default Posgrado