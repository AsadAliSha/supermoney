import React, { useEffect, useRef } from 'react'
import phoneWeb from "../assets/super-card.webp"
import leftsidedecor from "../assets/side-decor-1.webp"
import rightsidedecor from "../assets/side-decor-2.webp"
import glassbgimage from "../assets/glass-card-bg.webp"
import { useHeader } from '../config/Context'
const SuperCard = () => {
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
          }, { threshold: 0.9 }); // Trigger when 50% of the component is visible
      
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
    <div ref={componentRef} className='supercard-container'>
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
