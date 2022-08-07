import React from 'react'
import Layout from '../../components/Layout'
import Intro from './intro'
import MarketingStrategies from './marketing-strategies'
import WhyMarketing from './why-marketing'

function Home() {
  return (
    <Layout>
      <div className="px-32">
        <Intro />
        <MarketingStrategies />
        <WhyMarketing />
      </div >
    </Layout>
  )
}

export default Home
