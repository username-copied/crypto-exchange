import React from "react";
import Logo from "../assets/blockchain.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">
        <div className="flex justify-center items-center bg-[#5a29e4] w-[80%] mx-auto my-[50px] rounded-md h-[100px]">
          <img className="h-[80px] bg-[#5a29e4]" src={Logo} alt="Logo" />
          <h1 className=" text-2xl text-white font-bold bg-[#5a29e4]">
            CryptoLive
          </h1>
        </div>
      </Link>
    </>
  );
};

export default Navbar;
