import React from 'react'
import styles from '../style'

const Button = () => {
  return (
    <div className={`${styles.flexCenter} max-w-[140px] h-[56px] md:max-w-[170px] cursor-pointer  md:h-[64px] bg-blue-gradient rounded-[8px] md:rounded-[10px]`}><span className='font-semibold text-black'>Get Started</span></div>
  )
}

export default Button