
import React from 'react'

import SuperNote from '../assets/super-note.webp'
import posMachine from '../assets/pos-machine.webp'
import qrcode from '../assets/qr-code-scan.svg'
import sideLight from '../assets/side-light.webp'


import { Layout } from 'antd'
const ScanandPay = () => {
  return (
    <Layout>
    <div className='scanAndMoney-container'>
     
  <div className='scanAndMoney-contentContainer' >
    <div>
    <div className='scanAndMoney-image'>
        <img src={SuperNote}  />
      </div>
      <div className='scanAndPay-heading'>
        <h2>Redefing the way you </h2>
        <h3>Scan and pay</h3>
       
      </div>
    </div>
    <div className='scanAndPayMobileImage' >
        <img height={"30%"} style={{position:"absolute",rotate:'20deg',right:'31%',zIndex:1,}} src={qrcode} />
        <img height={"30%"} style={{position:"absolute",rotate:'10deg',right:'25%',}} src={sideLight} />

    <img width={'100%'} height={'80%'}  src={posMachine} />

    </div>
  </div>
     

     
    </div>
  </Layout>
)
  
}

export default ScanandPay
