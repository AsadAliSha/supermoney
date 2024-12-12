import React, { useEffect,  useRef } from 'react'
import Upipartyimage from '../assets/upi-party-1.svg'
import Upipartyimage1 from '../assets/upi-party-2.webp'
import Upipartyimage2 from '../assets/upi-party-3.webp'

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const UpiPartyComp = () => {
  const upiPartyHeadingRef = useRef(null);
  const cardsRef = useRef(null);
  
useEffect(() => {
  // GSAP animation for the heading when it comes into view
  gsap.from(upiPartyHeadingRef.current, {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: upiPartyHeadingRef.current,
      start: 'top 80%',  // Trigger when the top of the element is 80% into the viewport
      end: 'bottom top', // End trigger when the element leaves the top of the viewport
      scrub: true,        // Sync with scroll position
             // Run the animation only once when the section first comes into view
    }
  });
  gsap.set('.upi-image-contanier', { x: 0, y: 0 });
  gsap.set('.upi-image-jackpot', { x: -500, y: -40 });
  gsap.set('.upi-image-gift', { x: -1000, y: -40 });
  
  // ScrollTrigger animation for the overlapping cards
  gsap.to('.upi-image-contanier', {
    x: 0,
    y: 0,
    zIndex:3,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: cardsRef.current,
      start: 'top 75%',
      end: 'bottom top',
      scrub: true,
      once: true,
    }
  });

  gsap.to('.upi-image-jackpot', {
    x: 0,
    y: 0,
    zIndex:2,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: cardsRef.current,
      start: 'top 75%',
      end: 'bottom top',
      scrub: true,
      once: true,
    }
  });

  gsap.to('.upi-image-gift', {
    x: 0,
    y: 0,
    zIndex:1,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: cardsRef.current,
      start: 'top 75%',
      end: 'bottom top',
      scrub: true,
      once: true,
    }
  });
  // GSAP animation for the image cards when they come into view
  gsap.from(cardsRef.current, {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 1, // Adds a slight delay between each card animation
    scrollTrigger: {
      trigger: cardsRef.current,
      start: 'top 75%',  // Trigger when the top of the element is 75% into the viewport
      end: 'bottom top',
      scrub: true,
      once: true,
    }
  });
}, []);

     
 

  return (
    <div className='upi-party-container'>
      <div className='upi-party-heading' ref={upiPartyHeadingRef}>
        <h2>The UPI party</h2>
        <p>has only begun. Stay tuned...</p>
      </div>
      <div className='upi-image' ref={cardsRef}>
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
