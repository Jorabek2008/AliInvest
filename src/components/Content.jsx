import React from "react";
import ContentLogo from "../assets/content.png"

const Content = () => {
  return (
    <div>
      <div className="w-full my-[64px] bg-[#FFF9F4] sm:max-w-[640px] rounded-2xl md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <div className="flex items-center">
          <div className="xl:p-[80px] p-[10px] max-w-[311px] sm:max-w-[640px] md:max-w-auto mx-auto my-[56px] md:my-0">
            <h1 className="text-[32px] md:text-[48px] font-[600] font-inter leading-[38px]  md:leading-[57px]">Мы открыты к сотрудничеству</h1>
            <p className="mt-[16px] text-[16px] font-[500] font-inter text-[#7E8492]">
              Если вы вовлечены в венчурный рынок (но не стартап или инвестор),
              напишите нам. Мы будем рады найти точки общего взаимодействия.
            </p>
            <button className="mt-[40px] text-[16px] md:text-[18px] font-[700] font-inter py-[16px] md:py-[24px] px-[24px] md:px-[48px] text-white bg-[#F97A05] rounded-[15px]">Написать</button>
          </div>
          <img src={ContentLogo} className="mt-[-47px] sm:w-[40%] md:w-[60%] lg:w-[362px] md:block hidden" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Content;
