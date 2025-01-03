import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import toast from 'react-hot-toast';
import ApiClient from "@/api/apiClient";
import { getSetData } from "@/utils";

const ManualPayment = () => {
  const { user_id } = getSetData("userData", false, true);
  const router = useRouter();
  const [orderId, setOrderId] = useState('');
  const [utr, setUtr] = useState('');
  const { amount } = router.query;
  const DateFormated = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');

  const generateOrderId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  useEffect(() => {
    const id = generateOrderId();
    setOrderId(id);
  }, []);

  const handleSubmit = async () => {
    if (!utr) {
      toast.error('Please enter your UTR!');
      return;
    }
    // setLoading(true);
    try {
      const res = await ApiClient.AddFundRequest({ user_id, request_amount: amount, request_number: orderId, insert_date: DateFormated });
      toast.success(res?.data?.msg);
      router.push('/add-fund');
    } catch (err) {
      toast.error("Something went wrong");
      // console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  if (!router.isReady) return "Loading..."; // Consider using a loader component or message

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <div style={{
        background: 'linear-gradient(to bottom right, #4299e1, #2b6cb0)',
        height: '6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 'bold' }}>Jodi Play UPI Cashier</div>
      </div>
  
      <div style={{ maxWidth: '28rem', margin: '1rem auto', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4a5568' }}>Order Details</h2>
          <div style={{ marginTop: '0.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#718096' }}>Order ID: <span style={{ fontWeight: '500' }}>{orderId}</span></p>
            <p style={{ fontSize: '0.875rem', color: '#718096', marginTop: '0.25rem' }}>Amount: <span style={{ fontWeight: '500' }}>₹{amount}</span></p>
          </div>
        </div>
      </div>
  
      <div style={{ maxWidth: '28rem', margin: '1rem auto', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#3182ce' }}>Step 1: Transfer <span style={{ color: '#9f7aea', fontWeight: 'bold' }}>₹{amount}</span> to the following QR</h2>
          <div style={{ marginTop: '1rem', backgroundColor: '#ebf8ff', padding: '1rem', borderRadius: '0.375rem' }}>
            <img src="https://matkajunction.com/qrcodeforjodiplay/jodiplayqr.jpeg" alt="QR Code" style={{ height: '100%', width: '100%' }} />
          </div>
          <p style={{ fontSize: '0.875rem', color: '#718096', marginTop: '1rem', textAlign: 'center' }}>Open your UPI wallet and complete the transfer</p>
          <p style={{ fontSize: '0.875rem', color: '#718096', marginTop: '0.25rem', textAlign: 'center' }}>Record your UTR(Reference No.) after payment</p>
        </div>
      </div>
  
      <div style={{ maxWidth: '28rem', margin: '1rem auto', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#3182ce' }}>Step 2: Submit UTR/Reference No/Ref No</h2>
          <div style={{ marginTop: '1rem' }}>
            <input
              type="number"
              placeholder="Input 12-digit here"
              style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '2rem', textAlign: 'center', borderRadius: '0.375rem', border: '1px solid #cbd5e0', outline: 'none', transition: 'border-color 0.3s' }}
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
            />
          </div>
          <p style={{ fontSize: '0.875rem', color: '#718096', marginTop: '0.5rem', textAlign: 'center' }}>Generally, your transfer will be confirmed within 3 hours</p>
          <div style={{ backgroundColor: '#ffffff', boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ maxWidth: '28rem', margin: '0 auto', padding: '1rem' }}>
              <button onClick={handleSubmit} style={{ width: '100%', backgroundColor: '#4299e1', color: '#ffffff', padding: '0.75rem', borderRadius: '0.375rem', transition: 'background-color 0.3s', border: 'none', cursor: 'pointer' }}>
                Submit UTR
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <div style={{ maxWidth: '28rem', margin: '1rem auto', backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#4a5568' }}>Where to find UTR</h2>
          <div style={{ marginTop: '1rem' }}>
            {['demo-4.png', 'demo-2.png', 'demo-6.png', 'demo-3.png', 'demo-5.png', 'demo-1.png'].map((img, index) => (
              <div key={index} style={{ width: '100%' }}>
                <Image src={`/${img}`} alt={`UTR example ${index + 1}`} width={400} height={300} layout="responsive" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualPayment;
