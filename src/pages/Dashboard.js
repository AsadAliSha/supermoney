// import SupermoneyComp from '../components/SupermoneyComp' 
// import SupermoneyComp2 from '../components/SupermoneyComp2'
// import UpiPartyComp from '../components/UpiPartyComp'
// import SupermoneyBeyondUPI from '../components/SupermoneyBeyondUPI'
// import SupermoneyFaqComp from '../components/SupermoneyFaqComp'
// import Layout from '../layout/Layout'
// import ScanandPay from '../components/ScanandPay'
// import SuperCard from '../components/SuperCard'
// import SuperDeposit from '../components/SuperDeposit'
// import SuperCash from '../components/SuperCash'

// const Dashboard = () => {
//   return <Layout active={'dashboard'}   >
//     <SupermoneyComp  />
//     <SupermoneyComp2 />
//     <ScanandPay/>
//     <UpiPartyComp />
//     <SupermoneyBeyondUPI />
//     <SuperCard/>
//     <SuperDeposit/>
//     <SuperCash/>
//     <SupermoneyFaqComp />
//   </Layout>
// }

// export default Dashboard



import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SuperCard from '../components/SuperCard';
import SuperDeposit from '../components/SuperDeposit';
import SuperCash from '../components/SuperCash';
import Layout from '../layout/Layout';
import SupermoneyComp from '../components/SupermoneyComp' 
import SupermoneyComp2 from '../components/SupermoneyComp2'
import UpiPartyComp from '../components/UpiPartyComp'
import SupermoneyBeyondUPI from '../components/SupermoneyBeyondUPI'
import SupermoneyFaqComp from '../components/SupermoneyFaqComp'
import ScanandPay from '../components/ScanandPay'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    // Create ScrollTrigger for each panel to track its position
    let tops = panels.map(panel =>
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
      })
    );

    // Pin each panel as it enters the viewport
    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

    // Create a ScrollTrigger for snapping between panels
    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          let panelStarts = tops.map((st) => st.start);
          let snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
        },
        duration: 0.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Layout active={'dashboard'}>
      <SupermoneyComp />
      <SupermoneyComp2 />
      <ScanandPay />
      <UpiPartyComp />
      <SupermoneyBeyondUPI />
      
      {/* Apply GSAP ScrollTrigger to SuperCard, SuperDeposit, and SuperCash */}
      <div className="panel">
        <SuperCard />
      </div>
      
      <div className="panel">
        <SuperDeposit />
      </div>
      
      <div className="panel">
        <SuperCash />
      </div>
      
      <SupermoneyFaqComp />
    </Layout>
  );
};

export default Dashboard;
