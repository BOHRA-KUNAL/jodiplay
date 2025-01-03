import PlayGame from "@/pages/game-dashboard/[gamename]/play/[type]/[gameid]";
import React from "react";

function GaliGames() {
  const renderDashBoard = () => {
    return <PlayGame gali={true} />;
  };
  return <div>{renderDashBoard()}</div>;
}

export default GaliGames;
