import React from 'react'
import { client } from '../lib/client'

import Image from 'next/image'

import { Product, FooterBanner, HeroBanner } from '../components'

const index = ({ products, bannerData }) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <section className="about section bd-container" id="about">
                <div className="about__container  bd-grid">
                    <div className="about__data">
                        <h2 className="section-title about__initial">Descubriendo tus <br/> pasiones sexuales</h2>
                        <p className="about__description">Encuntra los mejores juguetes y productos eroticos para volver tus fantasias realidad</p>
                    </div>


                    <Image src="/img/secretoeva1.jpg" width={380} height={400} className="about__img"></Image>
                </div>
      </section>

      <section className="section category">
                <h2 className="section-title">Nuestro compromiso <br/> es complacerte</h2>

                <div className="category__container container grid">
                    <div className="category__data">
                    <Image src="/img/mano2.png" width={90} height={100} className="category__img"></Image>
                        <h3 className="category__title">Escoge tus Juguetes</h3>
                        <p className="category__description">Tenemos juguetes y productos de la mas alta calidad. Garantia de 3 meses</p>
                    </div>

                    <div className="category__data">
                    <Image src="/img/pago.png" width={90} height={100} className="category__img"></Image>
                        <h3 className="category__title">Realiza tu pago</h3>
                        <p className="category__description">Aceptamos pagos con tarjeta de debito,credito o depositos en efectivo en oxxo</p>
                    </div>

                    <div className="category__data">
                    <Image src="/img/delivery2.png" width={90} height={100} className="category__img"></Image>
                        <h3 className="category__title">Recibe</h3>
                        <p className="category__description">Tu pedido se entrega lo mas pontro posible y con la mayor de las discreciones</p>
                    </div>
                </div>
            </section>

    <div className='menu section bd-container'>
    <h2 className="section-title">Juguetes</h2>
    <div className='menu__container bd-grid'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      </div>
    <FooterBanner/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }

}

export default index