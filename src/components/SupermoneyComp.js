import React, { useEffect, useRef } from 'react'
import Qrcoin from '../assets/qr-coin.webp'
import QrScanner from '../assets/qr scanner.png'
import StairShape from '../assets/stair-shape.webp'
import SuperNote from '../assets/note-004.webp'
import gradientanim from '../assets/gradient-anim.mp4'

import { Layout } from 'antd'
// import { useGSAP } from '@gsap/react';

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const SupermoneyComp = () => {
  
  const container = useRef(null)

  
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
      <div className='supermoney-container'>
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
