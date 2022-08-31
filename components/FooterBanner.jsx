import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const FooterBanner = () => {
  return (
            <div className="footer section bd-container">
            <div className="footer__container bd-grid">

            <div className="footer__content">
                    <a href="#" className="footer__logo">Correo</a>
                    <span className="footer__description">secretodeeva@gmail.com</span>
                    <div>
                        <a href="#" className="footer__social"><i className='bx bxl-facebook'></i></a>
                        <a href="#" className="footer__social"><i className='bx bxl-instagram'></i></a>
                        <a href="#" className="footer__social"><i className='bx bxl-twitter'></i></a>
                    </div>
                </div>
            </div>

            
        </div>
  )
}

export default FooterBanner