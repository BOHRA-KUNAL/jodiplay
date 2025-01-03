import ApiClient from "@/api/apiClient";
import { getSetData } from "@/utils";
import React, { useState } from "react";
import { useEffect } from "react";

function Notifications() {
  const [notificationsData, setNotificationsData] = useState([]);
  const userData = getSetData("userData", false, true);

  const { user_id } = userData;

  const getNotifications = () => {
    ApiClient.notifications({ user_id })
      .then((res) => {
        setNotificationsData(res?.data?.notification);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNotifications();
  }, []);

  const renderNotifications = () => {
    if (!notificationsData || !notificationsData.length) {
      return <div>Notification Data Not Available</div>;
    }

    return notificationsData.map((notification, index) => {
      let { msg, insert_date } = notification;
      return (
        <div key={index} className="border d-flex p-2 gap-2 m-4 flex-column">
          <div className="heading">{msg}</div>
          <div className="mt-auto ms-auto f-13">{insert_date}</div>
        </div>
      );
    });
  };

  return <div className="maxWidth">{renderNotifications()}</div>;
}

export default Notifications;
