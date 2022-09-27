import React from 'react'
import styles from '../style'
import { layout } from '../style'
import { bill,apple,google } from "../assets";



const Billing = () => {
  return (
    <section id="billing"
    className={`${layout.section} `}>
      {/* left div */}
      <div className={`${layout.sectionImg}`}>
        <img src={bill} className="w-[90%] md:w-[70%] mb-10"/>
      </div>

      {/* right div */}
      <div className="flex flex-1 flex-col">
        <h2 className=" text-[34px] md:text-[48px] font-poppins font-semibold max-w-[600px]">
        Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} flex max-w-[600px] mt-5 mb-10`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean 
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>

        <div className='flex gap-10 '>
        <img src={apple} className="md:w-[20%] w-[30%]" />
        <img src={google} className="md:w-[20%] w-[30%]" />
        </div>
        
      </div>

    </section>
  )
}

export default Billing