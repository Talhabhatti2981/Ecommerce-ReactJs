// Component Imports
import Footer from "../Footer";
import Homes from "./Homes";

// Image Import
import MobileCartImage from "../../assets/img/mobile-cart.png";

const Login = () => {
  return (
    <div>
      <Homes />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-29 mb-20">
        {/* Image Section */}
        <div className="mt-12 flex justify-center lg:justify-start">
          <img
            src={MobileCartImage}
            alt="Mobile Cart"
            width={700}
            className="h-auto max-w-full"
          />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-auto mt-10 lg:mt-67">
          <h1 className="text-3xl lg:text-4xl font-semibold text-center lg:text-left">
            Log in to Exclusive
          </h1>
          <p className="pt-4 font-semibold text-center lg:text-left">
            Enter your details below
          </p>

          <form className="w-full max-w-md mt-6 mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b w-full p-2 mt-10 mb-6 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b w-full p-2 mt-7 mb-6 focus:outline-none"
            />
            <div className="flex flex-col sm:flex-row justify-between items-center pt-5 gap-4">
              <button className="w-full cursor-pointer sm:w-36 bg-[#DB4444] text-white h-12 rounded-sm hover:bg-red-600 transition">
                Login
              </button>
              <p className="text-[#DB4444] hover:underline text-center sm:text-right">
                <a href="">Forgot Password</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
