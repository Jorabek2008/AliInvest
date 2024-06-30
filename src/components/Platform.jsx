import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Partner1 from "../assets/partner1.png";
import Partner2 from "../assets/partner2.png";
import Partner3 from "../assets/partner3.png";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Platform = () => {
  const swiperButton = useSwiper();
  return (
    <div>
      <div className="max-w-[311px] md:mb-[64px] sm:max-w-[640px] md:max-w-[750px] lg:max-w-[1000px] xl:max-w-[1167px] mx-auto">
        <h1 className="text-center text-[42px] text-[#0A275E] font-[600] leading-[56px] my-[30px] md:my-[64px] md:leading-[84px] md:text-[72px]">
          На нашей платформе?
        </h1>
        <div className="md:flex items-center justify-center gap-[32px]">
          <div className="md:w-[367px] md:mt-0 mt-[32px] w-full text-center font-[600]">
            <h1 className="md:text-[56px] text-[48px] text-[#F97B07]">80+</h1>
            <h3 className="md:text-[18px] text-[16px] font-[600]">Cтартапов</h3>
            <p className="mt-2 text-[14px] md:text-[16px]  text-[#7E8492] font-[500]">
              Присоединились к Angel Invests в поиске финансирования
            </p>
          </div>
          <div className="md:w-[367px] md:mt-0 mt-[32px] w-full text-center font-[600]">
            <h1 className="md:text-[56px] text-[48px] text-[#F97B07]">30+</h1>
            <h3 className="md:text-[18px] text-[16px] font-[600]">
              Новых проектов
            </h3>
            <p className="mt-2 text-[14px] md:text-[16px]  text-[#7E8492] font-[500]">
              Ежемесячно подключается к нам для получения помощи в привлечении
              инвестиций
            </p>
          </div>
          <div className="md:w-[367px] md:mt-0 mt-[32px] w-full text-center font-[600]">
            <h1 className="md:text-[56px] text-[48px] text-[#F97B07]">100+</h1>
            <h3 className="md:text-[18px] text-[16px] font-[600]">
              Инвесторов
            </h3>
            <p className="mt-2 text-[14px] md:text-[16px]  text-[#7E8492] font-[500]">
              Сотрудничает с нами и доверяет в подборе перспективных проектов
            </p>
          </div>
        </div>
        <h1 className="text-center text-[42px] text-[#0A275E] font-[600] leading-[56px] my-[30px] md:my-[64px] md:leading-[84px] md:text-[72px]">
          Наши партнеры
        </h1>
        <Swiper
          spaceBetween={50}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={Partner1} alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Partner2} alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Partner3} alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Partner1} alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Partner2} alt="logo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Partner3} alt="logo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Platform;
