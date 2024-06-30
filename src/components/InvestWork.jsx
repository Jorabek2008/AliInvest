import React, { useState } from "react";
import Work1 from "../assets/work1.png";
import ArrowRight from "../assets/arrow-right.png";
import FormLogo from "../assets/form.webp";

const InvestWork = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="p-[12px] md:p-0">
      <div className="max-w-[311px] md:mb-[64px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <h1 className="text-center text-[42px] text-[#0A275E] font-[600] leading-[56px] my-[30px] md:my-[64px] md:leading-[84px] md:text-[72px]">
          Как это работает?
        </h1>
      </div>
      <div className="lg:w-[937px] md:w-[690px] mx-auto rounded-2xl shadow-box2">
        {step == 1 && (
          <div className="md:flex items-center mb-[77px] md:pt-[137px] justify-center gap-[54px]">
            <img
              src={Work1}
              className="md:w-[239px] w-[70%] pt-[15px] sm:w-[40%] mb-[31px] mx-auto md:m-0"
              alt="img"
            />
            <div className="md:w-[400px] w-[256px] sm:w-[330px] mx-auto md:m-0">
              <h1 className="text-[24px] font-[600] sm:text-[28px] md:text-[40px] mb-2">
                Заполнение формы
              </h1>
              <p className="text-[18px] text-[#7E8492] font-[400] leading-[32px]">
                Удобная форма поможет первично ознакомиться с вашим проектом и
                проанализировать его
              </p>
            </div>
          </div>
        )}
        {step == 2 && (
          <div className="md:flex items-center mb-[77px] md:pt-[137px] justify-center gap-[54px]">
            <div className="md:w-[400px] w-[256px] sm:w-[330px] mx-auto md:m-0">
              <h1 className="text-[24px] font-[600] sm:text-[28px] md:text-[40px] mb-2">
                Целевая аудитория
              </h1>
              <p className="text-[18px] text-[#7E8492] font-[400] leading-[32px]">
                Ваш проект будет предложен инвесторам, которым он будет
                интересен
              </p>
            </div>
            <img
              src={Work1}
              className="md:w-[239px] w-[70%] pt-[15px] sm:w-[40%] mb-[31px] mx-auto md:m-0"
              alt="img"
            />
          </div>
        )}
        {step == 3 && (
          <div className="md:flex items-center mb-[77px] md:pt-[137px] justify-center gap-[54px]">
            <img
              src={ArrowRight}
              className="md:w-[239px] w-[70%] pt-[15px] sm:w-[40%] mb-[31px] mx-auto md:m-0"
              alt="img"
            />
            <div className="md:w-[400px] w-[256px] sm:w-[330px] mx-auto md:m-0">
              <h1 className="text-[24px] font-[600] sm:text-[28px] md:text-[40px] mb-2">
                Следующий шаг
              </h1>
              <p className="text-[18px] text-[#7E8492] font-[400] leading-[32px]">
                Перейдите к следующему шагу и заполните форму
              </p>
            </div>
          </div>
        )}
        {step == 4 && (
          <div className="md:flex items-center mb-[77px] md:pt-[137px] justify-center gap-[54px]">
            <img
              src={FormLogo}
              className="md:w-[239px] w-[70%] pt-[15px] sm:w-[40%] mb-[31px] mx-auto md:m-0"
              alt="img"
            />
            <div className="md:w-[400px] w-[256px] sm:w-[330px] mx-auto md:m-0">
              <label className="block" htmlFor="name">
                Имя <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Введите ваше имя"
                id="name"
                className="my-2 p-[10px] w-full border rounded-lg outline-none"
              />
              <label className="block" htmlFor="firstName">
                Фамилия <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Введите свою фамилию"
                id="firstName"
                className="my-2 p-[10px] w-full border rounded-lg outline-none"
              />
              <label className="block" htmlFor="email">
                Электронная почта <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Введите адрес электронной почты"
                id="email"
                className="my-2 p-[10px] w-full border rounded-lg outline-none"
              />
              <button className="mt-[40px] text-[14px] md:text-[16px] font-[700] font-inter py-[10px] md:py-[15px] px-[20px] md:px-[30px] text-white bg-[#F97A05] rounded-[15px]">
                Отправлять
              </button>
            </div>
          </div>
        )}
        <div className="mt-[58px] p-[10px] pb-[40px]">
          <div className="relative rounded-lg md:mx-[50px] w-full h-[16px]">
            <div
              className={`bg-[#F97B07] absolute top-0 transition-all ease-in-out left-0 ${
                step == 2 && "left-[20%]"
              } ${step == 3 && "left-[40%]"} ${
                step == 4 && "left-[60%]"
              } w-[30%] h-[16px] rounded-lg`}
            ></div>
          </div>
          <div className="md:flex text-center flex-row-reverse md:text-left items-center mt-[40px] flex-wrap gap-[141px] justify-center">
            <p className="text-[14px] md:hidden font-[600] text-[#7E8492] text-center">
              Шаг {step} из 4
            </p>
            <button
              onClick={() => setStep((a) => a + 1)}
              disabled={step == 4 ? true : false}
              className="text-[16px] font-[700] text-[#FDFDFD] mt-3 md:mt-0 bg-[#0A275E] py-[16px] w-[311px] md:w-auto md:px-[91px] rounded-2xl transition-all ease-in-out disabled:text-[#656669] disabled:bg-[#c1bbbb]"
            >
              Далее
            </button>
            <p className="text-[14px] hidden md:block font-[600] text-[#7E8492] text-center">
              Шаг {step} из 4
            </p>
            <button
              onClick={() => setStep((a) => a - 1)}
              className={`text-[16px] font-[700] text-[#0A275E] mt-3 md:mt-0 bg-white py-[16px] w-[311px] md:w-auto md:px-[91px] rounded-2xl transition-all ease-in-out disabled:text-[#656669] disabled:bg-[#c1bbbb]`}
              disabled={step == 1 ? true : false}
            >
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestWork;
