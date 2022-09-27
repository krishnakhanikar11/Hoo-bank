import React from 'react'
import Button from './Button'
import styles from "../style";

const CTA = () => {
  return (
    <section id="cta"
    className={`${styles.paddingY}`}>
      <div className={`bg-black-gradient-2 grid grid-cols-1 md:grid-cols-2 rounded-[20px] ${styles.padding}  `}>
    <div className='flex flex-col md:w-[600px] gap-4'>
    <h2 className={`${styles.heading2} text-[32px] leading-[48px]`}>Let’s try our service now!</h2>
    <p className={`${styles.paragraph} text-[16px]`}>Everything you need to accept card payments and grow your business 
    anywhere on the planet.</p></div>
    

    <div className='justify-start md:justify-end  items-center flex mt-6'>
    <div className={`${styles.flexCenter} max-w-[140px] h-[56px] md:max-w-[170px] cursor-pointer  md:h-[64px] bg-blue-gradient rounded-[8px] md:rounded-[10px] flex-1`}><span className='font-semibold text-black'>Get Started</span></div>
    </div>
     
   

    </div>
    </section>
    
  )
}

export default CTA