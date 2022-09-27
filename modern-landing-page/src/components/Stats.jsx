import React from 'react'
import styles from '../style'
import { stats } from '../constants'




const Stats = () => {
  return (
    <section
      id="stats"
      className={`${styles.paddingY} flex md:flex-row flex-col ${styles.flexCenter}`}
    >
      
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x  divide-gray-600 ">
        {stats.map((stat) => {
          return (
            <div
              key={stat.id}
              className="flex flex-col md:flex-row  items-center  p-4 md:p-6"
            >
              <h4 className="font-poppins text-[35px] md:text-[40.89px] font-semibold md:mr-5 ">
                {stat.value}
              </h4>
              <p className="font-normal text-gradient uppercase text-[16px] md:text-[20px]">
                {stat.title}
              </p>
            </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default Stats