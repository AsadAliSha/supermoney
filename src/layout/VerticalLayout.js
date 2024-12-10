import React from 'react'
import { Layout } from 'antd'
import { Footer, Header } from 'antd/es/layout/layout'
// import supermoneylogo from '../assets/super-money-logo.svg'

// import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'
// import { useDispatch, useSelector } from 'react-redux'

// import WhiteLogo from '../assets/Logo.png'
// import BlueLogo from '../assets/blueLogo.png'
// import MainMenu from './MainMenu'
// import { toggleTheme } from '../redux'
import supermoneylogowhite from '../assets/supermoney-logo-white.svg'
// import { CiMail } from 'react-icons/ci'
import { IoMailOutline } from 'react-icons/io5'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { CgMenuRight } from 'react-icons/cg'
import supermoneylogocolor1 from '../assets/super-money-logo-color (1).svg'

const VerticalLayout = ({ children }) => {
  // const dispatch = useDispatch()
  const { Content } = Layout
  // const theme = useSelector((state) => state.theme.theme)

  return (
    <div className='v-layout'>
      <Layout>
        {/* <Sider
          trigger={null}
          collapsible
          width={220}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            background: 'var(--sidebar)',
            boxShadow: 'box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;',
          }}
        >
          <div className='company-logo'>
            {theme === 'light' ? (
              <img src={BlueLogo} alt='logo' />
            ) : (
              <img src={WhiteLogo} alt='logo' />
            )}
          </div>
          <MainMenu active={active} />
        </Sider> */}
        <Layout className='site-layout'>
          <Header className='main-header'>
            <div className='header-container'>
              <div className='company-logo'>
                <img src={supermoneylogowhite} />
                <button>
                  <CgMenuRight size='35px' color='#fff' />
                </button>
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
