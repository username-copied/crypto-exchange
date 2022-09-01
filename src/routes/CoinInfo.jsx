import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const CoinInfo = (props) => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="text-white">{coin.name}</h1>
      <img src={coin.image.small} alt={coin.name} />
    </>
  );
};

export default CoinInfo;
