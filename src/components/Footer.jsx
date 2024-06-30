import React from "react";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[311px] md:mb-[64px] sm:max-w-[640px] py-[40px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <div className="flex flex-wrap items-center justify-center md:justify-between mb-[80px]">
          <div className="flex flex-wrap items-center mr-auto gap-[20px] md:gap-[40px]">
            <h1 className="text-[22px] font-[400] font-inter text-[#F97A05]">
              Я Стартап
            </h1>
            <h1 className="text-[22px] font-[400] font-inter text-[#7E8492]">
              Я Инвестор
            </h1>
          </div>
          <img src={Logo} className="mt-[48px] sm:mt-0" alt="" />
        </div>
        <hr className="h-[2px] bg-[#7E8492]" />
        <div className="flex flex-wrap items-center justify-center md:justify-between mt-[40px]">
          <p className="text-[16px] font-[400] font-inter text-[#7E8492]">© 2023. AliInvest. Все Права Защищены.</p>
          <div className="flex flex-wrap items-center gap-[20px] md:gap-[45px]">
            <p className="text-[16px] font-[400] font-inter text-[#7E8492]">Политика конфиденциальности</p>
            <p className="text-[16px] font-[400] font-inter text-[#7E8492]">Пользовательское соглашение</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
