import ConditionalDownloadButton from "@/pages/ConditionalDownloadButton";
import { setHeaderTitle } from "@/redux/slice";
import {
  double_pattifill,
  full_sangam_icon,
  half_sangam_icon,
  jodiDice_icon,
  single_pattifill,
  singlefill,
  triple_pattifill,
} from "@/resources/images";
import { isTimePast } from "@/utils";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function GameDashboard() {
  const router = useRouter();
  const { gamename, gameid, data } = router.query;

  const dispatch = useDispatch();

  let gameData = {};

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
    if (isNaN(gameid) || !data) {
      router.push("/");
    }

    dispatch(setHeaderTitle(gamename));
  }, [gameid, data]);

  const renderCards = () => {
    return (
      <div className="d-flex flex-wrap justify-content-around gap-3">
        <div
          onClick={() => {
            router.push({ pathname: `/game-dashboard/${gamename}/play/single-digit/${gameid}`, query: { data: data } });
          }}
          className="border py-2 mw-32 m-auto pointer gamecard"
        >
          <img src={singlefill} />
          {/* <p className="f-12">Single digit</p> */}
        </div>
        {isOpenAll && (
          <div
            onClick={() => {
              router.push({ pathname: `/game-dashboard/${gamename}/play/jodi-digit/${gameid}`, query: { data: data } });
            }}
            className="border py-2 mw-32 m-auto pointer gamecard"
          >
            <img src={jodiDice_icon} />
            {/* <p className="f-12">Jodi</p> */}
          </div>
        )}
        <div
          onClick={() => {
            router.push({ pathname: `/game-dashboard/${gamename}/play/single-panna/${gameid}`, query: { data: data } });
          }}
          className="border py-2 mw-32 m-auto pointer gamecard"
        >
          <img src={single_pattifill} />
          {/* <p className="f-12">Single Patti</p> */}
        </div>
        <div
          onClick={() => {
            router.push({ pathname: `/game-dashboard/${gamename}/play/double-panna/${gameid}`, query: { data: data } });
          }}
          className="border py-2 mw-32 m-auto pointer gamecard"
        >
          <img src={double_pattifill} />
          {/* <p className="f-12">Double Patti</p> */}
        </div>
        <div
          onClick={() => {
            router.push({ pathname: `/game-dashboard/${gamename}/play/triple-panna/${gameid}`, query: { data: data } });
          }}
          className="border py-2 mw-32 m-auto pointer gamecard"
        >
          <img src={triple_pattifill} />
          {/* <p className="f-12">Triple Patti</p> */}
        </div>
        {isOpenAll && (
          <>
            <div
              onClick={() => {
                router.push({
                  pathname: `/game-dashboard/${gamename}/play/half-sangam/${gameid}`,
                  query: { data: data },
                });
              }}
              className="border py-2 mw-32 m-auto pointer gamecard"
            >
              <img src={half_sangam_icon} />
              {/* <p className="f-12">Half Sangam</p> */}
            </div>
            <div
              onClick={() => {
                router.push({
                  pathname: `/game-dashboard/${gamename}/play/full-sangam/${gameid}`,
                  query: { data: data },
                });
              }}
              className="border py-2 mw-32 m-auto pointer gamecard"
            >
              <img src={full_sangam_icon} />
              {/* <p className="f-12">Full Sangam</p> */}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="p-2 pb-4">
      <ConditionalDownloadButton/>
      <div className="maxWidth border p-3">
        <div className="text-center mb-4">
          <div className="heading">{gamename} Dashboard</div>
          <div className="f-13">Select Bidding Option</div>
        </div>
        <div className="my-3">{renderCards()}</div>
        <div className="f-13 text-center my-4">Note: Betting is Running Now</div>
      </div>
    </div>
  );
}

export default GameDashboard;
