const getSetData = (key, val, josn) => {
  try {
    if (process.browser) {
      if (val) {
        if (josn) {
          let data = JSON.stringify(val);
          localStorage.setItem(key, data);
        } else {
          localStorage.setItem(key, val);
        }
      } else {
        let data = localStorage.getItem(key);
        if (josn) {
          data = JSON.parse(data) || {};
          return data;
        } else {
          return data;
        }
      }
    } else {
      if (josn) return {};
    }
  } catch (e) {
    console.log("failed to handle storage : ", e);
  }
};

function isTimePast(timeStr) {
  // Step 1: Parse the 12-hour time string
  function parseTime(timeStr) {
    const [time, period] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (period === "PM" && hours !== 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }

    // Create a Date object with the current date but the parsed time
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
  }

  // Get the current time
  const now = new Date();

  // Parse the given time string
  const parsedTime = parseTime(timeStr);

  // Compare the parsed time with the current time
  return parsedTime < now;
}


function getDaysDifference(days = 7) {
  const endDate = new Date();
  const startDate = new Date();

  if (days === 0) {
    return { startDate: endDate.toISOString().split("T")[0], endDate: endDate.toISOString().split("T")[0] };
  }

  startDate.setDate(startDate.getDate() - days);
  return { startDate: startDate.toISOString().split("T")[0], endDate: endDate.toISOString().split("T")[0] };
}


function getMonthsDifference(months = 1) {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - months);
  return { startDate: startDate.toISOString().split("T")[0], endDate: endDate.toISOString().split("T")[0] };
}

module.exports = { getSetData, isTimePast, getDaysDifference, getMonthsDifference };
