import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center">
      <div className="h-full w-screen md:w-96 p-4 bg-[#F7F8F9] flex items-end border-2">
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-semibold">Welcome to PopX</h1>
          <p className="pt-3 pb-4 text-[#74777B] font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>

          {/* Create Account Button */}
          <button
            onClick={() => navigate("/signup")}
            className="text-[20px] bg-[#6C25FF] p-3 rounded-[10px] text-white font-medium mt-3"
          >
            Create Account
          </button>

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="text-[20px] bg-[#CEBAFB] p-3 rounded-[10px] text-black font-medium mt-3"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
