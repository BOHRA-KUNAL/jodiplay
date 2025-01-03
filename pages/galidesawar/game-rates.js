import React, { useEffect, useState } from "react";
import GameRates from "../game-rates";
import ApiClient from "@/api/apiClient";
import Loader from "@/components/Loader";

function GaliGameRates() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const galiGameRateList = () => {
    setLoading(true);
    ApiClient.galidisswarGameRates()
      .then((res) => {
        setLoading(false);
        setData(res?.data?.game_rates || []);
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
  };

  useEffect(() => {
    galiGameRateList();
  }, []);

  return (
    <div>
      <GameRates data={data} />
      <Loader show={loading} />
    </div>
  );
}

export default GaliGameRates;
