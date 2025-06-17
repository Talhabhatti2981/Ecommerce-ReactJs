import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import leftArrow from "../assets/img/left.png";
import rightArrow from "../assets/img/right.png";
import { IoEyeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

// Import product images
import coat from "../assets/img/coat.png";
import bag from "../assets/img/bag.png";
import cooler from "../assets/img/cooler.png";
import chair from "../assets/img/booksell.png";
import star from "../assets/img/star.png";

const Month = () => {
  const products = [
    { img: coat, title: 'The north coat', price: '$260', oldPrice: '$360' },
    { img: bag, title: 'Gucci duffle bag', price: '$960', oldPrice: '$1160' },
    { img: cooler, title: 'RGB liquid CPU Cooler', price: '$160', oldPrice: '$170' },
    { img: chair, title: 'S-Series Comfort Chair', price: '$360', oldPrice: '$520' },
    { img: coat, title: 'Another Coat', price: '$299', oldPrice: '$400' },
  ];

  return (
    <section className="mb-24 px-4 sm:px-6 md:px-20">
      <div>
        {/* Section Header */}
        <div className="flex items-center mt-12">
          <div className="w-6 h-11 bg-[#DB4444] rounded-md" />
          <h1 className="text-[#DB4444] ml-5 font-bold text-lg">This Month</h1>
        </div>

        {/* Title and Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-5 gap-4">
          <h1 className="font-semibold text-3xl sm:text-4xl text-center sm:text-left">
            Browse By Category
          </h1>
          <button className="text-white px-6 py-3 w-full sm:w-40 bg-[#DB4444] hover:bg-red-500">
            View All
          </button>
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-2 mt-6">
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

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          modules={[Navigation]}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-6"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer">
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded"
                  />
                  
                  {/* Wishlist and View Icons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-3">
                    <Link to="/Wishlist">
                      <MdFavoriteBorder className="w-7 h-7 bg-white rounded-full p-1 shadow hover:text-red-500" />
                    </Link>
                    <Link to="/">
                      <IoEyeOutline className="w-7 h-7 bg-white rounded-full p-1 shadow hover:text-blue-500" />
                    </Link>
                  </div>

                  {/* Add to Cart Button */}
                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Add to Cart
                  </Link>
                </div>

                {/* Product Info */}
                <h1 className="font-semibold pt-4">{product.title}</h1>
                <div className="flex gap-4 mt-2">
                  <span className="text-[#DB4444] font-semibold">{product.price}</span>
                  <span className="line-through text-gray-500">{product.oldPrice}</span>
                </div>

                {/* Ratings */}
                <div className="flex items-center gap-2 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" className="w-4 h-4" />
                  ))}
                  <span className="text-sm text-gray-600">(65)</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Month;
