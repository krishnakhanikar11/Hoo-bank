import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    /* main section containing 2 div[left,right] with one w-full div on the top */
    <section
      id="home"
      className={`${styles.paddingY} flex md:flex-row flex-col`}
    >
      {/* left div  */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* top w-full div  */}
        <div className="flex flex-row bg-discount-gradient items-center rounded-[10px] mb-2 px-4 py-[6px]">
          <img src={discount} className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white ">20% </span>
            Discount For <span className="text-white "> 1 Month </span>
            Account
          </p>
        </div>

        {/* heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`${styles.heading2}`}>
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Generation</span>
            <br /> Payment Method.
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} flex max-w-[470px] mt-5 mb-10`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* right div */}
      <div>
        <img src={robot} className="w-[620px] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient " />
      </div>
    </section>
  );
};

export default Hero;
