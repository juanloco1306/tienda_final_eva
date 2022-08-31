import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks()
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Gracias por tu compra!</h2>
        <p className="description">
          Cualquier duda comunicarse por favor a
          <a className="email" href="mailto:order@example.com">
          fungidecoradores@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn-success">
            Continuar comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success