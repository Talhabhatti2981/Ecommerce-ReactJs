import { Link } from "react-router-dom";
import Footer from "../Footer";
import Homess from "./Homess";
import wishImg1 from "../../assets/img/wish-img1.png";
import wishImg2 from "../../assets/img/wish-img2.png";
import wishImg3 from "../../assets/img/wish-img3.png";
import wishImg4 from "../../assets/img/wish-img4.png";
import wishImg5 from "../../assets/img/wish-img5.png";
import wishImg6 from "../../assets/img/wish-img6.png";
import wishImg7 from "../../assets/img/wish-img7.png";
import wishImg8 from "../../assets/img/wish-img8.png";
import star from "../../assets/img/star.png";
import { RiDeleteBin6Line } from "react-icons/ri";
 const handleDelete = (id) => {
    const updatedItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedItems);
  };
const Wishlist = () => {
  return (
    <>
      <Homess />
      <section className="px-4 sm:px-6 md:px-10">
        <div>
          <h1 className="text-[20px] sm:text-[24px] my-10 mt-35 ml-10">
            Wishlist (4)
          </h1>
          <div className="flex justify-end mb-10 lg:-mt-20 md:lg:-mt-20">
            <button className="border border-[#808080] lg:mr-10 py-2 px-6 sm:py-3 sm:px-12 font-semibold cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500">
              Move All To Bag
            </button>
          </div>

          <div className="flex  flex-wrap justify-center gap-6 mb-12">
            
            {[ 
              
              { img: wishImg1, title: "Gucci duffle bag", price: "$960", original: "$1160" },
              { img: wishImg2, title: "RGB liquid CPU Cooler", price: "$1960" },
              { img: wishImg3, title: "GP11 Shooter USB Gamepad", price: "$550" },
              { img: wishImg4, title: "Quilted Satin Jacket", price: "$750" }
            ].map((item, i) => (
              <div key={i} className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <button>
              <Link to ="">  <RiDeleteBin6Line className="absolute top-10 left-[230px] h-7 w-7 bg-white rounded-full p-1 " onClick={() => handleDelete(item.id)} /></Link>

                  </button>

                  <img src={item.img} alt={item.title} className="mx-auto" />
                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>
                <h1 className="font-medium mt-4">{item.title}</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">{item.price}</span>
                  {item.original && (
                    <span className="text-[#808080] font-medium line-through">{item.original}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mt-12 mb-10">
            <div className="flex items-center">
              <div className="w-6 h-11 bg-[#DB4444]  mt-10 rounded-md ml-10 mr-4" />
              <h1 className="text-[#DB4444] font-bold text-lg mt-10">
                Just For You
              </h1>
            </div>
            <button className="border border-[#808080] cursor-pointer font-semibold py-3 lg:mr-10 px-10 mt-4 sm:mt-0 hover:bg-red-500 hover:text-white hover:border-red-500">
              See All
            </button>
          </div>

          <div className="flex mt-40 flex-wrap justify-center gap-6 mb-16">
            {[
              { img: wishImg5, title: "ASUS FHD Gaming Laptop", price: "$960", original: "$1160" },
              { img: wishImg6, title: "IPS LCD Gaming Monitor", price: "$1160" },
              { img: wishImg7, title: "HAVIT HV-G92 Gamepad", price: "$560" },
              { img: wishImg8, title: "AK-900 Wired Keyboard", price: "$200" },
            ].map((item, i) => (
              <div key={i} className="w-full sm:w-[45%] md:w-[22%] text-center">
                <div className="relative group w-full">
                  <img src={item.img} alt={item.title} className="mx-auto" />
                  <Link
                    to="/cart"
                    className="absolute bottom-0 left-0 w-69 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm sm:text-base"
                  >
                    Add to Cart
                  </Link>
                </div>
                <h1 className="font-medium mt-2">{item.title}</h1>
                <div className="flex justify-center gap-3 mt-1">
                  <span className="text-[#db4444] font-medium">{item.price}</span>
                  {item.original && (
                    <span className="text-[#808080] font-medium line-through">{item.original}</span>
                  )}
                </div>
                <div className="flex justify-center gap-2 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <img key={j} src={star} alt="star" className="w-4 h-4" />
                  ))}
                  <h1 className="text-[#888888] font-semibold">(65)</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Wishlist;
