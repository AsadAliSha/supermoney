import React from 'react'
import QrScanner from '../assets/qr scanner.png'
const SupermoneyComp2 = () => {
  return (
    <div className='transaction-container'>
      <div className='transaction-heading'>
        <h2>Up to 5% cashback</h2>
        <p>on every merchant UPI transaction</p>
      </div>
      <div className='transaction-qrscanner'>
        <img src={QrScanner} />
        <p>Check eligibility</p>
      </div>
    </div>
  )
}

export default SupermoneyComp2
