
import React, { useEffect, useRef } from 'react'

import SuperNote from '../assets/super-note.webp'
import posMachine from '../assets/pos-machine.webp'
import qrcode from '../assets/qr-code-scan.svg'
import sideLight from '../assets/side-light.webp'


import { Layout } from 'antd'
import { useHeader } from '../config/Context'
const ScanandPay = () => {
  const { setHeader } = useHeader(); // Get the function to update the header state
      const componentRef = useRef(null); // Ref to the component
    
      useEffect(() => {
        console.log("ScanandPay component unmounted!");
        
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
    <Layout>
    <div ref={componentRef} className='scanAndMoney-container'>
     
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
