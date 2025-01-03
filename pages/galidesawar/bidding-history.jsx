import ApiClient from "@/api/apiClient";
import Loader from "@/components/Loader";
import { getSetData } from "@/utils";
import React, { useEffect, useState } from "react";
import Bidding from "../bidding-history";

function BiddingHistory() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  let [dates, setDates] = useState({});

  const { user_id } = getSetData("userData", false, true);

  const fetchData = () => {
    let payload = { user_id, bid_from: dates.bid_from, bid_to: dates.bid_to };
    setLoading(true);
    ApiClient.galidisswarBidHistory(payload)
      .then((res) => {
        setLoading(false);
        setData(res.data.bid_data);
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
      <Bidding data={data} setDates={setDates} gali />
      <Loader show={loading} />
    </div>
  );
}

export default BiddingHistory;
