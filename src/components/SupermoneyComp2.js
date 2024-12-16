import React, { useEffect, useRef } from 'react'
import QrScanner from '../assets/qr scanner.png'
import { useHeader } from '../config/Context';
// import { useHeader } from '../config/Context';
const SupermoneyComp2 = () => {
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
      }, { threshold: 1 }); // Trigger when 50% of the component is visible
  
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
    <div ref={componentRef} className='transaction-container'>
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
