import React from 'react';

import sellerImg from "../../assets/img/seller.png";
import productSaleImg from "../../assets/img/product-sale.png";
import customerActiveImg from "../../assets/img/coustomer-active.png";
import grossSaleImg from "../../assets/img/gross-sale.png";

const Sale = () => {
  return (
    <section className='mb-30'>
      <div className="flex flex-wrap mt-[200px] justify-center gap-6 p-8">
        <div className="w-64 h-55 border border-gray-300 rounded-sm shadow-md p-6 flex flex-col items-center text-center hover:bg-[#DB4444] duration-300">
          <img
            src={sellerImg}
            alt="Seller"
            className="w-20 h-20 object-contain mb-4"
          />
          <h1 className="font-bold text-3xl text-black mb-2">10.5k</h1>
          <p className="text-black text-sm">Sellers active on our site</p>
        </div>

        <div className="w-64 border border-gray-300 rounded-sm shadow-md p-6 flex flex-col items-center text-center hover:bg-[#DB4444] duration-300">
          <img
            src={productSaleImg}
            alt="Product Sale"
            className="w-20 h-20 object-contain mb-4"
          />
          <h1 className="font-bold text-3xl text-black mb-2">33k</h1>
          <p className="text-black text-sm">Monthly product sales</p>
        </div>

        <div className="w-64 border border-gray-300 rounded-sm shadow-md p-6 flex flex-col items-center text-center hover:bg-[#DB4444] duration-300">
          <img
            src={customerActiveImg}
            alt="Customer Active"
            className="w-20 h-20 object-contain mb-4"
          />
          <h1 className="font-bold text-3xl text-black mb-2">45.2k</h1>
          <p className="text-black text-sm">Visitors every month</p>
        </div>

        <div className="w-64 border border-gray-300 rounded-sm shadow-md p-6 flex flex-col items-center text-center hover:bg-[#DB4444] duration-300">
          <img
            src={grossSaleImg}
            alt="Gross Sale"
            className="w-20 h-20 object-contain mb-4"
          />
          <h1 className="font-bold text-3xl text-black mb-2">25k</h1>
          <p className="text-black text-sm">Customers all time</p>
        </div>
      </div>
    </section>
  );
};

export default Sale;
