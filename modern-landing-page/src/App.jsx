import React from 'react'
import styles from './style'
import {Navbar,Billing,CardDeal,Business,Clients,CTA,Stats,Footer,Testimonials,Hero,} from './components/index'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden text-white'>

    {/* navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero */}
    <div className={`${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* Rest section */}
    <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>


    </div>
  )
}

export default App

