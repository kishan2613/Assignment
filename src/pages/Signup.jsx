import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [agency, setAgency] = useState("yes");

  const formHandler = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center bg-[#F7F8F9] ">    
      {/* Container */}
      <div className="w-screen md:w-96 min-h-screen p-6 bg-white shadow-md flex flex-col">
        <form
          className="flex flex-col flex-grow justify-between"
          onSubmit={formHandler}
        >
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-4">
              Create your <br /> PopX account
            </h1>

            {/* Full Name */}
            <label
              htmlFor="fullName"
              className="text-sm ml-2 mt-2 mb-1 font-semibold"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              id="fullName"
              type="text"
              className="p-2 outline-none bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#6C25FF]"
            />

            {/* Phone Number */}
            <label
              htmlFor="phoneNumber"
              className="text-sm ml-2 mt-2 mb-1 font-semibold"
            >
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              id="phoneNumber"
              type="text"
              className="p-2 outline-none bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#6C25FF]"
            />

            {/* Email */}
            <label
              htmlFor="email"
              className="text-sm ml-2 mt-2 mb-1 font-semibold"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              type="email"
              className="p-2 outline-none bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#6C25FF]"
            />

            {/* Password */}
            <label
              htmlFor="password"
              className="text-sm ml-2 mt-2 mb-1 font-semibold"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              type="password"
              className="p-2 outline-none bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#6C25FF]"
            />

            {/* Company Name */}
            <label
              htmlFor="companyName"
              className="text-sm ml-2 mt-2 mb-1 font-semibold"
            >
              Company name
            </label>
            <input
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
              id="companyName"
              type="text"
              className="p-2 outline-none bg-transparent border-2 border-gray-300 rounded-lg focus:border-[#6C25FF]"
            />

            {/* Radio */}
            <p className="mt-3 mb-2 ml-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6 ml-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                  className="accent-[#6C25FF] scale-125"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                  className="accent-[#6C25FF] scale-125"
                />
                No
              </label>
            </div>
          </div>

          {/* Sticky Button */}
          <div className="mt-6 sticky bottom-0 bg-white py-2">
            <button
              type="submit"
              className="p-3 bg-[#6C25FF] text-white rounded-lg font-medium hover:bg-[#5a1ee6] w-full text-lg"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
