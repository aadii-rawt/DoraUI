import React from "react";
import { FaCheck, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

type PropType = {
  setShowSigninModal : React.Dispatch<React.SetStateAction<boolean>>
}

const SignupModal : React.FC<PropType> = ({setShowSigninModal }) => {

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setShowSigninModal(false)}>
      <div   onClick={(e) => e.stopPropagation()} className="bg-gradient-to-br from-[#1f1c3d] to-[#0d1117] rounded-2xl shadow-xl relative w-full max-w-xl px-20 py-8 overflow-hidden text-white">
        {/* Close Button */}
        <button
          onClick={() => setShowSigninModal(false)}
          className="absolute top-5 right-4 text-white text-xl"
        >
         <RxCross2 />
        </button>

        {/* Astro Icon */}
        <img
          src="https://uiverse.io/assets/astronaut-LQ_BQU63.png" // Replace with the actual image or use <img> from the UI
          alt="astro"
          className="absolute -top-0 -left-14 w-36"
        />

        {/* Title */}
        <h2 className="text-3xl font-bold mb-2 text-center">Join the Community</h2>
        <p className="text-center text-lg font-semibold text-gray-300 mb-6">
          Create beautiful UI elements and share them <br /> with 100,000+ developers
        </p>

        {/* Features */}
        <ul className="text-sm text-gray-400 space-y-2 mb-6 flex   items-center flex-col">
          <li className="flex items-center gap-2"><FaCheck className="text-purple-500" /> Create and share unlimited UI elements</li>
          <li className="flex items-center gap-2"><FaCheck className="text-purple-500" /> Get inspiration from thousands of designs</li>
          <li className="flex items-center gap-2"><FaCheck className="text-purple-500" /> Join a thriving community of creators</li>
        </ul>

        {/* Auth Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 bg-secondary px-4 py-2.5 rounded-md text-white  font-medium transition">
            <FaGithub /> Continue with GitHub
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-secondary px-4 py-2.5 rounded-md text-white  font-medium transition">
            <FcGoogle /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-secondary px-4 py-2.5 rounded-md text-white  font-medium transition">
            <FaXTwitter /> Continue with X
          </button>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-400 text-center mt-6">
          By continuing, you agree to our <span className="underline">Terms</span> and{" "}
          <span className="underline">Privacy Policy</span>
        </p>

        <p className="text-xs text-gray-400 text-center mt-2">
          Already have an account? <span className="text-blue-400 underline cursor-pointer">Sign in</span>
        </p>
      </div>
    </div>, document.getElementById("portal")
  );
};

export default SignupModal
