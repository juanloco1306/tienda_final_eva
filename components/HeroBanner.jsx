import React from 'react'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (
    <section className="home" id="home">
    <div className="home__container bd-container bd-grid">
        <div className="home__data">
            <h1 className="home__title">{heroBanner.smallText}</h1>
            <h2 className="home__subtitle">{heroBanner.midText}</h2>
        </div>

        <img src={urlFor(heroBanner.image)} alt="" className="home__img"/>
    </div>
</section>
  )
}

export default HeroBanner