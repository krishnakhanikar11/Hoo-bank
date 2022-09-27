import React from 'react'
import { quotes} from '../assets'

const FeedbackCard = ({id,img,content,name,title}) => {
  return (
    <div key={id} className="feature-card rounded-xl  h-[395px] md:max-w-[370px]  pt-[40px] pb-[40px] pl-[20px] pr-[20px] md:pt-[60px] md:pb-[60px] md:pl-[40px] md:pr-[40px] flex justify-between flex-col">
            <img src={quotes} className="w-8" />
            <p
              className={`font-normal text-[14px] md:text-[16px] text-white  font-poppins  max-w-[290px] mt-5 mb-10`}
            >
              {content}
            </p>
            <div className="flex flex-row gap-5 items-center ">
              <img src={img} className="w-[48px]" />
              <div className="flex flex-col">
                <h4 className="font-normal text-xl font-poppins">{name}</h4>
                <p className="font-normal text-sm font-poppins text-dimWhite">
                  {title}
                </p>
              </div>
            </div>
          </div>
  )
}

export default FeedbackCard