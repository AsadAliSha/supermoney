import React,{useRef} from  'react'
import Qrcoin from '../assets/qr-coin.webp'
import QrScanner from '../assets/qr scanner.png'
import StairShape from '../assets/stair-shape.webp'
// import SuperNote from '../assets/super-note.webp'
import gradientanim from '../assets/gradient-anim.mp4'

import { Layout } from 'antd'
import { useGSAP } from '@gsap/react';

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// useEffect(() => {
//   // GSAP animation: animating the box when the component mounts

// }, []);

const SupermoneyComp = () => {
  // const gsapref = useRef()

  // useEffect(()=>{
  //   gsap.fromTo(".currency-note",
  //     {
  //       y:0, // Initial position off-screen
  //       opacity: 0, // Initially hidden
  //       x:0,
  //       // overflow:'visible'

  //     },
  //     {
  //       x: 0, // Move to normal position
  //       opacity: 1, // Fade in
  //       duration: 1, // Duration of the animation
  //       scrollTrigger: {
  //         trigger: ".currency-note", // Element that triggers the animation
  //         start: "top 80%", // Start when the element is 80% from the top of the viewport
  //         end: "top 30%", // End when the element is 30% from the top of the viewport
  //         scrub: true, // Smoothly scrubs the animation based on scroll position
  //         markers: false, // You can set this to `true` to see the trigger points on screen
  //       }
  //     }
  //   );
  

  //   },[])
  const container = useRef()
  useGSAP(
    () => {
        // gsap code here...
        gsap.from('h2', { 
        opacity:0,
          y:30,
          duration:1,
          delay:1 }); // <-- automatically reverted
    },
    {scope:container}
  
)
  
  return (
    <Layout>
      <div className='supermoney-container' >
        {/* <div className='currency-note'>
          <img src={SuperNote} />
        </div> */}
        {/* <div className='super-money-middle-section'> */}
        <div className='supermoney-image'>
          <img src={Qrcoin} />
        </div>
        <div className='supermoney-heading' ref={container}  >
          <h3>Unlock the power of</h3>
          <h2>superUPI</h2>
          <p>crafted for the superYou</p>
        </div>

        {/* </div> */}

        <div className='supermoney-qrscan'>
        <video className='videoTag' autoPlay loop muted >
    <source src={gradientanim} type='video/mp4'  />
</video>
<div className='supermoney-qrscan-content'>
<img src={QrScanner} />
<p>Check 
  <br/>
  eligibility</p>
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
