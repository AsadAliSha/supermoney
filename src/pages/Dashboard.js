import SupermoneyComp from '../components/SupermoneyComp' 
import SupermoneyComp2 from '../components/SupermoneyComp2'
import UpiPartyComp from '../components/UpiPartyComp'
import SupermoneyBeyondUPI from '../components/SupermoneyBeyondUPI'
import SupermoneyFaqComp from '../components/SupermoneyFaqComp'
import Layout from '../layout/Layout'

const Dashboard = () => {
  return <Layout active={'dashboard'}>
    <SupermoneyComp />
    <SupermoneyComp2 />
    <UpiPartyComp />
    <SupermoneyBeyondUPI />
    <SupermoneyFaqComp />
  </Layout>
}

export default Dashboard
