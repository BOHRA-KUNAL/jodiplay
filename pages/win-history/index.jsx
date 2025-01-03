import React, { useState, useEffect } from "react";
import ApiClient from "@/api/apiClient";
import { useRouter } from "next/router";
import { getDaysDifference, getMonthsDifference, getSetData } from "@/utils";
import Loader from "@/components/Loader";
import Inputbox from "@/components/common/Inputbox";
import ConditionalDownloadButton from "../ConditionalDownloadButton";

function WinHistory({ setDates, data, gali }) {
  const [winningRecords, setWinningRecords] = useState(data || []);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter();

  useEffect(() => {
    setWinningRecords(data || []);
  }, [data]);

  useEffect(() => {
    const checkUserToken = getSetData("token");
    if (!checkUserToken) {
      router.push("/signup");
    }
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      if (setDates) {
        setDates({ bid_from: startDate, bid_to: endDate });
      } else {
        fetchWinningRecords();
      }
    }
  }, [startDate, endDate]);

  useEffect(() => {
    handleDateRangeChange("today");
  }, []);

  const handleDateRangeChange = (range) => {
    let dates;
    switch (range) {
      case "today":
        dates = getDaysDifference(0);
        break;
      case "last7days":
        dates = getDaysDifference(7);
        break;
      case "last30days":
        dates = getDaysDifference(30);
        break;
      case "lastMonth":
        dates = getMonthsDifference(1);
        break;
      case "last3Months":
        dates = getMonthsDifference(3);
        break;
      default:
        break;
    }
    if (dates) {
      setStartDate(dates.startDate);
      setEndDate(dates.endDate);
    }
  };

  const fetchWinningRecords = () => {
    setLoading(true);
    const { user_id } = getSetData("userData", false, true);
    ApiClient.winHistory({ date_from: startDate, date_to: endDate, user_id })
      .then((res) => {
        setWinningRecords(res?.data?.win_data || []);
      })
      .catch((error) => {
        console.error("Error fetching Winning records:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderWinningRecords = () => {
    return winningRecords.map((item, index) => (
      <div key={index} style={{
        border: '2px solid rgb(0, 101, 158)',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px', color: 'rgb(0, 101, 158)', textAlign: 'center' }}>{item.game_name}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', fontSize: '14px' }}>
          {!gali && <div><strong style={{color: 'rgb(0, 101, 158)'}}>Session:</strong> {item.session}</div>}
          {!gali && <div><strong style={{color: 'rgb(0, 101, 158)'}}>Open Digit:</strong> {item.digits}</div>}
          <div><strong style={{color: 'rgb(0, 101, 158)'}}>{gali ? "Digit" : "Close Digit"}:</strong> {item.closedigits}</div>
          <div><strong style={{color: 'rgb(0, 101, 158)'}}>Amount:</strong> {item.amount}</div>
          <div><strong style={{color: 'rgb(0, 101, 158)'}} >Game Type:</strong> {item.pana}</div>
          <div><strong style={{color: 'rgb(0, 101, 158)'}}>Date and Time:</strong> {item.wining_date}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <ConditionalDownloadButton/>
      {/* <div className="text-center tb-10">
        <h3 className="gdash3">Winning History</h3>
      </div> */}
      <div className="tb-10">
        <div className="tbmar-40">
          <div className="d-sm-flex gap-3 mb-3">
            <Inputbox
              className="my-2 w-100"
              label="Start Date"
              type="date"
              value={startDate}
              onChange={(value) => setStartDate(value)}
            />

            <Inputbox
              className="my-2 w-100"
              label="End Date"
              type="date"
              value={endDate}
              onChange={(value) => setEndDate(value)}
            />
          </div>

          {/* <div className="d-flex gap-2 f-12 flex-wrap my-2 mb-4">
            <div className="pointer border px-2 p-1" onClick={() => handleDateRangeChange("today")}>
              Today
            </div>
            <div className="pointer border px-2 p-1" onClick={() => handleDateRangeChange("last7days")}>
              Last 7 Days
            </div>
            <div className="pointer border px-2 p-1" onClick={() => handleDateRangeChange("last30days")}>
              Last 30 Days
            </div>
            <div className="pointer border px-2 p-1" onClick={() => handleDateRangeChange("lastMonth")}>
              Last Month
            </div>
            <div className="pointer border px-2 p-1" onClick={() => handleDateRangeChange("last3Months")}>
              Last 3 Months
            </div>
          </div> */}

          {winningRecords.length === 0 ? (
            <p>No Record Found.</p>
          ) : (
            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {renderWinningRecords()}
            </div>
          )}
        </div>
      </div>
      <Loader show={loading} />
    </div>
  );
}

export default WinHistory;