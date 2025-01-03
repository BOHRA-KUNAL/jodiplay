import React, { useEffect, useState } from "react";
import WinHistory from "../win-history";
import { getSetData } from "@/utils";
import Loader from "@/components/Loader";
import ApiClient from "@/api/apiClient";

function WiningHistory() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  let [dates, setDates] = useState({});

  const { user_id } = getSetData("userData", false, true);

  const fetchData = () => {
    let payload = { user_id, bid_from: dates.bid_from, bid_to: dates.bid_to };
    setLoading(true);
    ApiClient.galidisswarWiningHistory(payload)
      .then((res) => {
        setLoading(false);
        setData(res.data.win_data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    if (dates.bid_from && dates.bid_to) {
      fetchData();
    }
  }, [dates.bid_from, dates.bid_to, user_id]);
  return (
    <div>
      <WinHistory data={data} setDates={setDates} gali />
      <Loader show={loading} />
    </div>
  );
}

export default WiningHistory;
