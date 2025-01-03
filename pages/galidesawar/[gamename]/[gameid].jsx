import { setHeaderTitle } from "@/redux/slice";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  LeftDigit,
  RightDigit,
  jodiDice_icon,
} from "@/resources/images";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GameType() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { gamename, gameid } = router.query;

  useEffect(() => {
    if (gamename) {
      dispatch(setHeaderTitle(gamename));
    }
  }, [gamename, dispatch]);

  const renderCard = () => {
    return (
      <div ClassName="container-fluid">
        <div onClick={() => router.back()} style={{backgroundColor: 'rgb(0, 77, 128)', display: 'inline-block',fontWeight: '400',textAlign: 'center',whiteSpace: 'nowrap',verticalAlign: 'middle',marginTop: '10px'}} className="border p-2">
          <ArrowBackIcon style={{ color: '#fff' }} />
        </div>
        <div className="galiCards">
          <a
            className="galiCardgalideswar"
            onClick={() => {
              router.push(`/galidesawar/${gamename}/play/LEFT-DIGIT/${gameid}`);
            }}
          >
            <img style={{height: '100px', width: '100px'}}src={LeftDigit} />
          </a>
          <div
            className="galiCardgalideswar"
            onClick={() => {
              router.push(`/galidesawar/${gamename}/play/RIGHT-DIGIT/${gameid}`);
            }}
          >
            <img style={{height: '100px', width: '100px'}}src={RightDigit} />
          </div>
          <div
            className="galiCardgalideswar"
            onClick={() => {
              router.push(`/galidesawar/${gamename}/play/JODI-DIGIT/${gameid}`);
            }}
          >
            <img style={{height: '100px', width: '100px'}}src={jodiDice_icon} />
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderCard()}</div>;
}

export default GameType;
