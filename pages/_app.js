import React from 'react';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import { Layout } from '../components';

import '../styles/globals.css'



import { StateContext, stateContext } from '../context/StateContext'

function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
    <Layout>
      <Toaster/>
      <Script src='https://www.facebook.com/tr?id=5519149628142182&ev=PageView&noscript=1"'/>
      <Script id='facebook-script'>
        { `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '5519149628142182');
        fbq('track', 'PageView');
        `}
      </Script>
       <Component {...pageProps} />
       </Layout>
       </StateContext>
  )
}

export default MyApp
