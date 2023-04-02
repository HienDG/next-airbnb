import React, { useCallback } from "react";
import { signIn } from "next-auth/react";

import { AiOutlineClose, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@components/ui";

import { useAppDispatch } from "@src/hooks";

import { closeModal } from "@src/app/modalSlice";

const AuthModal = () => {
  const dispatch = useAppDispatch();

  const closeAuthModal = useCallback(() => {
    dispatch(closeModal("auth"));
  }, [dispatch]);
  return (
    <section className="fixed inset-0 flex items-center w-full h-full bg-black/40 z-1000 ">
      <div className="max-w-[568px] w-full max-h-[640px] h-full bg-white mx-auto rounded-3xl shadow-sm overflow-hidden relative flex flex-col">
        <Button
          className="absolute block p-2 transition-colors duration-100 bg-transparent rounded-full outline-none top-4 left-6 hover:bg-neutral-200"
          onClick={closeAuthModal}
        >
          <AiOutlineClose size={20} />
        </Button>

        <header className="border-b border-solid border-b-[#EBEBEB] px-6 flex min-h-[64px] items-center justify-center">
          <h1 className="text-lg font-medium">Log in or sign up</h1>
        </header>

        <div className="flex-1 p-6">
          <div>
            <div className="mt-2 mb-6">
              <h3 className="text-[22px] leading-[26px] text-gray-700 font-semibold mb-2">
                Welcome to Airbnb
              </h3>
            </div>

            <form className="[&>input]:block">
              <input
                type="text"
                className="w-full p-4 pl-5 mb-3 border border-solid rounded-lg border-neutral-300"
                placeholder="Enter your Email"
              />

              <input
                type="text"
                className="w-full p-4 pl-5 mb-3 border border-solid rounded-lg border-neutral-300"
                placeholder="Enter your Password"
              />

              <div className="mt-2 text-xs font-normal leading-4 text-gray-600">
                We'll call or text you to confirm your number. Standard message and data rates
                apply.{" "}
                <span className="block font-bold underline cursor-pointer">Privacy Policy</span>
              </div>

              <button className="w-full mt-4 py-[14px] px-6 mb-6 rounded-lg text-white bg-rose-600">
                Continue
              </button>
            </form>

            <div className="relative w-full my-4 text-xs leading-4">
              <div className="flex items-center justify-center my-4 bg-white">
                <span className="z-10 px-4 bg-white">or</span>
              </div>
              <span className="block top-2 w-full absolute h-[1px] border border-solid border-[#ddd]"></span>
            </div>

            <div className="flex flex-wrap justify-between [&>button]:w-full [&>button]:mb-4">
              <Button className="flex border border-[#222] border-solid py-[13px] px-[23px] cursor-pointer hover:bg-[#ddd] transition-colors duration-100 ease-out rounded-lg items-center">
                <AiFillFacebook className="fill-blue-600" size={20} />
                <span className="flex-1">Continue with Github</span>
              </Button>

              <Button
                className="flex border border-[#222] border-solid py-[13px] px-[23px] cursor-pointer hover:bg-[#ddd] transition-colors duration-100 ease-out rounded-lg items-center"
                onClick={() => signIn("google")}
              >
                <FcGoogle size={20} />
                <span className="flex-1">Continue with Google</span>
              </Button>

              <Button
                className="flex border border-[#222] border-solid py-[13px] px-[23px] cursor-pointer hover:bg-[#ddd] transition-colors duration-100 ease-out rounded-lg items-center"
                onClick={() => signIn("github")}
              >
                <AiFillGithub size={20} />
                <span className="flex-1">Continue with Github</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthModal;
