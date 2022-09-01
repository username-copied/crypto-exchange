import React from "react";

const CoinItem = (props) => {
  return (
    <>
      <div className="hover:scale-125 duration-200 flex p-4 m-4 bg-[#5a29e4]  text-white uppercase  rounded-md items-center h-[70px] w-[70%] mx-auto justify-between ">
        <div className="p-4 m-4 bg-[#5a29e4]">{props.coin.market_cap_rank}</div>
        <div>
          <img
            className="h-[40px] bg-[#5a29e4]"
            src={props.coin.image}
            alt=""
          />
          {/* <p className="mx-8">{props.coin.toUpperCase}</p> */}
        </div>
        <div className="p-4 m-4 bg-[#5a29e4]">
          ${props.coin.current_price.toLocaleString()}
        </div>
        <div className="p-4 m-4 bg-[#5a29e4]">
          {props.coin.price_change_percentage_24h.toFixed(2)}
        </div>
        <div className="invisible lg:visible p-4 m-4 bg-[#5a29e4]">
          {props.coin.total_volume.toLocaleString()}
        </div>
        <div className="invisible lg:visible p-4 m-4 bg-[#5a29e4]">
          {props.coin.market_cap.toLocaleString()}
        </div>
      </div>
    </>
  );
};

export default CoinItem;
