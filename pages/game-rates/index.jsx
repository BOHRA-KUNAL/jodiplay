import ApiClient from "@/api/apiClient";
import React, { useEffect, useState } from "react";

const GameRates = ({ data }) => {
  const [gameratesData, setGameRatesData] = useState(data || []);

  const getGameRates = () => {
    ApiClient.gameRates()
      .then((res) => {
        setGameRatesData(res?.data?.game_rates);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (data) {
      setGameRatesData(data);
    }
  }, [data]);

  useEffect(() => {
    if (!data) {
      getGameRates();
    }
  }, []);

  let genrateData = (data, keys) => {
    let strArr = [];
    keys.map((item, index) => {
      let arr = item.split("_");

      if (arr.includes("val")) {
        arr.pop();
        arr.pop();
        let str = arr.join("_");
        strArr.push(str);
      }
    });

    let final = [...new Set(strArr)];

    let result = [];

    final.map((item) => {
      let finalStr1 = item + "_val_1";
      let finalStr2 = item + "_val_2";
      let key = [data[finalStr1], data[finalStr2]];
      let object = { [item.replaceAll("_", " ")]: key };
      result.push(object);
    });

    return result;
  };

  const renderGameRates = () => {
    let obj = gameratesData[0];
    if (!obj) {
      return <div>no record found!</div>;
    }
    let games = Object.keys(obj);

    let data = genrateData(obj, games);

    return data.map((game, index) => {
      let key = Object.keys(game)[0];
      let val = game[key];
      return (
        <div key={index} className="row game-list-inner m-3 p-2">
          <div className="d-flex justify-content-between py-2 capitalize">
            <div className="bold">{key}</div>
            <div>
              {val[0]} - {val[1]}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="maxWidth">
      <div className="tb-10" style={{ textAlign: "center" }}>
        {/* <h1 className="gdash3" style={{ fontSize: 22 }}>
          Game Rates
        </h1> */}

        <div>{renderGameRates()}</div>
      </div>
    </div>
  );
};

export default GameRates;
