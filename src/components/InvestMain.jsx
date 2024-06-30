import React from "react";
import { Link } from "react-router-dom";

const InvestMain = () => {
  return (
    <div>
      <div className="max-w-[311px] mb-[32px] sm:text-center md:text-left md:mb-[64px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <h1 className="md:text-[72px] text-[42px] md:leading-[84px] leading-[56px] font-[600] text-[#0A275E]">
          Десятки <br /> стартапов на <br />
          <span className="text-[#F97A05]">одной</span> платформе
        </h1>
        <p className="md:mt-[16px] mt-2 sm:mx-auto md:mx-0 mb-[120px] text-[16px] w-[311px] md:w-[500px] md:text-[18px] text-[#7E8492] font-[500]">
          Ежемесячно отбираем лучшие стартапы из 200+ уникальных заявок и
          предлагаем их фондам и ангелам
        </p>
        <div className="flex items-center sm:justify-center md:justify-start flex-wrap gap-[32px]">
          <button>
            <Link
              to="/"
              className="text-[16px] md:text-[18px] font-[700] font-inter bg-gradient-to-r from-[#F97700] to-[#F7AA65] px-[24px] md:px-[48px] py-[16px] md:py-[24px] rounded-xl text-white"
            >
              Привлечь инвестиции
            </Link>
          </button>
          <button className="mt-[10px]">
            <Link
              to="/invest"
              className="text-[16px] md:text-[18px] font-[700] font-inter text-[#F97B07] px-[24px] md:px-[48px] py-[16px] md:py-[24px] border-[2px] border-[#EDEDED] rounded-xl"
            >
              Вы инвестор?
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestMain;
