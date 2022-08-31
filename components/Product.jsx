import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: {image,name,slug,price}}) => {
  return (
    <div>
    <Link href={`/product/${slug.current}`}>
    <div className="menu__content">
                        <img src={urlFor(image && image[0])} alt="" className="menu__img"/>
                        <h3 className="menu__name">{name}</h3>
                        <span className="menu__preci">${price}</span>
                        
                    </div>
      </Link>
      </div>
  )
}

export default Product