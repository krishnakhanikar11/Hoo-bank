import React from "react";
import styles from "../style";
import Button from "./Button";
import { features } from "../constants/index";

const FeatureCard = ({ id, icon, title, content }) => {
  return (
    <div
      key={id}
      className="flex flex-row p-6  rounded-[20px] feature-card"
    >
    <div className={`${styles.flexCenter}  w-[64px] h-[64px] rounded-full bg-dimBlue`}><img src={icon} alt="id" className="w-[50%] h-[50%] object-contain"/></div>
      

      <div className="flex flex-col ml-6">
        <h4 className="font-poppins font-semibold text-[16px]">{title}</h4>
        <p className="flex max-w-[400px] md:max-w-[470px] mt-1 font-normal text-[14px] md:text-[16px] text-dimWhite font-poppins">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section
      id="business"
      className={`${styles.paddingY} flex md:flex-row flex-col `}
    >
      {/* left div */}
      <div className="flex flex-1 flex-col">
        <h2 className=" text-[34px] md:text-[48px] font-poppins font-semibold max-w-[600px]">
          You do the business, we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} flex max-w-[600px] mt-5 mb-10`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>

      {/* right div */}
      <div className="grid grid-cols-1 gap-5  h-[80%] mt-10 md:mt-0 ">
        {features.map((feature,index) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
