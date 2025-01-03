import ApiClient from "@/api/apiClient";
import Loader from "@/components/Loader";
import Inputbox from "@/components/common/Inputbox";
import amountList from "@/data/amountList";
import renderDigit from "@/data/gameData";
import { getSetData, isTimePast } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { setHeaderTitle } from "@/redux/slice";
import { useDispatch } from "react-redux";

let sangamValidationArr = renderDigit("halfsangam");

function PlayGame({ gali }) {
  const router = useRouter();
  const { gamename, gameid, type, data } = router.query;

  const dispatch = useDispatch();

  if (gamename) {
    dispatch(setHeaderTitle(gamename));
}

  function toTitleCase(str) {
    return str
      .replace(/-/g, " ") // Replace hyphens with spaces
      .toLowerCase() // Convert to lowercase
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  }

  let title = String(type || gamename).replace(/-/g, " ");
  title = toTitleCase(title);

  const closeModalRef = useRef();
  const audioRef = useRef(null);

  const [amount, setAmount] = useState();
  const [allData, setAllData] = useState({});
  const [selectedOption, setSelectedOption] = useState("open");
  const [walletAmount, setWalletAmount] = useState(0);
  const [digits, setDigits] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState();

  let bidsData = {};
  let gameData = {};
  let isJodiDigit = type == "jodi-digit";
  let isFullSangam = type == "full-sangam";
  let session = ""; 

  if (data) {
    try {
      gameData = JSON.parse(data);
    } catch (e) {
      router.push("/");
      console.log(e);
    }
  }

  let { open_time } = gameData;

  let isOpenAll = "";
  if (open_time) isOpenAll = !isTimePast(open_time);

  useEffect(() => {
    if (isJodiDigit || isFullSangam) {
      setSelectedOption("close");
    } else {
      setSelectedOption(isOpenAll ? "open" : "close");
    }
  }, [isOpenAll]);

  let resetGame = () => {

    Swal.fire({
      title: "Reset Warning?",
      text: "Are you sure you want to reset the game?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      customClass: {
          confirmButton: 'custom-confirm-button',
          cancelButton: 'custom-cancel-button'
      }
  }).then((result) => {
      if (result.isConfirmed) {
          setAllData({});
          setAmount(0);
          setSelectedAmount(null);
      }
  });
  

  };

  let resetGameAuto = () => {

    setAllData({});
    setAmount(0);
    setSelectedAmount(null);

  };

  let gameDate = new Date()
    .toLocaleDateString({ day: "2-digit", month: "2-digit", year: "numeric" })
    .replaceAll("/", "-");

  let isValid = false;
  const { user_id } = getSetData("userData", false, true);

  useEffect(() => {
    setLoading(true);
    ApiClient.wallet_amount({ user_id: user_id })
      .then((res) => {
        setLoading(false);
        setWalletAmount(res?.data?.wallet_amt);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching wallet amount:", error);
      });
  }, [user_id]);

  const submitGaliBid = (payload) => {
    setLoading(true);
    ApiClient.galiDesawarBid(payload)
      .then((res) => {
        setLoading(false);
        audioRef.current.play();
        closeModalRef.current.click();
        resetGameAuto();
        toast.success(res.data.msg);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong");
        console.log(err);
      });
  };

  const submitBid = (bids) => {
    if (!bids.totalbids) {
      alert("no bids");
      return closeModalRef.current.click();
    }

    let payload = {
      new_result: {
        user_id: user_id,
        gameid: gameid,
        Gamename: gamename,
        pana: title,
        bid_date: gameDate,
        totalbit: bids.totalbids,
        session: selectedOption,
        result: bids.payload,
      },
    };

    if (gali) {
      return submitGaliBid(payload);
    }

    setLoading(true);

    ApiClient.SubmitBid(payload)
      .then((res) => {
        setLoading(false);
        audioRef.current.play();
        closeModalRef.current.click();
        resetGameAuto();
        toast.success(res.data.msg);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong");
        console.log(err);
      });
  };

  const renderAmount = () => {
    return amountList.map((item, index) => {
      const { amount: itemAmount, icon } = item;
      const isSelected = selectedAmount === itemAmount;

      return (
        <div
          onClick={() => {
            setSelectedAmount(itemAmount);
            setAmount(itemAmount);
          }}
          key={index}
          className={`p-2 pointer`}
          // className={`border py-2 px-5 pointer cardBoxes ${activeClass}`}
        >
          {/* <img src={icon} alt={"amount " + itemAmount} style={{ width: "80px" }} /> */}
          <div className={`button-money ${isSelected ? 'selected' : ''}`}>₹{itemAmount}</div>
        </div>
      );
    });
  };

  const renderAmountInput = () => {
    return (
      <div className="d-flex justify-content-center align-items-center gap-2 my-3">
        <div className="f-12">SELECT AMOUNT OR ENTER AMOUNT:</div>

        <div style={{ width: "100px" }}>
          <Inputbox onChange={(e) => handleAmountChange(e)} value={amount} type="number" />
        </div>
      </div>
    );
  };

  const renderheadSection = () => {
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      setDigits({});
      setAllData({});
    };

    return (
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 f-12">
        <div onClick={() => router.back()} style={{backgroundColor: '#004d80'}} className="border p-2"><ArrowBackIcon style={{ color: '#fff' }} /></div>
        <div className="border p-2">{gameDate}</div>
        <div className="uppercase d-flex gap-3 align-items-center ms-auto">
          <span>{gali ? "GALI - " + title : title + session}</span>
          {gali || isFullSangam || isJodiDigit ? (
            ""
          ) : (
            <>
              <div className={`d-flex gap-1 ${isOpenAll && "bold"}`}>
                <input
                  type="radio"
                  name="status"
                  value="open"
                  checked={selectedOption === "open"}
                  onChange={(evt) => {
                    if (isOpenAll) handleOptionChange(evt);
                  }}
                />
                Open
              </div>
              <div className="d-flex gap-1 bold">
                <input
                  type="radio"
                  name="status"
                  value="close"
                  checked={selectedOption === "close"}
                  onChange={handleOptionChange}
                />
                Close
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  const handleItemClick = (key, index, value, digitKey, decrese) => {
    if (!value) {
      alert("Please select amount");
      return;
    }

    if (value < 10) {
      Swal.fire({
        title: "Oops!",
        text: "Minimum bet is 10Rs",
        icon: "error"
      });
      return;
    }

    if (allData[key]) {
      if (decrese) {
        if (allData[key][index] && allData[key][index][digitKey] - value >= 0) {
          allData[key][index] = { [digitKey]: allData[key][index][digitKey] - value };
        } else {
          allData[key][index] = { [digitKey]: 0 };
        }
      } else {
        let valExist =
          allData[key] && allData[key][index] && allData[key][index][digitKey] ? allData[key][index][digitKey] : 0;
        allData[key][index] = { [digitKey]: valExist + +value };
      }
      setAllData({ ...allData });
    } else {
      allData[key] = [];
      if (decrese) {
        allData[key][index] = { [digitKey]: 0 };
      } else {
        allData[key][index] = { [digitKey]: +value };
      }
      setAllData({ ...allData });
    }
  };

  let renderDigits = (digits, key) => {
    return digits.map((item, index) => {
      let digitPoints = allData[key] && allData[key][index] ? allData[key][index][item] : "";
      let isActive = digitPoints ? "bg-primary text-white" : "";

      return (
        <div key={index} className="mx-auto text-center">
          <p className="coinadd">{item}</p>
          <div
            onClick={() => handleItemClick(key, index, amount, item)}
            className={`border p-2 px-3 cardBoxes text-center d-flex align-items-between justify-content-between ${isActive}`}
            style={{ minWidth: "70px", maxWidth: "max-content", minHeight: "43px" }}
          >
            <span className="mx-auto"> {digitPoints} </span>
          </div>
        </div>
      );
    });
  };

  const renderBidHistory = () => {
    let keys = Object.keys(allData);
    let rendomIndex = 0;
    let totalPoints = 0;
    let payload = [];
    let html = keys.map((item, index) => {
      let objectItem = allData[item];

      return objectItem.map((item1, index1) => {
        let keys = Object.keys(item1)[0];
        totalPoints += item1[keys];
        rendomIndex += 1;

        let payloadObj = {
          session: selectedOption,
          digits: keys,
          closedigits: "",
          points: item1[keys],
        };

        if (selectedOption == "open") {
          payloadObj.digits = keys;
          payloadObj.closedigits = "";
        } else {
          payloadObj.digits = "";
          payloadObj.closedigits = keys;
        }

        if (gali) {
          payloadObj.digits = "";
          payloadObj.closedigits = keys;
        }

        payload.push(payloadObj);

        return (
          <tr key={index1}>
            <th scope="row">{rendomIndex}</th>
            <td>{keys}</td>
            <td>{item1[keys]}</td>
            <td className="capitalize">{selectedOption}</td>
          </tr>
        );
      });
    });

    let remaningAmount = walletAmount - totalPoints;

    isValid = remaningAmount >= 0;

    bidsData.totalPoints = totalPoints;
    bidsData.totalbids = rendomIndex;
    bidsData.payload = payload;

    return (
      <>
        {html}
        <tr>
          <td colSpan={4}></td>
        </tr>
        <tr>
          <td> Total Bids Amount </td>
          <td colSpan={2}>-</td>
          <td className="bold">{totalPoints}</td>
        </tr>
        <tr>
          <td> Total Bids </td>
          <td colSpan={2}>-</td>
          <td className="bold">{rendomIndex}</td>
        </tr>
        <tr>
          <td> Wallet before deduction </td>
          <td colSpan={2}>-</td>
          <td className="bold">{walletAmount}</td>
        </tr>
        <tr>
          <td> Wallet after deduction </td>
          <td colSpan={2}>-</td>
          <td className="bold">{remaningAmount}</td>
        </tr>
      </>
    );
  };

  const renderSangamHistory = () => {
    let payload = [];
    let rendomIndex = 0;
    let totalPoints = 0;

    if (!allData[0]) {
      return <></>;
    }

    let html = allData[0].map((item, index) => {
      rendomIndex = index + 1;
      totalPoints += item.amount;

      let payloadObj = {
        session: selectedOption,
        digits: item.open,
        closedigits: item.close,
        points: item.amount,
      };

      payload.push(payloadObj);

      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.open}</td>
          <td>{item.close}</td>
          <td>{item.amount}</td>
          <td className="capitalize">{selectedOption}</td>
        </tr>
      );
    });

    let remaningAmount = walletAmount - totalPoints;

    isValid = remaningAmount >= 0;

    bidsData.totalPoints = totalPoints;
    bidsData.totalbids = rendomIndex;
    bidsData.payload = payload;

    return (
      <>
        {html}
        <tr>
          <td colSpan={5}></td>
        </tr>
        <tr>
          <td colSpan={3}> Total Bids Amount </td>
          <td colSpan={1}>-</td>
          <td className="bold">{totalPoints}</td>
        </tr>
        <tr>
          <td colSpan={3}> Total Bids </td>
          <td colSpan={1}>-</td>
          <td className="bold">{rendomIndex}</td>
        </tr>
        <tr>
          <td colSpan={3}> Wallet before deduction </td>
          <td colSpan={1}>-</td>
          <td className="bold">{walletAmount}</td>
        </tr>
        <tr>
          <td colSpan={3}> Wallet after deduction </td>
          <td colSpan={1}>-</td>
          <td className="bold">{remaningAmount}</td>
        </tr>
      </>
    );
  };

  let renderDetails = () => {
    if (type == "full-sangam" || type == "half-sangam") {
      return (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Open</th>
              <th scope="col">Close</th>
              <th scope="col">Amount</th>
              <th scope="col">Session</th>
            </tr>
          </thead>
          <tbody>{renderSangamHistory()}</tbody>
        </table>
      );
    }

    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Number</th>
            <th scope="col">Points</th>
            <th scope="col">Session</th>
          </tr>
        </thead>
        <tbody>{renderBidHistory()}</tbody>
      </table>
    );
  };

  const showConfirmPopup = () => {
    return (
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title fs-5 capitalize" id="exampleModalLabel">
                {title}
              </h2>
              <button
                ref={closeModalRef}
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" style={{ overflow: "auto", height: "50vh" }}>
              <div class="table-responsive">{renderDetails()}</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  if (!isValid) {
                    alert("insufficient balance");
                  }
                  submitBid(bidsData);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPreview = () => {
    return allData[0].map((item, index) => {
      return (
        <div style={{marginBottom: '20px'}} className="row heading d-flex" key={index}>
          <span style={{fontSize: '17px'}}  className="col-6">{index + 1}. Open Digit: {item.open} </span> 
          <span className="col-6"> 
            <div className="col">
          <span style={{fontSize: '17px'}}> Close Pana: {item.close} </span>
          </div>
            </span>
            <span className="col-6"> 
            <div className="col">
            <span style={{fontSize: '17px'}} className="col">Amount: {item.amount}</span>
            </div>
            </span>
        </div>
      );
    });
  };

  const renderPreviewHalfSangam = () => {
    return allData[0].map((item, index) => {
      return (
        <div style={{marginBottom: '20px'}} className="row heading d-flex" key={index}>
          <span style={{fontSize: '14px'}} className="col-6"> {index + 1}.  Close Digit: {item.close} </span>
          <span className="col-6"> 
            <div style={{fontSize: '14px'}} className="col">
            Open Pana: {item.open} 
            </div>
            </span>
            <span className="col-6"> 
            <div className="col">
            <span style={{fontSize: '14px'}} className="col">Amount: {item.amount}</span>
            </div>
            </span>
        </div>
      );
    });
  };

  const renderPreviewFullSangam = () => {
    return allData[0].map((item, index) => {
      return (
        <div style={{marginBottom: '20px'}} className="row heading d-flex" key={index}>
          <span style={{fontSize: '14px'}} className="col-6"> {index + 1}. Open Pana: {item.open}</span>
          <span className="col-6"> 
            <div style={{fontSize: '14px'}} className="col">
            Close Panna: {item.close}  
            </div>
            </span>
            <span className="col-6"> 
            <div className="col">
            <span style={{fontSize: '14px'}} className="col">Amount: {item.amount}</span>
            </div>
            </span>
        </div>
      );
    });
  };

  const handleAmountChange = (e) => {
    const value = e; // Safely access the value property
      setAmount(value);
  };

  const handleDigitOneChange = (value, key) => {
    // Ensure the value is numeric and is a single digit
    if (!/^\d?$/.test(value)) {
      // If the value contains more than one digit or non-numeric characters, ignore the change
      return;
    }
  
    // Update the digit value with the validated input
    handleDigit(value, key);
  };

  const handleDigitChange = (value, key) => {
    // Ensure the value is numeric and doesn't exceed 3 digits
    if (!/^\d*$/.test(value)) {
      // If the value contains non-numeric characters, ignore the change
      return;
    }
  
    if (value.length > 3) {
      value = value.slice(0, 3); // Limit to 3 digits
    }
  
    if (parseInt(value, 10) > 999) {
      value = '999'; // Set to 999 if value exceeds
    }
  
    // Update the digit value with the validated input
    handleDigit(value, key);
  };

  const handleDigit = (val, key) => {
    digits[key] = val;
    setDigits({ ...digits });
  };

  const submitDigits = () => {
    if (!digits.open || !digits.close) {
      alert("please select open and close digits");
      return;
    }

    if (!amount) {
      alert("please select a valid amount");
      return;
    }

    if (!allData[0]) {
      allData[0] = [];
    }

    digits.amount = amount;
    allData[0].push(digits);
    setAllData({ ...allData });
    setDigits({});
  };

  const showOptionTitle = selectedOption == "open" ? "OPEN DIGIT" : "CLOSE DIGIT";
  const showOptionTitle2 = selectedOption == "open" ? "CLOSE PANNA/PATTI" : "OPEN PANNA/PATTI";
  const showOptionTitle3 = selectedOption == "open" ? "OPEN PANNA" : "CLOSE PANNA";

  const keyOption2 = selectedOption == "open" ? "close" : "open";

  const renderInputDigits = () => {
    let inputs = {
      0: () => {
        if (title === "Full Sangam") {
          return (
            <div className="uppercase d-flex justify-content-center align-items-center gap-3" style={{ minWidth: "45%" }}>
              <span className="f-12 w-270 bold">
                {title} OPEN PANNA :
              </span>
              <Inputbox
                value={digits[keyOption2]}
                onBlur={() => {
                  if (!sangamValidationArr.includes(+digits[keyOption2])) {
                    alert(`Invalid ${keyOption2} panna`);
                    handleDigit("", keyOption2);
                  }
                }}
                onChange={(e) => {
                  handleDigitChange(e, keyOption2);
                }}
                type="number"
                // max={999}
              />
            </div>
          );
        } else {
          return (
            <div className="uppercase d-flex justify-content-center align-items-center gap-3" style={{ minWidth: "45%" }}>
              <span className="f-12 w-270 bold">
               {title} {showOptionTitle} :
              </span>
              <Inputbox
                value={digits[selectedOption]}
                onChange={(e) => handleDigitOneChange(e, selectedOption)}
                type="number"
                // max={9}  // Default max value is 9
              />
            </div>
          );
        }
      },
      1: () => {
        if (title === "Full Sangam") {
          return (
            <div className="uppercase d-flex justify-content-center align-items-center gap-3" style={{ minWidth: "45%" }}>
              <span className="f-12 w-270 bold">
               {title} CLOSE PANNA :
              </span>
              <Inputbox
                value={digits[selectedOption]}
                onChange={(e) => handleDigitChange(e, selectedOption)}
                type="number"
                // max={999}  // Max value set to 999 for "Half Sangam"
              />
            </div>
          );
        } else {
          return (
            <div className="uppercase d-flex justify-content-center align-items-center gap-3" style={{ minWidth: "45%" }}>
              <span className="f-12 w-270 bold">
               {title} {showOptionTitle2} :
              </span>
              <Inputbox
                value={digits[keyOption2]}
                onBlur={() => {
                  if (!sangamValidationArr.includes(+digits[keyOption2])) {
                    alert(`Invalid ${keyOption2} panna`);
                    handleDigit("", keyOption2);
                  }
                }}
                onChange={(e) => {
                  handleDigitChange(e, keyOption2);
                }}
                type="number"
                // max={999}
              />
            </div>
          );
        }
      },
    };

    return (
      <>
        <div className="d-flex justify-content-between align-items-center gap-3 my-4 flex-wrap">
          {inputs[0]()}
          {inputs[1]()}
        </div>
        <div className="my-3 d-flex">
          <div className="btn btn-success mx-auto" onClick={submitDigits}>
            SUBMIT
          </div>
        </div>
        {allData[0] && allData[0].length > 0 && (
          <div style={{marginBottom: '35px'}} className="container border p-3 bg-gray">
            {title === "Half Sangam" && selectedOption === "close" ? renderPreviewHalfSangam() : title === "Full Sangam" && selectedOption === "close" ? renderPreviewFullSangam(): renderPreview()}
          </div>
        )}
      </>
    );
  };

  const renderdataBydigits = () => {
    const alldigits = renderDigit(type || gamename);

    if (alldigits == "input") {
      return renderInputDigits();
    }

    if (!alldigits) {
      return <>not found</>;
    }

    if (Array.isArray(alldigits)) {
      return <div className="d-flex gap-3 w-100 flex-wrap">{renderDigits(alldigits, "0")}</div>;
    } else {
      return Object.keys(alldigits).map((item, index) => {
        return (
          <div className="my-3">
            <div className="my-3 text-center">{item}</div>
            <div className="d-flex gap-3 flex-wrap">{renderDigits(alldigits[item], String(index))} </div>
            <hr />
          </div>
        );
      });
    }
  };

  return (
    <div style={{marginBottom: '5rem'}} className="maxWidth py-4 p-3">
      {renderheadSection()}
      <hr />
      {renderAmountInput()}

      <audio ref={audioRef} src="/bet.mp3" preload="auto" />

      <div className="d-flex justify-content-center">
        <div style={{justifyContent: 'space-around'}} className="d-flex flex-wrap">{renderAmount()}</div>
      </div>
      <hr />
      <div>{renderdataBydigits()}</div>
      {/* <div style={{paddingTop: '80px'}}> */}
        <div className="d-sm-flex justify-content-between gap-3 mt-4 fixed-bid">
            <div className="w-100 my-2 text-center border p-2 btn btn-outline-danger" onClick={resetGame}>
              Reset
            </div>
            <div
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="w-100 my-2 text-center border p-2 btn btn-success"
            >
              Submit Bid
            </div>
        </div>
      {/* </div> */}
      <div className="pointsmodal">{showConfirmPopup()}</div>
      <Loader show={loading} />
    </div>
  );
}

export default PlayGame;
