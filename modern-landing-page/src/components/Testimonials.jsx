import React from 'react'
import styles from '../style'
import { feedback } from '../constants'

import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={`${styles.paddingY} ${styles.flexCenter}`}
    >
      <div className="flex flex-col flex-1">
        {/* top part */}
        <div className="flex md:flex-row flex-col">
          <h2 className=" text-[34px] md:text-[48px] font-poppins font-semibold max-w-[500px] ">
            What people are saying about us
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mt-5 md:mb-10`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
          
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5  h-[80%] mt-10 md:mt-10 ">
          {feedback.map((i) => (
            <FeedbackCard 
              key={i.id}
              content={i.content}
              img={i.img}
              name={i.name}
              title={i.title}
            />
          ))}
          
        </div>
        
      </div>
    </section>
  );
}

export default Testimonials