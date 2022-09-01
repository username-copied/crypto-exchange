import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/Coins";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CoinInfo from "./routes/CoinInfo";

function App() {
  const [coin, setCoin] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoin(response.data);
        // console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coin={coin} key={coin.id} />} />
        <Route path="/coin" element={<CoinInfo />}>
          <Route path=":coinId" element={<CoinInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
