import React, { useEffect, useRef } from 'react'
import phoneWeb from "../assets/super-card.webp"
import leftsidedecor from "../assets/side-decor-1.webp"
import rightsidedecor from "../assets/side-decor-2.webp"
import glassbgimage from "../assets/glass-card-bg.webp"
import { useHeader } from '../config/Context'
import { gsap } from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SuperCard = () => {
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
              scrub: true, // Makes animation progress as you scroll
            },
          }
        )
        }, []);
  return (
    <div ref={componentRef} className='supercard-container'>
       <div className='superCard-heading '
      ref={headingRef}
       >
        <h2>superCard</h2>
      <p>Earn 9% interest p.a. & up to 5% cashback on all merchant UPI transactions</p>
      </div>

      <div className='superCard-image' ref={imageRef}>
        <img className='glass-image'  src={glassbgimage}/>
        

       
        <img src={leftsidedecor} ref={decoratorRef} />
        <div className='supercard-phonecardimage'>
            <img src={phoneWeb} />
        </div>
<img src={rightsidedecor} ref={decoratorRef} className='rightSideDecor'/>

      </div>
    </div>
  )
}

export default SuperCard
