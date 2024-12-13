import React from 'react'
import phoneWeb from "../assets/super-card.webp"
import leftsidedecor from "../assets/side-decor-1.webp"
import rightsidedecor from "../assets/side-decor-2.webp"
import glassbgimage from "../assets/glass-card-bg.webp"
const SuperCard = () => {
  return (
    <div className='supercard-container'>
       <div className='superCard-heading'
    //   ref={upiPartyHeadingRef}
       >
        <h2>superCard</h2>
      <p>Earn 9% interest p.a. & up to 5% cashback on all merchant UPI transactions</p>
      </div>

      <div className='superCard-image'>
        <img className='glass-image'  src={glassbgimage}/>
        

       
        <img src={leftsidedecor} />
        <div className='supercard-phonecardimage'>
            <img src={phoneWeb} />
        </div>
<img src={rightsidedecor} className='rightSideDecor'/>

      </div>
    </div>
  )
}

export default SuperCard
