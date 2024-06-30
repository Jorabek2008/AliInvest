import React from "react";
import Pupple from "../assets/pupple.png";
import Clock from "../assets/clock.png";
import Portfel from "../assets/portfel.png";
import Money from "../assets/money.png";
import Newspaper from "../assets/newspaper.png";
import Trophy from "../assets/trophy.png";

const Team = () => {
  return (
    <div>
      <div className="max-w-[311px] md:mb-[64px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <div className="flex items-center gap-[32px] md:mt-[128px] justify-center md:justify-between flex-wrap">
          <div className="w-[350px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
              Сотни инвесторов
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
              Активные инвесторы в поисках перспективных стартапов
            </p>
            <img
              src={Pupple}
              alt="pupple img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
          <div className="w-[350px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
            Экономия времени
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
            Умещаем долгий процесс поиска инвестиций в одном месте
            </p>
            <img
              src={Clock}
              alt="Clock img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
          <div className="w-[350px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
            Оплата за результат
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
            Вы платите лишь за финальный результат по итогам нашей работы
            </p>
            <img
              src={Portfel}
              alt="Portfel img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
          <div className="w-[350px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
            Целевая аудитория
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
            Ваш проект будет предложен инвесторам, которым он будет интересен
            </p>
            <img
              src={Money}
              alt="Money img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
          <div className="w-[350px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
            Сопровождение
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
            Составим предложение и материалы, чтобы инвестор понял все тонкости
            </p>
            <img
              src={Newspaper}
              alt="Newspaper img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
          <div className="w-[350px] cursor-pointer bg-white rounded-[10px] z-20 relative p-[24px] shadow-box group">
            <div className="absolute transition-all ease-in delay-300 bottom-[0px] left-0 bg-gradient-to-t from-[#F97700] to-[#F6AA65] h-[0px] group-hover:h-full w-full z-[-1] rounded-[10px]"></div>
            <h1 className="md:text-[40px] font-[600] leading-[48px] text-[24px] text-[#1D1E25]">
            Оптимизация усилий
            </h1>
            <p className="mt-[16px] text-[18px] group-hover:text-white delay-300 leading-8 fomt-[500] font-inter text-[#7E8492]">
            Расскажите о себе один раз, мы сделаем теплое интро десяткам инвесторов
            </p>
            <img
              src={Trophy}
              alt="Trophy img logo"
              className="mt-[24px] w-[56px] md:w-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
