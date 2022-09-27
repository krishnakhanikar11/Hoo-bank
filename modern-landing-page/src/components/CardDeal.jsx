import React from 'react'
import styles from '../style'
import { layout } from '../style'
import { card } from "../assets";
import Button from './Button';

const CardDeal = () => {
  return (
    <section id="carddeal"
    className={`${layout.sectionReverse} `}>
      {/* left div */}
      <div className="flex flex-1 flex-col">
        <h2 className=" text-[34px] md:text-[48px] font-poppins font-semibold max-w-[600px]">
        Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} flex max-w-[600px] mt-5 mb-10`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean 
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>

        <Button />
        
      </div>

      {/* right div */}
      <div className={`${layout.sectionImgReverse} mb-10`}>
        <img src={card} className="w-[90%] md:w-[70%]"/>
      </div>

    </section>
  )
}

export default CardDeal