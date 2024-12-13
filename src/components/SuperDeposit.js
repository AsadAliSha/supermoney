import React from 'react'
import superDepositMobile from "../assets/superdeposit-mobile.webp"
import leftcoin from "../assets/coin-3.webp"
import rightStairs from "../assets/stairs-3.webp"
// import leftsideDecorator from "../assets/decor-l-2.webp"
const SuperDeposit = () => {
  return (
   <div className='superDeposit-container'>
          <div className='superDeposit-heading'
          >
           <h2>superDeposit</h2>
         <p>9% interest on fixed deposits! Unbelievable, right?</p>
         </div>
   
         <div className='superDeposit-image'>
           
            <div className='decoration-images' >
           
<img  src={leftcoin}/>
<img src={superDepositMobile}/>
<img src={rightStairs}/>

            </div>
            
         </div>
       </div>
   
  )
}

export default SuperDeposit
