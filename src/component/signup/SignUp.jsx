import { FcGoogle } from "react-icons/fc";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Homes from "../login/Homes";

const SignUp = () => {
  return (
    <div>
      <Homes />
      <div className="flex gap-29 mb-20">
        <div className="mt-12">
          <img
            src="src/assets/img/mobile-cart.png"
            alt=""
            width={700}
            className="h-175"
          />
        </div>
        <div>
          <h1 className="text-4xl font-semibold mt-27">Create an account</h1>
          <p className="pt-5 font-semibold">Enter your details below</p>
          <form action="">
            <div>
              <input
                type="text"
                name=""
                id=""
                className=" border-b border-[#808080] w-100 mt-10 p-2 focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                className=" border-b border-[#808080] w-full mt-10 p-2 focus:outline-none"
                placeholder="Email or Phone Number"
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                className=" border-b border-[#808080] w-full mt-10 p-2 focus:outline-none"
                placeholder="Password"
              />
            </div>
          </form>
          <div className="mt-10 flex justify-center">
            <button className="bg-[#DB4444] cursor-pointer  h-14 text-white w-full hover:bg-red-600">
              Create Account
            </button>
          </div>
          <div className="mt-3 flex justify-center">
            <button className="bg-transparent cursor-pointer border border-black h-14 text-black w-full flex items-center justify-center gap-3">
              <FcGoogle className="text-2xl" />
              Sign up with Google
            </button>
          </div>
          <div className="flex gap-4 mt-4 justify-center ">
  <h1>Already have an account?</h1>
  <Link to="/login" className="hover:underline">
    <p>Login</p>
  </Link>
</div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
