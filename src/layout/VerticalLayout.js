import React,{useState,useEffect} from 'react'
import { Layout } from 'antd'
import { Footer, Header } from 'antd/es/layout/layout'
import supermoneylogowhite from '../assets/supermoney-logo-white.svg'
import supermoneylogoColor from '../assets/super-money-logo-color.svg'

import { IoMailOutline } from 'react-icons/io5'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { CgMenuRight } from 'react-icons/cg'
import supermoneylogocolor1 from '../assets/super-money-logo-color (1).svg'
import { useHeader } from '../config/Context'

const VerticalLayout = ({ children }) => {
  const { headerState } = useHeader();  // Get the current header state
  const [blurred, setBlurred] = useState(false);
  
  useEffect(() => {
   
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBlurred(true);  
      } else {
        setBlurred(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const { Content } = Layout
  
  return (
    <div className='v-layout'>
      <Layout>
       
        <Layout className='site-layout'>
          <Header className='main-header' style={{
              backgroundColor:blurred ? 'transparent' : '#4d43fe',
            }} >
            <div className='header-container'  >
              <div className='company-logo'  >
              <img
                  src={headerState.logo === 'white' ? supermoneylogowhite : supermoneylogoColor}
                  alt="Logo"
                />                <button>
                </button>
                <CgMenuRight size='35px' color={headerState.hamburgerColor?'#fff':'rgb(27 27 27 / 1)'} style={{background:''}} onClick={()=>{
                  console.log("this icon is clicked!");
                  
                }} />

              </div>
            </div>
          </Header>
          <Content className='main-content'>{children}</Content>
          <Footer className='mainfooter'>
            <div className=''>
              <ul className='footer-container'>
                <div className='footer-logo'>
                  <img src={supermoneylogocolor1} />
                </div>
                <div className='footer-list'>
                  <h3>Company</h3>
                  <a href='#'>
                    <li>About us</li>
                  </a>
                  <a href='#'>
                    <li>Terms of use</li>
                  </a>
                  <a href='#'>
                    <li>Privacy Policy</li>
                  </a>
                  <a href='#'>
                    <li>Corporate information</li>
                  </a>
                  <a href='#'>
                    <li>Lending Partners</li>
                  </a>
                </div>
                <div className='footer-list'>
                  <h3>Product</h3>
                  <a href='#'>
                    <li>Product Overview</li>
                  </a>
                  <a href='#'>
                    <li>superUPI</li>
                  </a>
                  <a href='#'>
                    <li>superCard</li>
                  </a>
                  <a href='#'>
                    <li>superDeposit</li>
                  </a>
                  <a href='#'>
                    <li>superCash</li>
                  </a>
                </div>
                <div className='footer-list'>
                  <h3>Support</h3>
                  <p>Get Answers and Assistance Right Where You Need It</p>
                  <a href='https://www.mail.com/' target='_blank' rel='noreferrer'>
                    <p>
                      <IoMailOutline size='35px' color='1b1b1b99' /> support@super.money
                    </p>
                  </a>
                </div>
              </ul>
              <div className='_footer-wrapper'>
                <p>Copyright © 2024 Scapic Innovations Private Limited All rights reserved.</p>
                <div className='footer-icon'>
                  <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                    <FaInstagram size={24} style={{ cursor: 'pointer', color: '#1b1b1b' }} />
                  </a>
                  <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                    <FiTwitter size={24} style={{ cursor: 'pointer', color: '#1b1b1b' }} />
                  </a>
                  <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                    <FaFacebookF size={24} style={{ cursor: 'pointer', color: '#1b1b1b' }} />
                  </a>
                  <a href='https://www.linkdin.com/' target='_blank' rel='noreferrer'>
                    <FaLinkedinIn size={24} style={{ cursor: 'pointer', color: '#1b1b1b' }} />
                  </a>
                </div>
                <div className='contentRight'>
                  <p>Scapic Innovations Private Limited</p>
                  <p>Buildings Alyssa, Begonia & Clover, Embassy Tech Village</p>
                  <p>Outer Ring Road, Devarabeesanahalli Village</p>
                  <p>Bengaluru- Karnataka – 560103</p>
                </div>
              </div>
              <div className='footer-main-heading'>
                <h1>Let’s be super.</h1>
              </div>
            </div>
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default VerticalLayout
