import React, { useEffect, useRef } from 'react'
import superDeposit from "../assets/super-deposit.webp"

// import superDepositMobile from "../assets/superdeposit-mobile.webp"
import leftcoin from "../assets/coin-3.webp"
import rightStairs from "../assets/stairs-3.webp"
import leftsideDecorator from "../assets/decor-l-2.webp"
import { useHeader } from '../config/Context'
import { gsap } from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SuperDeposit = () => {
   const { setHeader } = useHeader(); // Get the function to update the header state
          const componentRef = useRef(null); // Ref to the component
              const imageRef = useRef(null); // Ref to the image
                  const headingRef = useRef(null); // Ref to the image
                  const decoratorRef = useRef(null); // Ref to the image
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


          useEffect(() => {
            // Create the GSAP timeline to sequence the animations
           gsap.fromTo( imageRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: imageRef.current,
                start: 'top 80%', // Trigger the animation when the top of the element hits 80% of the viewport height
                end: 'bottom top', // End the animation when the bottom of the element reaches the top of the viewport
                scrub: true, // Makes animation progress as you scroll
              },
            }
          )
          gsap.fromTo( headingRef.current,
            { opacity: 0, y: 200 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: headingRef.current,
                start: 'top 80%', // Trigger the animation when the top of the element hits 80% of the viewport height
                end: 'bottom top', // End the animation when the bottom of the element reaches the top of the viewport
                scrub: true, // Makes animation progress as you scroll
              },
            }
          )
          gsap.fromTo( decoratorRef.current,
            { opacity: 0, y: 300 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: decoratorRef.current,
                start: 'top 80%', // Trigger the animation when the top of the element hits 80% of the viewport height
                end: 'bottom top', // End the animation when the bottom of the element reaches the top of the viewport
                scrub: true, // Makes animation progress as you scroll
              },
            }
          )

          return () => {
            ScrollTrigger.disable()
          }
          }, []);
  return (
   <div className='superDeposit-container' ref={componentRef}>
                <div className='superDeposit-heading'
                ref={headingRef}
                >
                 <h2>superDeposit</h2>
               <p>9% interest on fixed deposits! Unbelievable, right?</p>
               </div>
  
               <div className='superDeposit-image' ref={imageRef}>
               <img className='absoluteimages leftcoin'  src={leftcoin} ref={decoratorRef} />
               <img height={"50%"} width={"70%"}  src={superDeposit} />

               <img className='absoluteimages rightStairs'   src={rightStairs} ref={decoratorRef} />
               <img className='absoluteimages leftSideDecorator'   src={leftsideDecorator} ref={decoratorRef} />

                 
                  
               </div>
             </div>
   
  )
}

export default SuperDeposit
