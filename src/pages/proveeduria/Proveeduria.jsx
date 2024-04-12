import "./proveeduria.css"
import Footer from "../../components/footer/Footer.jsx"
import { Link } from "react-router-dom"
import logoW from "/images/logoW.png"
import prov from "/images/prov.webp"

const Proveeduria= ()=>{
;
    return(
        <>
        <div className="backColorSuplie">
            <div className="aroundSuplie">
                <div className="aroundImgSuplie">
                    <img className="imgSuplie" src={prov} alt="" />
                </div>
                <div className="titleSuplie">PROVEEDURÍA</div>
                <p className="textSuplie">El Círculo Odontológico San Luis cuenta con una proveeduría de insumos y materiales odontológicos de primer nivel para sus asociados. La misma se destaca por la variedad de productos con los más altos estándares de calidad, lo que facilita el actuar profesional y el acceso a los insumos</p>
                <div className="whatsAreaSuplie">
                    <div className="textWhatsSuplie">
                        HACENOS TU CONSULTA
                    </div>
                    <Link to="https://api.whatsapp.com/send?phone=5492664873773" target='_blank' style={{textDecoration:"none", color: "inherit"}}><img src={logoW} className="logoWhatsSuplie"/></Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Proveeduria