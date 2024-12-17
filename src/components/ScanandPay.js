import React, { useEffect, useRef } from 'react'

import SuperNote from '../assets/super-note.webp'
import posMachine from '../assets/pos-machine.webp'
import qrcode from '../assets/qr-code-scan.svg'
import sideLight from '../assets/side-light.webp'

import { Layout } from 'antd'
import { useHeader } from '../config/Context'
import { gsap } from 'gsap'

const ScanandPay = () => {
  const { setHeader } = useHeader()
  const componentRef = useRef(null)
  const qrcodeRef = useRef(null)
  const sideLightRef = useRef(null)
  const posMachineRef = useRef(null)
  const sidenoteRef = useRef(null)

  const headingRef = useRef(null)
  useEffect(() => {
    console.log('ScanandPay component unmounted!')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeader({
              logo: 'white',
              hamburgerColor: true,
            })
          }
        })
      },
      { threshold: 0.9 },
    )
    if (componentRef.current) {
      observer.observe(componentRef.current)
    }
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
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

    gsap.fromTo(
      qrcodeRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: qrcodeRef.current,
          start: 'top 75%',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      sideLightRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sideLightRef.current,
          start: 'top 75%',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      posMachineRef.current,
      { opacity: 0, y: -200 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: posMachineRef.current,
          start: 'top 70%',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
    gsap.fromTo(
      sidenoteRef.current,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        y: 0,
        x:50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%', // Trigger the animation when the top of the element hits 80% of the viewport height
          end: 'bottom top', // End the animation when the bottom of the element reaches the top of the viewport
          scrub: true, // Makes animation progress as you scroll
        },
      }
    )
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [])

  return (
    <Layout>
      <div ref={componentRef} className='scanAndMoney-container'>
        <div className='scanAndMoney-contentContainer'>
          <div>
            <div className='scanAndMoney-image' ref={sidenoteRef}>
              <img src={SuperNote} />
            </div>
            <div className='scanAndPay-heading' ref={headingRef}>
              <h2>Redefing the way you </h2>
              <h3>Scan and pay</h3>
            </div>
          </div>
          <div className='scanAndPayMobileImage' ref={posMachineRef}>
            <img
            
             className='qrcodeimage'
              src={qrcode}
            />
            <img
             className='holo-light'
             // style={{ position: 'absolute', rotate: '10deg', right: '80%' }}
              src={sideLight}
            />

            <img width={'100%'} height={'80%'} src={posMachine} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ScanandPay
