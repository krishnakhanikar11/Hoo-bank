import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full bg-primary flex-col`}>
        <div className={`${styles.flexStart} flex-row`}>Get <img src={arrowUp} className='ml-2'/></div>
        <div className={`${styles.flexStart} `}>Started.</div>
      </div>
    </div>
  )
}

export default GetStarted