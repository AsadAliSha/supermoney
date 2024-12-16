import React, { useEffect, useRef } from 'react'
import superDeposit from "../assets/super-deposit.webp"

// import superDepositMobile from "../assets/superdeposit-mobile.webp"
import leftcoin from "../assets/coin-3.webp"
import rightStairs from "../assets/stairs-3.webp"
import leftsideDecorator from "../assets/decor-l-2.webp"
import { useHeader } from '../config/Context'
const SuperDeposit = () => {
   const { setHeader } = useHeader(); // Get the function to update the header state
          const componentRef = useRef(null); // Ref to the component
        
          useEffect(() => {
            // Create the intersection observer to monitor component visibility
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  // Update the header when the component is in the viewport
                  setHeader({
                    logo: 'color', // Example: change logo to color
                    hamburgerColor: false // Example: hide hamburger menu
                  });
                } else {
                  // Optionally reset the header state when the component leaves the viewport
                  
                }
              });
            }, { threshold: 0.5 }); // Trigger when 50% of the component is visible
        
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
   <div className='superDeposit-container' ref={componentRef}>
                <div className='superDeposit-heading'
                >
                 <h2>superDeposit</h2>
               <p>9% interest on fixed deposits! Unbelievable, right?</p>
               </div>
  
               <div className='superDeposit-image'>
               <img className='absoluteimages leftcoin'  src={leftcoin} />
               <img height={"50%"} width={"70%"}  src={superDeposit} />

               <img className='absoluteimages rightStairs'   src={rightStairs} />
               <img className='absoluteimages leftSideDecorator'   src={leftsideDecorator} />

                  <div className='decoration-images' >
                 
      
                  </div>
                  
               </div>
             </div>
   
  )
}

export default SuperDeposit
