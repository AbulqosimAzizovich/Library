import React from "react";
import Google from "../../assets/icons/google.svg";
import Facebook from "../../assets/icons/facebook.svg";
import "./style.scss";

const SignIn = () => {
  return (
    <>
      <section className=" bg-transparent flex justify-center items-center h-screen">
        <div className="w-full mx-auto  shadow rounded-[12px] py-[48px] px-[28px] dark:border md:mt-0 sm:max-w-md xl:p-0 bg-white">
          <p className="flex items-center justify-center mt-12 mb-6  text-2xl font-bold font-[Mulish-Bold] text-gray-900 ">
            Sign In
          </p>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="cursor-pointer flex items-center justify-center gap-4 px-6 py-[10px] rounded border-[1px] border-[#000]">
                <img src={Google} alt="Google" />
                <p>Continue with Google</p>
              </div>
              <div className=" cursor-pointer flex items-center justify-center gap-4 px-6 py-[10px] rounded border-[1px] border-[#000]">
                <img src={Facebook} alt="Facebook" />
                <p>Continue with Facebook</p>
              </div>
            </div>
            <p className=" text-center border-y">OR</p>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="text"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label for="terms" className="font-light text-gray-500">
                    I accept the{" "}
                    <a
                      className="font-medium text-blue-600 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
