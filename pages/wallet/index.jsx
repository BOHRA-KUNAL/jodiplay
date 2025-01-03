import React, { useEffect, useState } from "react";
import ApiClient from "@/api/apiClient";
import Loader from "@/components/Loader";
import { addMoneyIcon, bankIcon, methodsIcon, withdrawIcon } from "@/resources/images";
import { getSetData } from "@/utils";
import Link from "next/link";
import toast from "react-hot-toast";
import ConditionalDownloadButton from "../ConditionalDownloadButton";

function Wallet() {
  const [amount, setAmount] = useState(null);
  const [holdAmount, setHoldAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fundData, setFundData] = useState([]);
  const [active, setActive] = useState(1);
  const [transactionHistory, setTransactionHistory] = useState([]);

  const { user_id } = getSetData("userData", false, true);

  useEffect(() => {
    if (user_id) {
      fetchBalance();
      fetchInfo();
      fetchHistory();
    }
  }, [user_id]);

  const fetchBalance = () => {
    setLoading(true);
    ApiClient.wallet_amount({ user_id })
      .then((res) => {
        setLoading(false);
        setAmount(res?.data?.wallet_amt || 0);
        setHoldAmount(res?.data?.hold_amt || 0);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching wallet amount:", error);
      });
  };

  const fetchInfo = () => {
    setLoading(true);
    ApiClient.fundHistory({ user_id })
      .then((res) => {
        toast.loading("Please Wait....");
        setFundData(res.data.fund_req_history);
      })
      .catch((error) => {
        console.log(error, "not working");
      })
      .finally(() => {
        setLoading(false);
        toast.dismiss();
      });
  };

  const fetchHistory = () => {
    setLoading(true);
    ApiClient.WalletHistory({ user_id })
      .then((res) => {
        toast.loading("Please Wait....");
        // console.log(res);
        setTransactionHistory(res.data.transaction_history || []);
      })
      .catch((error) => {
        console.log(error, "not working");
      })
      .finally(() => {
        setLoading(false);
        toast.dismiss();
      });
  };

  const renderBankIcon = () => {
    return (
      <div
        className="d-flex justify-content-center flex-column align-items-center pt-4 px-3 px-sm-4  px-md-5 "
        style={{ minHeight: "30vh" }}
      >
        <ConditionalDownloadButton/>
        <img src={bankIcon} style={{ maxWidth: "120px" }} />
        <div>Available Balance</div>
        <b>{amount} Pts</b>
        <div>Hold Amount: {holdAmount} Pts</div>

        <div className="boxshadow w-100 my-4 text-white p-3 px-2 px-sm-3 rounded d-flex align-items-center justify-content-around" style={{backgroundColor: '#00659e'}}>
          <Link className="walleticons" href="/add-fund">
            <div className="img">
              <img src={addMoneyIcon} />
            </div>
            <div className="chips">Add Point</div>
          </Link>
          <Link href={"/payment-methods"} className="walleticons">
            <div className="img">
              <img src={methodsIcon} />
            </div>
            <div className="chips">Add Methods</div>
          </Link>
          <Link href={"/withdraw"} className="walleticons">
            <div className="img">
              <img src={withdrawIcon} />
            </div>
            <div className="chips">Withdrawal</div>
          </Link>
        </div>
      </div>
    );
  };

  const renderTransactions = () => {
    return fundData.map((item, index) => {
      let amountSign = '+';
      let amountColor = '#28a745';
      let statusText = 'Approved';

      if (item.request_status === '0') {
        amountSign = '';
        amountColor = '#00659E';
        statusText = 'Pending';
      } else if (item.request_status === '1') {
        amountSign = '';
        amountColor = '#dc3545';
        statusText = 'Rejected';
      }

      return (
        <div className="border p-3 mb-3" key={index}>
          <div className="heading">Transaction ID: {item.request_number}</div>
          <div className="d-flex justify-content-between">
            <div style={{fontWeight: 'bold'}} className="f-13">Status: {statusText} - {item.insert_date} </div>
            <div className="heading" style={{ color: amountColor }}>
              {amountSign} ₹{item.request_amount}
            </div>
          </div>
        </div>
      );
    });
  };

  const renderHistory = () => {
    return transactionHistory.map((item) => (
      <div className="border p-3 mb-3" key={item.transaction_id}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="flex-grow-1">
            {/* Transaction ID */}
            <div className="heading">Transaction ID: {item.tx_request_number}</div>
  
            {/* Transaction Note */}
            <div style={{ fontWeight: 'bold' }} className="f-13 mt-2">
              {item.transaction_note}
            </div>
  
            {/* Insert Date */}
            <div style={{ fontWeight: 'bold' }} className="f-13 mt-2">
              {item.insert_date}
            </div>
  
            {/* Transfer Note (if any) */}
            {item.transfer_note && (
              <div className="mt-2">
                Note: {item.transfer_note}
              </div>
            )}
          </div>
  
          {/* Amount */}
          <div className="d-flex flex-column align-items-end">
            <span className="heading" style={{ color: item.transaction_type === "1" ? '#28a745' : '#dc3545' }}>
              {item.transaction_type === "1" ? '+' : '-'} ₹{item.amount}
            </span>
          </div>
        </div>
      </div>
    ));
  };
  
  

  const renderTypes = () => {
    let activeClass = (item) => {
      if (active == item) {
        return "btn-primary";
      }
      return "";
    };

    return (
      <div className="d-flex justify-content-around my-3 gap-3">
        <div 
          className={`border p-2 w-100 text-center pointer btn ${activeClass(1)}`} 
          onClick={() => setActive(1)}
        >
          Wallet History
        </div>
        {/* <div 
          className={`border p-2 w-100 text-center pointer btn ${activeClass(0)}`} 
          onClick={() => setActive(0)}
        >
          Manual Payment History
        </div> */}
      </div>
    );
  };

  const renderValues = {
    0: renderTransactions,
    1: renderHistory,
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <div style={{ maxWidth: "1500px", width: "100%" }}>
        {renderBankIcon()}
        <div className="px-4 px-md-5 pb-4">
          {renderTypes()}
          {renderValues[active]()}
        </div>
      </div>
      <Loader show={loading} />
    </div>
  );
}

export default Wallet;