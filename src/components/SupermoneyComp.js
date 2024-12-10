import React from 'react'
import Qrcoin from '../assets/qr-coin.webp'
import QrScanner from '../assets/qr scanner.png'
import StairShape from '../assets/stair-shape.webp'
import { Layout } from 'antd'

const SupermoneyComp = () => {
  return (
    <Layout>
      <div className='supermoney-container'>
        <div className='supermoney-image'>
          <img src={Qrcoin} />
        </div>
        <div className='supermoney-heading'>
          <h3>Unlock the power of</h3>
          <h2>superUPI</h2>
          <p>crafted for the superYou</p>
        </div>
        <div className='supermoney-qrscan'>
          <img src={QrScanner} />
          <p>Check eligibility</p>
        </div>
        <div className='supermoney-iamge-wrapper'>
          <img src={StairShape} />
          <p>
            Check eligibility Get up to 5% guaranteed cashback & many more perks. Every single time.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SupermoneyComp
