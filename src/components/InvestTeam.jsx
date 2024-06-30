import React from "react";
import Share from "../assets/share.png";
import Qol from "../assets/ruka.png";
import Search from "../assets/search.png";
import PulKotarilishi from "../assets/money1.png";
import Money2 from "../assets/money2.png";

const InvestTeam = () => {
  return (
    <div>
      <div className="max-w-[311px] md:mb-[64px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <div className="flex items-center gap-[32px] md:mt-[128px] justify-center md:justify-between flex-wrap">
          <div className="w-[350px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
              Десятки проектов
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
              Еженедельно просматриваем десятки новых проектов и предлагаем
              лучшие из них
            </p>
            <img
              src={Share}
              alt="pupple img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
          <div className="w-[350px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
              Личные предложения
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
              Вы будете получать предложения, соответствующие вашим
              предпочтениям
            </p>
            <img
              src={Qol}
              alt="Clock img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
          <div className="w-[350px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
              Тщательный отбор
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
              Подробно анализируем все входящие заявки и оставляем лишь
              перспективные проекты
            </p>
            <img
              src={Search}
              alt="Portfel img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
          <div className="w-[567px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
              Фокус на результат
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
              Стартапы платят только за финальный результат по итогам нашей
              работы
            </p>
            <img
              src={PulKotarilishi}
              alt="Money img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
          <div className="w-[567px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
              Совместное вложение
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
              При необходимости мы подберем вам партнеров, чтобы совместно
              закрыть раунд
            </p>
            <img
              src={Money2}
              alt="Newspaper img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestTeam;
