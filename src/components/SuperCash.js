import React, { useEffect, useRef } from 'react'

import superCash from "../assets/super-cash.webp"

// import superDepositMobile from "../assets/superdeposit-mobile.webp"
import leftcoin from "../assets/coin-2.webp"
import rightCoin from "../assets/note-with-coin-and-cube.webp"
import leftsideDecorator from "../assets/note-with-l.webp"
import { useHeader } from '../config/Context'
const SuperCash = () => {
    const { setHeader } = useHeader(); // Get the function to update the header state
            const componentRef = useRef(null); // Ref to the component
          
            useEffect(() => {
              // Create the intersection observer to monitor component visibility
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    // Update the header when the component is in the viewport
                    setHeader({
                      logo: 'white', // Example: change logo to color
                      hamburgerColor: true // Example: hide hamburger menu
                    });
                  } else {
                    // Optionally reset the header state when the component leaves the viewport
                    
                  }
                });
              }, { threshold: 0.7 }); // Trigger when 50% of the component is visible
          
              // Start observing the component
              if (componentRef.current) {
                observer.observe(componentRef.current);
              }
          
              // Cleanup the observer on component unmount
              return () => {
                if (componentRef.current) {
                  observer.unobserve(componentRef.current);
                }
              };
            },[]);
  return (
     <div className='superCash-container' ref={componentRef}>
                    <div className='superCash-heading'
                    >
                     <h2>superCash</h2>
                   <p>Get instant pre approved loans at a low interest rate</p>
                   </div>
      
                   <div className='superCash-image'>
                   <img className='absoluteimages super-cash-leftcoin'  src={leftcoin} />
                   <img height={"50%"} width={"70%"}  src={superCash} />
    
                   <img className='absoluteimages superCash-rightCoin'   src={rightCoin} />
                   <img className='absoluteimages super-cash-leftSideDecorator'    src={leftsideDecorator} />
    
                     
                      
                   </div>
                 </div>
  )
}

export default SuperCash
