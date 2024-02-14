import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import icono from "/images/logoCosl.png"
import logoI from "/images/logoI.png"
import logoW from "/images/logoW.png"
import logoF from "/images/logoF.png"
import "./barraNav.css"

const BarraNav = () => {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='gral'>
        <div className="surroundLinks">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='customToggler'>
          <i className="fa-solid fa-bars colorHamb"></i>
          </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="ml-auto navLinkOrder">
                <Nav.Link as={Link} to="/api/nosotros" className='hvr-fade'>NOSOTROS</Nav.Link>
                <Nav.Link as={Link} to="/api/comision" className='hvr-fade'>COMISIÓN DIRECTIVA</Nav.Link>
                <Nav.Link as={Link} to="/api/proveeduria" className='hvr-fade'>PROOVEDURÍA</Nav.Link>
                <Nav.Link as={Link} to="/api/capacitaciones" className='hvr-fade'>CAPACITACIONES</Nav.Link>
                <Nav.Link as={Link} to="/api/autogestion" className='hvr-fade'>AUTOGESTIÓN</Nav.Link>

              </Nav>
            </Navbar.Collapse>
        </div>
   
        <div className='surroundIcon'>
          <Navbar.Brand as={Link} to="/"><img src={icono} className='icon'/></Navbar.Brand>
        </div>
  
        <div className="logos">
            <Link to="https://www.facebook.com/circuloodontologicosanluis.org" target='_blank' style={{textDecoration:"none", color: "inherit"}}> <img src={logoF} className='logoInd'/> </Link>
            <Link  to="https://api.whatsapp.com/send?phone=5492665133187" target='_blank' style={{textDecoration:"none", color: "inherit"}}> <img src={logoW} className='logoInd'/> </Link>
            <Link  to="https://www.instagram.com/cosl.ep/" target='_blank' style={{textDecoration:"none", color: "inherit"}}> <img src={logoI}className='logoInd'/> </Link>
        </div>

      </Navbar>
    </>
  )
}

export default BarraNav
