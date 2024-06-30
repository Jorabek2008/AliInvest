import React, { useState } from "react";
import Coments1 from "../assets/coments1.png";
import Coments2 from "../assets/coments2.png";
import Coments3 from "../assets/coments3.png";
import Coments4 from "../assets/coments4.png";
import Coments5 from "../assets/coments5.png";
import Vergul from "../assets/vergul.png";

const InvestComments = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="max-w-[311px] md:mb-[64px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <h1 className="text-center text-[42px] text-[#0A275E] font-[600] leading-[56px] my-[30px] md:my-[64px] md:leading-[84px] md:text-[72px]">
          Что говорят о нас инвесторы и стартапы
        </h1>
        <div className="flex flex-wrap flex-col md:flex-row gap-[20px] justify-center md:justify-between">
          <div
            className={`max-w-[300px] lg:max-w-[372px] p-[24px] border border-[#EDEDED] rounded-[20px]`}
          >
            <div className="flex items-center w-full justify-between">
              <img src={Coments1} alt="logo" />
              <div className="w-[180px]">
                <h3 className="text-[16px] font-[700] font-inter">
                  Михаил Инишев
                </h3>
                <p className="mt-[2px] text-[#7E8492] text-[16px] font-[500] font-inter">
                  Основатель, Boomerangme
                </p>
              </div>
              <img src={Vergul} alt="vergul img" />
            </div>
            <p className="mt-[24px] text-[16px] text-[#7E8492] font-[500] font-inter">
              AliInvest помогли нам привлечь первый раунд инвестиций на $400k.
              Ребята взяли на себя работу по первичной коммуникации с
              инвесторами, а нас звали на встречи только с заинтересованными. В
              итоге мы сэкономили время и получили быстрый результат.
            </p>
          </div>
          <div
            className={`max-w-[300px] lg:max-w-[372px] p-[24px] ${
              show ? "block" : "hidden md:block"
            } border border-[#EDEDED] rounded-[20px]`}
          >
            <div className="flex items-center w-full justify-between">
              <img src={Coments2} alt="logo" />
              <div className="w-[180px]">
                <h3 className="text-[16px] font-[700] font-inter">
                  Сергей Дашков
                </h3>
                <p className="mt-[2px] text-[#7E8492] text-[16px] font-[500] font-inter">
                  Генеральный партнер, JointJourney
                </p>
              </div>
              <img src={Vergul} alt="vergul img" />
            </div>
            <p className="mt-[24px] text-[16px] text-[#7E8492] font-[500] font-inter">
              С командой AliInvest мы работаем по аналитике стартапов с начала
              2022. Отмечу качество: глубокая аналитика, отличная насмотренность
              по многим направлениям, оперативность. Качество и скорость работы
              на высоком уровне, все комиты всегда выполняются в срок.
            </p>
          </div>
          <div
            className={`max-w-[300px] lg:max-w-[372px] p-[24px] ${
              show ? "block" : "hidden md:block"
            } border border-[#EDEDED] rounded-[20px]`}
          >
            <div className="flex items-center w-full justify-between">
              <img src={Coments3} alt="logo" />
              <div className="w-[180px]">
                <h3 className="text-[16px] font-[700] font-inter">
                  Юрий Шишкин
                </h3>
                <p className="mt-[2px] text-[#7E8492] text-[16px] font-[500] font-inter">
                  Основатель, 24TTL
                </p>
              </div>
              <img src={Vergul} alt="vergul img" />
            </div>
            <p className="mt-[24px] text-[16px] text-[#7E8492] font-[500] font-inter">
              Взаимодействовали на стадии seed — очень оперативный подбор
              потенциальных инвесторов, в короткие сроки провели звонки и дошли
              до результата. Готов рекомендовать!
            </p>
          </div>

          {/* bottom */}

          <div
            className={`w-full md:max-w-[400px] lg:max-w-[573px] p-[24px] ${
              show ? "block" : "hidden md:block"
            } border border-[#EDEDED] rounded-[20px]`}
          >
            <div className="flex   items-center w-full justify-between">
              <img src={Coments4} alt="logo" />
              <div className="w-[390px]">
                <h3 className="text-[16px] font-[700] font-inter">
                  Федор Яковлев
                </h3>
                <p className="mt-[2px] text-[#7E8492] text-[16px] font-[500] font-inter">
                  Управляющий партнер, Startup Lab
                </p>
              </div>
              <img src={Vergul} alt="vergul img" />
            </div>
            <p className="mt-[24px] text-[16px] text-[#7E8492] font-[500] font-inter">
              Мы познакомились около года назад. Таких знакомств было много,
              однако почти все они мало к чему приводили. Работа же с AliInvest
              стала для меня чем-то новым. Четкая и понятная коммуникация,
              интересные проекты, умные вопросы. И конечно, правильные проекты,
              которые попадают в наш фокус.
            </p>
          </div>
          <div
            className={`w-full md:max-w-[400px] lg:max-w-[573px] p-[24px] ${
              show ? "block" : "hidden md:block"
            } border border-[#EDEDED] rounded-[20px]`}
          >
            <div className="flex items-center w-full justify-between">
              <img src={Coments5} alt="logo" />
              <div className="w-[390px]">
                <h3 className="text-[16px] font-[700] font-inter">
                  Эдуард Золотухин
                </h3>
                <p className="mt-[2px] text-[#7E8492] text-[16px] font-[500] font-inter">
                  Партнер, 3ED Ventures
                </p>
              </div>
              <img src={Vergul} alt="vergul img" />
            </div>
            <p className="mt-[24px] text-[16px] text-[#7E8492] font-[500] font-inter">
              Взаимодействуем с Angel Invests на протяжение двух лет. Коллеги
              занимаются формированием воронки стартапов и их аналитикой,
              прекрасно выполняют свою работу. Мы регулярно обмениваемся
              сделками.
            </p>
          </div>

          <button
            className="mt-[5px] md:hidden text-[16px] md:text-[18px] font-[700] font-inter py-[16px] md:py-[24px] md:px-[48px] px-[24px] bg-[#0A275E] rounded-2xl text-white mr-auto"
            onClick={() => setShow((a) => !a)}
          >
            Посмотреть все
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestComments;
