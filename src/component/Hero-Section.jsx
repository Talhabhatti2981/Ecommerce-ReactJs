import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Image Imports
import appleLogo from "../assets/img/apple-logo.png";
import heroImage from "../assets/img/hero-img (2).png";

const Hero = () => {
  const [showWomenSubItems, setShowWomenSubItems] = useState(false);
  const [showMenSubItems, setShowMenSubItems] = useState(false);

  return (
    <section>
      <div className="relative h-full">
        <div className="flex flex-col lg:flex-row lg:pl-20 px-4">
          {/* Sidebar Categories */}
          <ul className="space-y-4 mt-6 lg:mt-9 font-medium text-gray-800 w-full lg:w-60">
            <div>
              {/* Woman’s Fashion */}
              <li
                onClick={() => setShowWomenSubItems(!showWomenSubItems)}
                className="flex justify-between items-center hover:text-blue-600 cursor-pointer"
              >
                <span>Woman’s Fashion</span>
                <span className="lg:block hidden">
                  {showWomenSubItems ? (
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                  )}
                </span>
              </li>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showWomenSubItems ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-6 space-y-2 text-sm text-gray-700">
                  <li className="cursor-pointer hover:text-blue-600">Dresses</li>
                  <li className="cursor-pointer hover:text-blue-600">Tops</li>
                  <li className="cursor-pointer hover:text-blue-600">Shoes</li>
                </ul>
              </div>

              {/* Men’s Fashion */}
              <li
                onClick={() => setShowMenSubItems(!showMenSubItems)}
                className="flex justify-between items-center hover:text-blue-600 cursor-pointer"
              >
                <span className="mt-5">Men’s Fashion</span>
                <span className="lg:block hidden">
                  {showMenSubItems ? (
                    <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                  )}
                </span>
              </li>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  showMenSubItems ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-6 space-y-2 text-sm text-gray-700">
                  <li className="cursor-pointer hover:text-blue-600">Shirts</li>
                  <li className="cursor-pointer hover:text-blue-600">Jeans</li>
                  <li className="cursor-pointer hover:text-blue-600">Sneakers</li>
                </ul>
              </div>
            </div>

            {/* Other Categories */}
            <li className="hover:text-blue-600"><a href="#">Electronics</a></li>
            <li className="hover:text-blue-600"><a href="#">Home & Lifestyle</a></li>
            <li className="hover:text-blue-600"><a href="#">Medicine</a></li>
            <li className="hover:text-blue-600"><a href="#">Sports & Outdoor</a></li>
            <li className="hover:text-blue-600"><a href="#">Baby’s & Toys</a></li>
            <li className="hover:text-blue-600"><a href="#">Groceries & Pets</a></li>
            <li className="hover:text-blue-600"><a href="#">Health & Beauty</a></li>
          </ul>

          {/* Vertical Divider */}
          <div className="hidden lg:block border-r border-gray-300 mx-6" />

          {/* Hero Swiper Section */}
          <div className="mt-6 lg:mt-12 w-full lg:w-[880px]">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              className="rounded-lg overflow-hidden"
            >
              {[1, 2, 3, 4].map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-black w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 gap-6 lg:gap-40 shadow-lg rounded">
                    {/* Left Content */}
                    <div className="flex flex-col items-start text-left space-y-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={appleLogo}
                          alt="Apple Logo"
                          className="h-10 w-10 lg:h-12 lg:w-12 object-contain"
                        />
                        <h1 className="text-white text-lg lg:text-xl">iPhone 14 Series</h1>
                      </div>
                      <p className="text-white text-2xl lg:text-4xl leading-snug">
                        Up to 10% <br /> off Voucher
                      </p>
                      <button className="text-white px-6 py-2 hover:underline">Shop Now →</button>
                    </div>

                    {/* Right Image */}
                    <img
                      src={heroImage}
                      alt="Hero"
                      className="h-48 lg:h-[286px] object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper Style Overrides */}
            <style>
              {`
                .swiper-pagination {
                  text-align: center;
                }
                .swiper-pagination-bullet {
                  background-color: #808080;
                  opacity: 1;
                  height: 10px;
                }
                .swiper-pagination-bullet-active {
                  background-color: red;
                  border: 0.5px solid grey;
                  border-radius: 50%;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
