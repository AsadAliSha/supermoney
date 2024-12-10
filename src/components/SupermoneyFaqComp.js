import React from 'react'
import { Collapse } from 'antd'
import { FaCaretRight } from 'react-icons/fa'

const SupermoneyFaqComp = () => {
  //   const text = `
  //   A dog is a type of domesticated animal.
  //   Known for its loyalty and faithfulness,
  //   it can be found as a welcome guest in many households across the world.
  // `

  return (
    <div className='supermoney-faq-container'>
      <div className='supermoney-faq-heading'>
        <h2>Faqs</h2>
      </div>
      <div className='collapse-container'>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIconPosition={'end'}
          expandIcon={(p) => {
            console.log(p)
            return (
              <FaCaretRight
                size='40px'
                color='#ffffff'
                className='caret caret-active'
                rotate={p.isActive ? 90 : 0}
              />
            )
          }}
          // style={{
          //   background:'blue',
          // }}
        >
          <Collapse.Panel header='What is super.money?' key='1'>
            <p
              style={{
                FontWightontSize: '20px',
                FontWight: '400',
                padding: '0px 0px 20px',
                Color: '#ADACBE',
              }}
            >
              super.money is a modern payments app designed to make paying people online faster,
              safer and simpler.
            </p>
          </Collapse.Panel>

          <Collapse.Panel header='How do I use the Scan & Pay feature to send money?' key='2'>
            <ul>
              <li
                style={{
                  FontWightontSize: '20px',
                  FontWight: '400',
                  padding: '0px 0px 20px',
                  Color: '#ADACBE',
                  width: '100%',
                  margin: 'auto',
                }}
              >
                Tap the QR icon on the top left corner of the Pay screen
              </li>
              <li
                style={{
                  FontWightontSize: '20px',
                  FontWight: '400',
                  padding: '0px 0px 20px',
                  Color: '#ADACBE',
                  width: '100%',
                  margin: 'auto',
                }}
              >
                Enter the amount you wish to send
              </li>
              <li
                style={{
                  FontWightontSize: '20px',
                  FontWight: '400',
                  padding: '0px 0px 20px',
                  Color: '#ADACBE',
                  width: '100%',
                  margin: 'auto',
                }}
              >
                Add a payment note (if required)
              </li>
              <li
                style={{
                  FontWightontSize: '20px',
                  FontWight: '400',
                  padding: '0px 0px 20px',
                  Color: '#ADACBE',
                  width: '100%',
                  margin: 'auto',
                }}
              >
                Select the bank account you want to pay from
              </li>
              <li
                style={{
                  FontWightontSize: '20px',
                  FontWight: '400',
                  padding: '0px 0px 20px',
                  Color: '#ADACBE',
                  width: '100%',
                  margin: 'auto',
                }}
              >
                Enter your UPI PIN Wait for payment confirmation
              </li>
            </ul>
          </Collapse.Panel>

          <Collapse.Panel header='What is UPI? How does it enable bank-to-bank transfer?' key='3'>
            <p
              style={{
                FontWightontSize: '20px',
                FontWight: '400',
                padding: '0px 0px 20px',
                Color: '#ADACBE',
              }}
            >
              Unified Payments Interface (UPI) is a real-time payment system that facilitates
              instantaneous inter-bank transactions via mobile phones. UPI is developed by the
              National Payments Corporation of India (NPCI) and regulated by the Reserve Bank of
              India. UPI uses IMPS (Immediate Payment Service) for transferring funds from one
              account to another.
            </p>
          </Collapse.Panel>

          <Collapse.Panel header='How do I know I can trust super.money with my payments?' key='4'>
            <p>
              Credibility, security and trust are at the core of what we’ve built. We are recognized
              and approved by the National Payments Corporation of India (NPCI) and you can verify
              the same on NPCI’s website. We’ve also partnered with Yes Bank, an RBI-recognized
              bank, for our UPI services and meet the highest compliance, security, and quality
              standards for payments apps.
            </p>
          </Collapse.Panel>

          <Collapse.Panel
            header='Do I have to pay anything to create a super.money account and use super.money?'
            key='5'
          >
            <p>
              No. super.money is completely free and we will never ask you to pay anything to set up
              a super.money account or to use super.money to send money to people, merchants or bank
              accounts.
            </p>
          </Collapse.Panel>

          <Collapse.Panel header='How can I contact super.money for UPI Support?' key='6'>
            {/* <FaCaretRight
                size='30px'
                color='#ffffff'
                className='caret caret-active'
                // rotate={p.isactive ? 90 : 0}
                /> */}
            <div className='.ant-collapse-item '>
              <p>
                Go to ‘Profile’ → Click on the relevant FAQ → If your query isn’t resolved by the
                FAQ, click on ‘Contact support’ at the bottom of the FAQ answer Alternatively, you
                can contact us at support@super.money to escalate any existing complaints or support
                tickets, and we will do our best to ensure a quick resolution.
              </p>
            </div>
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default SupermoneyFaqComp
