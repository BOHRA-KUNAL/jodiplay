import ApiClient from "@/api/apiClient";
import { getSetData } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FundHistory = () => {
  const [info, setInfo] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchInfo = () => {
    const requestData = {
      date_from: startDate,
      date_to: endDate,
    };

    const { user_id } = getSetData("userData", false, true);

    ApiClient.fundHistory({ user_id })
      .then((res) => {
        toast.loading("Please Wait....");
        setInfo(res);
      })
      .catch((error) => {
        console.log(error, "not working");
      })
      .finally(() => {
        toast.dismiss();
      });
  };

  useEffect(() => {
    fetchInfo();
  }, [startDate, endDate]);
  const router = useRouter();

  // const router =useRouter();
  useEffect(() => {
    const checkUserToken = typeof window !== "undefined" && localStorage.getItem("token");

    if (!checkUserToken) {
      router.push("/signup");
    }
  }, []);
  return (
    <div className="container">
      <div className="text-center tb-10">
        <h3 className="gdash3">Fund History</h3>
        <span style={{ fontSize: 12 }}>Deposit and Withdraw History</span>
      </div>
      <div className="tb-10">
        <div className="tbmar-40 text-center">
          {/* <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div> */}
          <table className="table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Amount</th>
                <th>Request Number</th>
                <th>Status</th>
                <th>Payment Receipt</th>
                <th>Insert Date</th>
              </tr>
            </thead>
            <tbody>{/* Render your fund request history here */}</tbody>
          </table>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default FundHistory;
