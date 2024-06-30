import React from "react";
import Navbar from "./components/Navbar";
import absoluteImg from "./assets/absolute1.png";
import InvestMain from "./components/InvestMain";
import InvestTeam from "./components/InvestTeam";
import InvestStartup from "./components/InvestStartup";
import InvestWork from "./components/InvestWork";
import Platform from "./components/Platform";
import InvestInvestor from "./components/InvestInvestor";
import InvestComments from "./components/InvestComments";
import Content from "./components/Content";
import Footer from "./components/Footer";

const Invest = () => {
  return (
    <div className="relative">
      <img
        src={absoluteImg}
        className="absolute top-[159px] right-0"
        alt="absolute img"
      />
      <Navbar />
      <InvestMain />
      <InvestTeam />
      <InvestStartup />
      <InvestWork />
      <Platform />
      <div className="max-w-[311px] md:mb-[64px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <div className="my-[64px]">
          <div className="bg-[#F97B07] rounded-3xl py-[40px]">
            <h1 className="text-[32px] md:text-[56px] font-[600] text-white font-inter leading-[38px] md:leading-[67px] text-center">
              2% <br /> Условия сотрудничества
            </h1>
            <p className="mt-[8px] text-center text-[18px] font-[500] font-inter text-[#EDEDED]">
              Стартап платит 2% от суммы привлеченных инвестиций после закрытия
              сделки.
            </p>
          </div>
        </div>
      </div>
      <InvestInvestor />
      <InvestComments />
      <Content />
      <Footer />
    </div>
  );
};

export default Invest;
