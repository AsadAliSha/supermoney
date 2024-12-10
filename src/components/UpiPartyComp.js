import React from 'react'
import Upipartyimage from '../assets/upi-party-1.svg'
import Upipartyimage1 from '../assets/upi-party-2.webp'
import Upipartyimage2 from '../assets/upi-party-3.webp'

const UpiPartyComp = () => {
  return (
    <div className='upi-party-container'>
      <div className='upi-party-heading'>
        <h2>The UPI party</h2>
        <p>has only begun. Stay tuned...</p>
      </div>
      <div className='upi-image'>
        <div className='upi-image-contanier'>
          <h2>Enjoy partner privileges</h2>
          <p>Special perks & privileges for you with our online & offline partners!</p>
          <img src={Upipartyimage} />
        </div>
        <div className='upi-image-jackpot'>
          <h2>Hit the super jackpot</h2>
          <p>From super bikes to flight tickets, win weekly super rewards!</p>
          <img src={Upipartyimage1} />
        </div>
        <div className='upi-image-gift'>
          <h2>Gift your friend</h2>
          <p>A friend in greed is a friend indeed! Gift a meme along with money to your friend!</p>
          <img src={Upipartyimage2} />
        </div>
      </div>
    </div>
  )
}

export default UpiPartyComp
