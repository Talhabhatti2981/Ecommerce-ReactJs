import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Image imports
import phoneImg from "../assets/img/phone.png";
import computerImg from "../assets/img/computer.png";
import watchImg from "../assets/img/watch.png";
import cameraImg from "../assets/img/camera.png";
import headphoneImg from "../assets/img/head-phone.png";
import gamepadImg from "../assets/img/gamepad.png";
import leftArrow from "../assets/img/left.png";
import rightArrow from "../assets/img/right.png";

// Category data with imported images
const categories = [
  { img: phoneImg, title: "Phones" },
  { img: computerImg, title: "Computers" },
  { img: watchImg, title: "Watches" },
  { img: cameraImg, title: "Camera" },
  { img: headphoneImg, title: "HeadPhone" },
  { img: gamepadImg, title: "Gaming" },
];

const Category = () => {
  return (
    <section className="mb-24 shadow-md py-12 px-4 sm:px-6 md:px-20">
      <div>
        <div className="flex items-center">
          <div className="w-6 h-11 bg-[#DB4444] rounded-md" />
          <h1 className="text-[#DB4444] ml-5 font-bold text-lg">Category</h1>
        </div>
        <h1 className="font-semibold mt-6 text-3xl sm:text-4xl">Browse By Category</h1>
        <div className="flex justify-end mt-6 gap-2">
          <img
            src={leftArrow}
            alt="Previous"
            className="custom-prev cursor-pointer rounded-full p-3 bg-[#f5f5f5] z-20 hover:bg-gray-300"
          />
          <img
            src={rightArrow}
            alt="Next"
            className="custom-next cursor-pointer rounded-full p-3 bg-[#f5f5f5] z-20 hover:bg-gray-300"
          />
        </div>

        {/* Swiper */}
        <Swiper
          className="mt-6"
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={5}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="border border-gray-300 w-full h-36 flex flex-col items-center justify-start p-4 group hover:bg-[#DB4444] cursor-pointer transition duration-300">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-16 h-16 group-hover:filter group-hover:brightness-0 group-hover:invert transition duration-300"
                />
                <h1 className="pt-4 text-black group-hover:text-white text-center text-sm sm:text-base">
                  {category.title}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
