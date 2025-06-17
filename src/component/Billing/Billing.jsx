import React from "react";
import Home from "../home";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Homess from "../Wishlist/Homess";

// Import images correctly
import cartImg1 from "../../assets/img/cart-img1.png";
import cartImg2 from "../../assets/img/cart-img2.png";
import bkash from "../../assets/img/bkash.png";
import visa from "../../assets/img/visa.png";
import mscard from "../../assets/img/mscard.png";
import hindiCard from "../../assets/img/hindi-card.png";

const Billing = () => {
  return (
    <>
      <Homess />
      <section className="mt-20 px-4 md:px-20 mb-20">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 text-sm">
          <Link to="" className="text-[#808080]">Account /</Link>
          <Link to="/Account" className="text-[#808080]">My Account /</Link>
          <Link to="/Products" className="text-[#808080]">Product /</Link>
          <Link to="/cart" className="text-[#808080]">View Cart /</Link>
          <Link to="./">Checkout</Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold mb-12 mt-10">Billing Details</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Billing Form */}
          <div className="w-full lg:w-1/2">
            <form>
              {[
                { label: "First Name" },
                { label: "Company Name" },
                { label: "Street Address" },
                { label: "Apartment, floor, etc (optional)" },
                { label: "Town/City" },
                { label: "Phone Number" },
                { label: "Email Address" }
              ].map(({ label }, index) => (
                <div className="mb-6" key={index}>
                  <label className="text-[#9f9f9f] block mb-2">{label}</label>
                  <input
                    type="text"
                    className="w-full bg-[#f5f5f5] p-4 rounded-md focus:outline-none"
                  />
                </div>
              ))}

              <div className="flex items-start gap-3 mt-4">
                <input type="checkbox" className="w-5 h-5 mt-1" />
                <p className="text-sm text-[#333]">Save this information for faster check-out next time</p>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/2 p-4 md:p-6 bg-white shadow-sm rounded-md">
            {[{ img: cartImg2, name: "LCD Monitor", price: 650 },
              { img: cartImg1, name: "LCD Monitor", price: 1100 }]
              .map((item, index) => (
              <div className="flex items-center gap-4 mb-6" key={index}>
                <img src={item.img} alt="Product" className="w-20 h-20 object-cover" />
                <div className="flex justify-between w-full">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="font-semibold">${item.price}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <h1 className="text-lg font-semibold">Subtotal</h1>
              <span className="font-semibold">$1750</span>
            </div>
            <div className="border-b border-gray-300 my-3"></div>

            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Shipping</h1>
              <span className="font-semibold">Free</span>
            </div>
            <div className="border-b border-gray-300 my-3"></div>

            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">Total</h1>
              <span className="font-semibold">$1750</span>
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-4">
                <input type="radio" name="selection" className="w-5 h-5" />
                <span className="font-medium">Bank</span>
                <div className="flex gap-2 ml-auto">
                  <img src={bkash} alt="Bkash" className="w-10 h-auto" />
                  <img src={visa} alt="Visa" className="w-10 h-auto" />
                  <img src={mscard} alt="MasterCard" className="w-10 h-auto" />
                  <img src={hindiCard} alt="Hindi Card" className="w-10 h-auto" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <input type="radio" name="selection" className="w-5 h-5" />
                <span className="font-medium">Cash on delivery</span>
              </div>

              {/* Coupon Code */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border border-gray-700 px-3 py-3 w-full md:w-80 focus:outline-none"
                />
                <button className="py-[13px] px-11 rounded-sm font-semibold bg-[#DB4444] text-white hover:bg-red-500 w-full md:w-auto">
                  Apply Coupon
                </button>
              </div>

              {/* Place Order Button */}
              <button className="py-[13px] px-11 mt-6 w-full rounded-sm font-semibold bg-[#DB4444] text-white hover:bg-red-500">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Billing;
