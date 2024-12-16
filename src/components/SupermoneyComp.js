import React, { useEffect, useRef } from 'react'
import Qrcoin from '../assets/qr-coin.webp'
import QrScanner from '../assets/qr scanner.png'
import StairShape from '../assets/stair-shape.webp'
import SuperNote from '../assets/note-004.webp'
import gradientanim from '../assets/gradient-anim.mp4'

import { useHeader } from '../config/Context'; // Import the custom hook

import { Layout } from 'antd'
// import { useGSAP } from '@gsap/react';

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import { useBackground } from '../config/Context'
gsap.registerPlugin(ScrollTrigger)



const SupermoneyComp = () => {
  
  const container = useRef(null)

  const { setHeader } = useHeader(); // Get the function to update the header state
  const componentRef = useRef(null); // Ref to the component

  useEffect(() => {
    // Create the intersection observer to monitor component visibility
    const observer = new IntersectionObserver((entries) => {
      console.log("how many entries???????? ");
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Update the header when the component is in the viewport
          setHeader({
            logo: 'white', // Example: change logo to color
            hamburgerColor: true // Example: hide hamburger menu
          });
         
          
        } else {
          console.log("component unmount");
          
          // Optionally reset the header state when the component leaves the viewport
          // setHeader({
          //   logo: 'white', // Reset to white logo when out of view
          //   hamburgerColor: true // Show hamburger again
          // });
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


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top top', 
        end: 'bottom top', 
        scrub: true, 
      },
    });

   
    tl.to(container.current, {
      y: 800, 
      x: -360, 
      duration: 1, 
      ease: 'none', 
    })
      .to(container.current, {
        
        rotation: 360, 
        duration: 2, 
        ease: 'power4.out', 
      });
  }, []);

  return (
    <Layout>
      <div className='supermoney-container' style={{backgroundColor:'#4d43fe'}} ref={componentRef}>
        <div className='currency-note'>
          <img  ref={container} src={SuperNote} />
        </div>
        {/* <div className='super-money-middle-section'> */}
        <div className='supermoney-image'>
          <img src={Qrcoin} />
        </div>
        <div className='supermoney-heading '>
          <h3>Unlock the power of</h3>
          <h2>superUPI</h2>
          <p>crafted for the superYou</p>
        </div>

        {/* </div> */}

        <div className='supermoney-qrscan'>
          <video className='videoTag' autoPlay loop muted>
            <source src={gradientanim} type='video/mp4' />
          </video>
          <div className='supermoney-qrscan-content'>
            <img src={QrScanner} />
            <p>
              Check
              <br />
              eligibility
            </p>
          </div>
        </div>
        <div className='supermoney-iamge-wrapper'>
          <img src={StairShape} />
          <p>Get up to 5% guaranteed cashback & many more perks. Every single time.</p>
        </div>
      </div>
    </Layout>
  )
}

export default SupermoneyComp
