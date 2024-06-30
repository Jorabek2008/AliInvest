import React from "react";

const InvestStartup = () => {
  return (
    <div className="max-w-[311px] md:mb-[64px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
      <h1 className="text-center text-[42px] text-[#0A275E] font-[600] leading-[56px] my-[30px] md:my-[64px] md:leading-[84px] md:text-[72px]">
      Профиль наших стартапов
      </h1>
      <div className="md:flex justify-center gap-[32px]">
        <div className="md:w-[367px] md:mt-0 mt-[32px] w-[311px] mx-auto font-[600]">
          <h1 className="md:text-[40px] text-[24px] font-[600] font-inter md:leading-[48px]">
            Объемы инвестиций
          </h1>
          <hr className="my-[16px] border-[#F97B07] border-[2px]" />
          <p className="text-[18px] text-[#7E8492] font-[600] font-inter">
            <span className="text-[#F97B07]">Pre-seed:</span> $200-500K
          </p>
          <p className="text-[18px] text-[#7E8492] font-[600] my-[16px] font-inter">
            <span className="text-[#F97B07]">Pre-seed:</span> до $1М
          </p>
          <p className="text-[18px] text-[#7E8492] font-[600] font-inter">
            <span className="text-[#F97B07]">Pre-seed:</span> до $5M
          </p>
        </div>
        <div className="md:w-[367px] md:mt-0 mt-[32px] w-[311px] mx-auto font-[600]">
          <h1 className="md:text-[40px] text-[24px] font-[600] font-inter md:leading-[48px]">
            Индустрии
          </h1>
          <hr className="my-[16px] border-[#F97B07] border-[2px]" />
          <p className="text-[18px] text-[#7E8492] font-[600] font-inter">
            Мы смотрим только IT стартапы.
          </p>
          <button className="bg-[#0A275E] mt-[24px] py-[16px] px-[24px] text-[16px] font-[700] rounded-3xl text-white font-inter">
            Подробнее
          </button>
        </div>
        <div className="md:w-[367px] md:mt-0 mt-[32px] w-[311px] mx-auto font-[600]">
          <h1 className="md:text-[40px] text-[24px] font-[600] font-inter md:leading-[48px]">
            Дополнительно
          </h1>
          <hr className="my-[16px] border-[#F97B07] border-[2px]" />
          <p className="text-[18px] text-[#7E8492] font-[600] font-inter">
            <span className="text-[#F97B07]">Обязательно:</span> наличие как
            минимум первой выручки
          </p>
          <p className="text-[18px] text-[#7E8492] font-[600] my-[16px] font-inter">
            <span className="text-[#F97B07]">Желательно:</span> выход на
            зарубежный рынок в течение следующего года
          </p>
          <p className="text-[18px] text-[#7E8492] font-[600] font-inter">
            <span className="text-[#F97B07]">Отлично:</span> наличие
            международной выручки
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestStartup;
