import React from 'react'
import Link from 'next/link'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const FooterBanner = () => {
  return (
            <div className="footer section bd-container">
            <div className="footer__container bd-grid">

            <div className="footer__content">
                    <a href="#" className="footer__logo">Correo</a>
                    <span className="footer__description">secretodeeva@gmail.com</span>
                    <div>
                        <Link href="https://www.facebook.com/secretodeva"><a className="footer__social"><i className='bx bxl-facebook'></i></a></Link>
                        <Link href="https://www.instagram.com/elsecretodeva/"><a  className="footer__social"><i className='bx bxl-instagram'></i></a></Link>
                        <Link href="https://www.tiktok.com/@secretodeva?lang=es"><a className="footer__social"><i className='bx bxl-tiktok'></i></a></Link>
                    </div>
                </div>
            </div>

            
        </div>
  )
}

export default FooterBanner