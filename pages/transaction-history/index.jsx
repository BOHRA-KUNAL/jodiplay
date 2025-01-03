import { checkUserToken } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Transaction = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="text-center tb-10">
        <h3 className="gdash3">Transaction History</h3>
        <span style={{ fontSize: 12 }}>Passbook View Transaction History</span>
      </div>
      <div className="tb-10">
        <div className="tbmar-40 text-center">
          <p>No Record Found.</p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Transaction;
