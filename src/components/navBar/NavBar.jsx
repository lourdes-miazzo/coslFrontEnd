import React from 'react'
import "./navBar.css"
import logoC from "/images/logoCosl.png"
import logoF from "/images/logoF.png"
import logoI from "/images/logoI.png"
import logoW from "/images/logoW.png"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navBarOrg">
        <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="/"><img src={logoC} alt="" className='logoC'/></Link>
    <div className="linkAreaNav">
        <Link to="https://www.facebook.com/circuloodontologicosanluis.org" target='_blank' style={{textDecoration:"none", color: "inherit"}}> <img src={logoF} className='logoNavInd'/> </Link>
        <Link  to="https://api.whatsapp.com/send?phone=5492665133187" target='_blank' style={{textDecoration:"none", color: "inherit"}}> <img src={logoW} className='logoNavInd'/> </Link>
        <Link  to="https://www.instagram.com/cosl.ep/" target='_blank' style={{textDecoration:"none", color: "inherit"}}> <img src={logoI}className='logoNavInd'/> </Link>
    </div>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link className="nav-link hvr-fade" aria-current="page" to="/api/nosotros">NOSOTROS</Link>
            <Link className="nav-link hvr-fade" to="/api/comision">COMISIÓN DIRECTIVA</Link>
            <Link className="nav-link hvr-fade" to="/api/proveeduria">PROOVEDURÍA</Link>
            <Link className="nav-link hvr-fade" to="/api/capacitaciones">CAPACITACIONES</Link>
            <Link className="nav-link hvr-fade" to="/api/autogestion">AUTOGESTIÓN</Link>
        </div>
    </div>
</div>
        </nav>
    </>
    )
}

export default NavBar