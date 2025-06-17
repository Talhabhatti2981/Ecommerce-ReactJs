import React from "react";

// Import images
import fastDelivery from "../assets/img/fast-delivery.png";
import services from "../assets/img/services.png";
import guarantee from "../assets/img/garuntee.png";

const Delivery = () => {
  return (
    <section className="mb-20">
      <div className="mt-20 flex flex-col md:flex-row justify-evenly items-center">
        <div className="text-center mb-8 md:mb-0">
          <img src={fastDelivery} alt="Fast Delivery" className="mx-auto" />
          <h1 className="mt-7 text-xl font-semibold">FREE AND FAST DELIVERY</h1>
          <p className="pt-2">Free delivery for all orders over $140</p>
        </div>

        <div className="text-center mb-8 md:mb-0">
          <img src={services} alt="Customer Service" className="mx-auto" />
          <h1 className="mt-7 text-xl font-semibold">24/7 CUSTOMER SERVICE</h1>
          <p className="pt-2">Friendly 24/7 customer support</p>
        </div>

        <div className="text-center mb-8 md:mb-0">
          <img src={guarantee} alt="Money Back Guarantee" className="mx-auto" />
          <h1 className="mt-7 text-xl font-semibold">MONEY BACK GUARANTEE</h1>
          <p className="pt-2">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
