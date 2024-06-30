import React, { useState } from "react";
import BottomArrow from "../assets/bottomArrow.png";
import TopArrow from "../assets/topArrow.png";
import InvestorImg from "../assets/investor.png";


const Investor = () => {
  const showHiddenText = [
    {
      id: 1,
      title: "Венчурные фонды",
      description:
        "Международные и российские фонды с капиталом от $10М и до $200M. Представлены фонды с фокусом на проекты от Pre-seed стадии до Series A.",
    },
    {
      id: 2,
      title: "Бизнес-ангелы",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its ",
    },
    {
      id: 3,
      title: "Частные инвесторы",
      description:
        "It is a long established fact that a reader will be to using 'Content here, content here', making it look like readable English",
    },
    {
      id: 4,
      title: "Бизнес-Акселераторы",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    },
    {
      id: 5,
      title: "Корпоративные фонды",
      description:
        "unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];
  const [active, setActive] = useState(null);

  const handleClick = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };
  return (
    <div>
      <div className="max-w-[311px] md:mb-[64px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <h1 className="text-center text-[42px] text-[#0A275E] font-[600] leading-[56px] my-[30px] md:my-[64px] md:leading-[84px] md:text-[72px]">
          Ваши будущие инвесторы
        </h1>
        <div className="md:flex items-center justify-between">
          <div className="lg:w-[566px]">
            <div className="mt-[32px]">
              {showHiddenText.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="border-[#CCD5DF] border rounded-3xl my-[32px]"
                >
                  <div className="p-[24px] cursor-pointer flex justify-between items-center ">
                    <h1 className="text-[20px] font-[600] font-inter text-[#1D1E25]">
                      {item.title}
                    </h1>
                    <div className="">
                      {active == item.id ? (
                        <img src={TopArrow} className="w-[12px]" alt="" />
                      ) : (
                        <img src={BottomArrow} className="w-[12px]" alt="" />
                      )}
                    </div>
                  </div>

                  <div className={`p-[24px] ${active != item.id && 'hidden'} transition ease-in-out delay-150`}>
                    <p className="text-[16px] font-[400] text-[#7E8492] font-inter">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img src={InvestorImg} className="md:block hidden" alt="" />
        </div>
        <button className="mt-[5px] text-[16px] md:text-[18px] font-[700] font-inter py-[16px] md:py-[24px] md:px-[48px] px-[24px] bg-[#0A275E] rounded-2xl text-white">Привлечь инвестиции</button>
      </div>
    </div>
  );
};

export default Investor;
