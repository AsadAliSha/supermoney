import { Layout, Switch } from 'antd'

import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import { toggleTheme } from '../redux'
import MenuDrawer from './MenuDrawer'

import { Footer } from 'antd/es/layout/layout'
import { IoMailOutline } from 'react-icons/io5'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import supermoneylogo from '../assets/super-money-logo-color.svg'

const { Content } = Layout

const MobileLayout = ({ active, children }) => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme)

  return (
    <Layout className='m-layout'>
      <div className='mobile-header'>
        <MenuDrawer active={active} />
        <Switch
          className='themeSwitch'
          defaultChecked={theme === 'light' ? false : true}
          checkedChildren={<MdDarkMode style={{ fontSize: '20px', marginRight: '5px' }} />}
          unCheckedChildren={<MdOutlineDarkMode style={{ fontSize: '20px', marginLeft: '5px' }} />}
          onChange={() => dispatch(toggleTheme())}
        />
      </div>
      <Content className='m-children'>{children}</Content>
      <Footer className='mainfooter'>
            <div className=''>
              <ul className='footer-container'>
                <div className='footer-logo'>
                  <img src={supermoneylogo} />
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
  )
}

export default MobileLayout
