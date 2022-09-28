import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Cancel = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Tu pago fue rechazado</h2>
        <p className="description">
          Intenta Nuevamente
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

export default Cancel