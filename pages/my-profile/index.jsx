import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic';
import ApiClient from "@/api/apiClient";
import { getSetData } from "@/utils";

const Image = dynamic(() => import('next/image'), { ssr: false });

const MyProfile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const { user_id } = getSetData("userData", false, true);

  const getUserProfile = () => {
    setIsLoading(true);
    setError(null);
    let payload = {
      user_id: user_id,
    };

    ApiClient.userProfile(payload)
      .then((res) => {
        if (res?.data?.profile[0]) {
          setUserData(res.data.profile[0]);
        } else {
          setError("No profile data found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch user profile");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUserProfile();
    setIsClient(true);
  }, []);

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {isClient && (
            <div className="text-center">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                width={150} 
                height={150} 
                className="rounded-circle img-thumbnail"
              />
            </div>
          )}
          <div className="card" style={{padding: '0px'}}>
            <div className="card-header" style={{marginBottom: '10px'}}>
              <h2 className="text-center mb-0">My Profile</h2>
            </div>
            <div className="card-body">
              {userData && (
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Name:</strong> {userData.user_name}</li>
                  <li className="list-group-item"><strong>Email:</strong> {userData.email}</li>
                  <li className="list-group-item"><strong>Mobile:</strong> {userData.mobile}</li>
                  <li className="list-group-item"><strong>Wallet Balance:</strong> ₹{userData.wallet_balance}</li>
                  {/* <li className="list-group-item"><strong>Hold Amount:</strong> ₹{userData.hold_amount}</li> */}
                  <li className="list-group-item"><strong>Member Since:</strong> {userData.insert_date}</li>
                  {/* <li className="list-group-item"><strong>Betting Status:</strong> {userData.betting_status === "0" ? "Inactive" : "Active"}</li> */}
                  {/* <li className="list-group-item"><strong>Notifications:</strong> {userData.notification_status === "1" ? "Enabled" : "Disabled"}</li> */}
                  {/* <li className="list-group-item"><strong>Transfer Points:</strong> {userData.transfer_point_status === "0" ? "Disabled" : "Enabled"}</li> */}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;