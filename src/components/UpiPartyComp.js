import React,{ useEffect,  useRef } from 'react'
import Upipartyimage from '../assets/upi-party-1.svg'
import Upipartyimage1 from '../assets/upi-party-2.webp'
import Upipartyimage2 from '../assets/upi-party-3.webp'

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useHeader } from '../config/Context';

gsap.registerPlugin(ScrollTrigger);
const UpiPartyComp = () => {
  
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

  const upiPartyHeadingRef = useRef(null);
  const cardsRef = useRef(null);
  
useEffect(() => {
  gsap.from(upiPartyHeadingRef.current, {
    y: -30,
    opacity: 0,
    duration: 1,
   
    scrollTrigger: {
      trigger: upiPartyHeadingRef.current,
      start: 'top bottom',  
      end: 'bottom top', 
      scrub: true,        
    }
  });
  gsap.set('.upi-image-contanier', { x: 0, y: 0 });
  gsap.set('.upi-image-jackpot', { x: -500, y:-30});
  gsap.set('.upi-image-gift', { x: -700, y: -40 });
  
  gsap.to('.upi-image-contanier', {
    x: 0,
    y: 0,
    zIndex:3,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: '.upi-party-container',
      start: 'top 80%',
      end: 'bottom top',
      // scrub: true,
      // once: true,
    }
  });

  gsap.to('.upi-image-jackpot',{
    x: 0,
    y: 0,
    zIndex:2,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".upi-party-container",
      start: 'top 80%',
      end: 'bottom top',
      
      // scrub: true,
      // once: true,
    }
  });

  gsap.to('.upi-image-gift', {
    x: 0,
    y: 0,
    zIndex:1,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".upi-party-container",
      start: 'top 80%',
      end: 'bottom top',
      // scrub: true,
      // once: true,
    }
  });
  gsap.from(cardsRef.current, {
    y: 100,
    opacity: 0,
    duration: 1 ,
    stagger: 1, 
    scrollTrigger: {
      trigger: ".upi-party-container",
      start: 'top 80%',  
      end: 'bottom top',
      scrub: true,
      // once: true,
      immediateRender: true
    }
  });
}, []);

     


  return (
    <div ref={componentRef} className='upi-party-container'>
      <div className='upi-party-heading'
      ref={upiPartyHeadingRef}
       >
        <h2>The UPI party</h2>
        <p>has only begun. Stay tuned...</p>
      </div>
      <div className='upi-image'
      ref={cardsRef}
      >
        <div className='upi-image-contanier'>
          <h2>Enjoy partner privileges</h2>
          <p>Special perks & privileges for you with our online & offline partners!</p>
          <img src={Upipartyimage} />
        </div>
        <div className='upi-image-jackpot'>
          <h2>Hit the super jackpot</h2>
          <p>From super bikes to flight tickets, win weekly super rewards!</p>
          <img src={Upipartyimage1} />
        </div>
        <div className='upi-image-gift'>
          <h2>Gift your friend</h2>
          <p>A friend in greed is a friend indeed! Gift a meme along with money to your friend!</p>
          <img src={Upipartyimage2} />
        </div>
      </div>
    </div>
  )
}

export default UpiPartyComp
