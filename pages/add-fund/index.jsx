import Inputbox from '@/components/common/Inputbox';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ConditionalDownloadButton from '../ConditionalDownloadButton';
import { getSetData } from "@/utils";
import ApiClient from "@/api/apiClient";


const Fund = () => {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [error, setError] = useState("");
  const { user_id } = getSetData("userData", false, true);
  // console.log(user_id+"userId");

  useEffect(() => {
    const checkUserToken = typeof window !== 'undefined' && localStorage.getItem('token');
    if (!checkUserToken) {
      router.push('/login');
    }
  }, []);

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
    if (newAmount < 10 || newAmount > 500000) {
      setError("Amount must be between 10 and 500000");
    } else {
      setError("");
    }
  };
  // const handleAmountChange = (newAmount) => {
  //   setAmount(newAmount);
  //   if (newAmount < 300 || newAmount > 500000) {
  //     setError("Amount must be between 300 and 500000");
  //   } else {
  //     setError("");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!amount || amount < 10 || amount > 500000) {
      setError("Please enter a valid amount between 300 and 500000");
      return;
    }
    // if (!amount || amount < 300 || amount > 500000) {
    //   setError("Please enter a valid amount between 300 and 500000");
    //   return;
    // }
  
    const { user_name: name, mobile: phone } = getSetData("userData", undefined, true);
  
    try {
  
      // First, call the InitiateRazorPayTransaction endpoint
      const initResponse = await ApiClient.InitiateRazorPay({ user_id: Number(user_id), amount: Number(amount), mobile: false});
      
      if (initResponse.data.error) {
        setError(initResponse.data.error);
        return;
      }

      const { status, txn_id } = initResponse.data;

      if (status !== 'success') {
        throw new Error(initResponse.data.message || 'Failed to initiate transaction');
      }
  
      // console.log(initResponse);
  
      const formData = {
        am: Number(amount),
        name: name,
        m: phone,
        uid: Number(user_id),
        txid: txn_id
        // pending_transaction_id: pending_transaction_id
      };
  
      // Create and submit the form
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://www.prakartienterprises.in/payment/process_x.php';
  
      Object.entries(formData).forEach(([key, value]) => {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = value;
        form.appendChild(hiddenField);
      });

      console.log("--->>",form)
  
      document.body.appendChild(form);
      form.submit();
  
    } catch (error) {
      console.error('Error initiating transaction:', error);
      setError('An error occurred while initiating the transaction. Please try again.');
    }
  };  

  return (
    <div className="container">
      <div className="card tb-10">
        <ConditionalDownloadButton/>
        <div className="text-center tb-10">
          <h3>Add Fund via RazorPay</h3>
          <span>Add points to your wallet.</span>
        </div>
        <span className="text-center bold">Minimum deposit 300₹</span>
        <hr className="devider" />
        <form onSubmit={handleSubmit}>
          <h3 className="subheading">Enter Amount</h3>
          <div className="form-group">
            <Inputbox
              label="Amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter Amount"
              inputclassName="form-control"
              error={error}
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} className="row bidoptions-list tb-10 gap-3">
            {[10,300, 500, 1000, 2000, 5000, 10000, 20000].map((amt) => (
              <div key={amt} className="col-3">
                <a onClick={() => handleAmountChange(amt.toString())} className="addFundamtbox" id={`amount_${amt}`} data={amt}>
                  <p style={{fontWeight: 'bold', color: '#000'}}>₹{amt}</p>
                </a>
              </div>
            ))}
          </div>
          <button style={{marginTop: '30px'}} type="submit" className="btn btn-theme btn-login">
            Proceed to Payment
          </button>
        </form>
        <div className="text-center tbmar-20">
          <p style={{color: '#880009'}} className="bold">Please wait for 5 Seconds after payment done.</p>
        </div>
      </div>
    </div>
  );
};

export default Fund;