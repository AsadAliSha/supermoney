import SupermoneyComp from '../components/SupermoneyComp' 
import SupermoneyComp2 from '../components/SupermoneyComp2'
import UpiPartyComp from '../components/UpiPartyComp'
import SupermoneyBeyondUPI from '../components/SupermoneyBeyondUPI'
import SupermoneyFaqComp from '../components/SupermoneyFaqComp'
import Layout from '../layout/Layout'
import ScanandPay from '../components/ScanandPay'
import SuperCard from '../components/SuperCard'
import SuperDeposit from '../components/SuperDeposit'

const Dashboard = () => {
  return <Layout active={'dashboard'}>
    <SupermoneyComp />
    <SupermoneyComp2 />
    <ScanandPay/>
    <UpiPartyComp />
    <SupermoneyBeyondUPI />
    <SuperCard/>
    <SuperDeposit/>
    <SupermoneyFaqComp />
  </Layout>
}

export default Dashboard
