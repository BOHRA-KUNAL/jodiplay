import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Bidding = () => {
  const router = useRouter();

  // const router =useRouter();
  useEffect(()=>{
    const checkUserToken = typeof window !== 'undefined' && localStorage.getItem('token');
    
    if(!checkUserToken){
    router.push('/login');
    }
  },[])
  return (
<div className="container">
  <div className="text-center tb-10">
    <h3 className="gdash3">Starline Bidding History</h3>
    <span style={{ fontSize: 12 }}>Starline markets bidding records</span>
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
  )
}

export default Bidding