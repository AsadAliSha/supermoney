import React, { useEffect, useRef } from 'react'

import superCash from "../assets/super-cash.webp"

// import superDepositMobile from "../assets/superdeposit-mobile.webp"
import leftcoin from "../assets/coin-2.webp"
import rightCoin from "../assets/note-with-coin-and-cube.webp"
import leftsideDecorator from "../assets/note-with-l.webp"
import { useHeader } from '../config/Context'
import { gsap } from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SuperCash = () => {
    const { setHeader } = useHeader(); // Get the function to update the header state
            const componentRef = useRef(null); // Ref to the component
             const imageRef = useRef(null); // Ref to the image
                            const headingRef = useRef(null); // Ref to the image
                            const decoratorRef = useRef(null);
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
                          // scrub: true, // Makes animation progress as you scroll
                        },
                      }
                    )
                    gsap.fromTo( headingRef.current,
                      { opacity: 0, y:50 },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                          trigger: headingRef.current,
                          start: 'top 80%', // Trigger the animation when the top of the element hits 80% of the viewport height
                          end: 'bottom top', // End the animation when the bottom of the element reaches the top of the viewport
                          // scrub: true, // Makes animation progress as you scroll
                        },
                      }
                    )
                    gsap.fromTo( decoratorRef.current,
                      { opacity: 0, y: 100 },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                          trigger: decoratorRef.current,
                          start: 'top 80%', // Trigger the animation when the top of the element hits 80% of the viewport height
                          end: 'bottom top', // End the animation when the bottom of the element reaches the top of the viewport
                          // scrub: true, // Makes animation progress as you scroll
                        },
                      }
                    )
                    }, []);
  return (
     <div className='superCash-container' ref={componentRef}>
                    <div className='superCash-heading'
                    ref={headingRef}
                    >
                     <h2>superCash</h2>
                   <p>Get instant pre approved loans at a low interest rate</p>
                   </div>
      
                   <div className='superCash-image' >
                   <img className='absoluteimages super-cash-leftcoin' ref={decoratorRef}  src={leftcoin} />
                   <img height={"50%"} width={"70%"}  src={superCash} ref={imageRef}/>
    
                   <img className='absoluteimages superCash-rightCoin' ref={decoratorRef}   src={rightCoin} />
                   <img className='absoluteimages super-cash-leftSideDecorator' ref={decoratorRef}    src={leftsideDecorator} />
    
                     
                      
                   </div>
                 </div>
  )
}

export default SuperCash
