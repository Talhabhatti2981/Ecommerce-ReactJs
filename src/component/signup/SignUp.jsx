import { FcGoogle } from "react-icons/fc";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Homes from "../login/Homes";

// ✅ Import the image
import mobileCart from "../../assets/img/mobile-cart.png";

const SignUp = () => {
  return (
    <div>
      <Homes />
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-29 mb-20 ">
        <div className="mt-12 flex justify-center lg:justify-start">
          <img
            src={mobileCart} // ✅ Use imported image here
            alt="Mobile Cart"
            width={700}
            className="h-auto max-w-full"
          />
        </div>
        <div className="w-full lg:w-auto mt-10 lg:mt-37">
          <h1 className="text-3xl lg:text-4xl font-semibold text-center lg:text-left">
            Create an account
          </h1>
          <p className="pt-4 font-semibold text-center lg:text-left">
            Enter your details below
          </p>

          <form className="w-full max-w-md mt-6 mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Name"
              className="border-b w-full p-2 mt-10 mb-6 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b w-full p-2 mt-7 mb-6 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b w-full p-2 mt-7 mb-6 focus:outline-none"
            />
          </form>

          <div className="mt-10 flex justify-center">
            <button className="bg-[#DB4444] cursor-pointer h-14 text-white w-full hover:bg-red-600">
              Create Account
            </button>
          </div>

          <div className="mt-3 flex justify-center">
            <button className="bg-transparent cursor-pointer border border-black h-14 text-black w-full flex items-center justify-center gap-3">
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>
          </div>

          <div className="flex gap-4 mt-4 justify-center">
            <h1>Already have an account?</h1>
            <Link to="/login" className="hover:underline">
              <p>Log in</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
