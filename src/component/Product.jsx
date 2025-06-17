import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

// ✅ Importing Product Images
import dogFoodImg from "../assets/img/dog-food.png";
import dslrImg from "../assets/img/dslr.png";
import laptopImg from "../assets/img/laptop.png";
import facewashImg from "../assets/img/facewash.png";
import electricCarImg from "../assets/img/electric-car.png";
import shoesImg from "../assets/img/shoes.png";
import gameUsbImg from "../assets/img/game-usb.png";
import jacketImg from "../assets/img/jacket.png";

// ✅ Importing Rating Star
import starImg from "../assets/img/star.png";

const Product = () => {
  const products = [
    {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: dogFoodImg,
      rating: 5,
      reviews: 65,
    },
    {
      title: "CANON EOS DSLR Camera",
      price: "$360",
      image: dslrImg,
      rating: 5,
      reviews: 65,
    },
    {
      title: "ASUS FHD Gaming Laptop",
      price: "$700",
      image: laptopImg,
      rating: 5,
      reviews: 65,
    },
    {
      title: "Curology Product Set",
      price: "$500",
      image: facewashImg,
      rating: 5,
      reviews: 65,
    },
    {
      title: "Kids Electric Car",
      price: "$960",
      image: electricCarImg,
      rating: 5,
      reviews: 65,
    },
    {
      title: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      image: shoesImg,
      rating: 5,
      reviews: 65,
    },
    {
      title: "GP11 Shooter USB Gamepad",
      price: "$660",
      image: gameUsbImg,
      rating: 5,
      reviews: 55,
    },
    {
      title: "Quilted Satin Jacket",
      price: "$660",
      image: jacketImg,
      rating: 5,
      reviews: 55,
    },
  ];

  return (
    <section className="mb-24 py-10 px-4 sm:px-6 lg:px-20">
      <div>
        <div className="flex items-center mt-12">
          <div className="w-6 h-11 bg-[#DB4444] rounded-md" />
          <h1 className="text-[#DB4444] ml-5 font-bold text-lg">
            Our Products
          </h1>
        </div>

        <div className="mt-6">
          <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl">
            Explore Our Products
          </h1>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item, index) => (
            <div key={index}>
              <div className="relative group cursor-pointer">
                <Link to="/wishlist">
                  <MdFavoriteBorder className="absolute top-5 left-[235px] w-7 h-7 bg-white rounded-full p-1 shadow" />
                </Link>
                <Link to="/">
                  <IoEyeOutline className="absolute top-16 left-[235px] w-7 h-7 bg-white rounded-full p-1 shadow" />
                </Link>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover"
                />
                <Link
                  to="/cart"
                  className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Add to Cart
                </Link>
              </div>
              <h1 className="font-semibold pt-4">{item.title}</h1>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[#DB4444] font-semibold">{item.price}</span>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <img
                    key={i}
                    src={starImg}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
                <span className="text-sm text-gray-600">({item.reviews})</span>
              </div>
              {index >= 4 && (
                <div className="relative mt-2 flex gap-1">
                  <div className="rounded-full h-4 w-4 border border-black"></div>
                  <div className="absolute top-[2px] left-[2px] right-0 bg-black cursor-pointer rounded-full h-3 w-3"></div>
                  <div className="bg-red-500 rounded-full h-4 w-4 cursor-pointer"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="text-white px-8 py-3 cursor-pointer bg-[#DB4444] hover:bg-red-500">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
