import React from 'react'
import Layout from '../../components/Layouts/Layout'
import '../../styles/HomeStyle.css'
import Section01 from './Section01'
import Section02 from './Section02'
import Section03 from './Section03'
import Section04 from './Section04'
import Section05 from './Section05'
import Section06 from './Section06'
import Section07 from './Section07'

const Home = () => {
  return (
    <Layout>
     {/* Home Section Hero Banner */}
     <Section01 />


     {/* Home Section About */}
     <Section02 />


     {/* Home Section Menu */}
     <Section03 />

     {/* Home Section Promotion */}
     <Section04 />


     {/* Home Section Shop */}
     <Section05 />


     {/* Home Section Blog */}
     <Section06 />


     {/* Home Section Contact */}
     <Section07 />
    </Layout>
  )
}

export default Home
