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
        const upiPartyHeadingRef = useRef(null);
  const cardsRef = useRef(null);
  const cardRefs = useRef([]);




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

  
useEffect(() => {
    // Create the GSAP timeline to sequence the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 75%', // Trigger when the top of the element is 75% into the viewport
        end: 'bottom top', // End the animation when the bottom reaches the top
        // scrub: true,
        markers: false, // Set markers to true for debugging
      },
    });

    // First card: Animates from below and appears first
    tl.fromTo(
      cardRefs.current[0],
      { opacity: 0, y: 100,zIndex:3 }, // Start from below
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
      // Second card: Appears from behind with a delay
      .fromTo(
        cardRefs.current[1],
        { opacity: 0,y:100 ,xPercent:-120 ,zIndex:2}, // Start from a lower position
        { opacity: 1, y: -100, duration: 0.5, ease: 'power2.out', delay:0.1 },
        '<' // Align with the previous animation's end time
      )
      // Third card: Appears from behind with a larger delay
      .fromTo(
        cardRefs.current[2],
        { opacity: 0, y: 100,xPercent:-241,zIndex:1 }, // Start further below
        { opacity: 1, y: -120, duration: 0.5, ease: 'power2.out',delay:0.1  },
        '<' // Align with the previous animation's end time
      )
      .fromTo(
        [cardRefs.current[1], cardRefs.current[2]], // Second and third cards
       {}, {
          y: 0, // Move back to the initial position (Y axis)
          xPercent: 0, // Move back to the initial X position
          duration: 0.5, // Duration for reset
          ease: 'power2.out', // Easing for smooth reset
        },
      );
      

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
        <div className='upi-image-contanier' ref={(el) => (cardRefs.current[0] = el)}>
          <h2>Enjoy partner privileges</h2>
          <p>Special perks & privileges for you with our online & offline partners!</p>
          <img src={Upipartyimage} />
        </div>
        <div className='upi-image-jackpot' ref={(el) => (cardRefs.current[1] = el)}>
          <h2>Hit the super jackpot</h2>
          <p>From super bikes to flight tickets, win weekly super rewards!</p>
          <img src={Upipartyimage1} />
        </div>
        <div className='upi-image-gift' ref={(el) => (cardRefs.current[2] = el)}>
          <h2>Gift your friend</h2>
          <p>A friend in greed is a friend indeed! Gift a meme along with money to your friend!</p>
          <img src={Upipartyimage2} />
        </div>
      </div>
    </div>
  )
}

export default UpiPartyComp
