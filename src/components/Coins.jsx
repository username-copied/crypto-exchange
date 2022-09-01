import React from "react";
import CoinItem from "./CoinItem";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import CoinInfo from "../routes/CoinInfo";

const Coins = (props) => {
  return (
    <>
      {" "}
      <div className="flex p-4 m-4 bg-[#5a29e4] text-white uppercase items-center font-bold text-2xl rounded-md w-[70%] h[70%] mx-auto justify-around">
        <div className="mx-4 bg-[#5a29e4]">#</div>
        <div className="mx-4 bg-[#5a29e4]">Coin</div>
        <div className="mx-4 bg-[#5a29e4]">Price</div>
        <div className="mx-4 bg-[#5a29e4]">Price Change</div>
        <div className="mx-4 bg-[#5a29e4] invisible lg:visible">
          Total Volume
        </div>
        <div className="mx-4 bg-[#5a29e4] invisible lg:visible">Mkt Cap</div>
      </div>
      {props.coin.map((coin) => {
        return (
          <Link to={`/coin/${coin.id}`} element={<CoinInfo />} key={coin.id}>
            <CoinItem coin={coin} />
          </Link>
        );
      })}
    </>
  );
};

export default Coins;
