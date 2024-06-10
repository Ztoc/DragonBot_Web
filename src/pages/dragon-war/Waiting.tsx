import { useSelector } from "react-redux";

import CountdownTimer from "../../components/dragon/CountDownTimer";
import ToolWrapper from "../../components/dragon/ToolWrapper";

import { ImageSliceType } from "../../types/store";

const Waiting = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const HISTORY_ICON = image.dragon.find((img) => img.name === "HISTORY_ICON");

  return (
    <div className="page-dragon-bg">
      <div className="header-blur"></div>
      <div className="dragon-container">
        <ToolWrapper />
        <div className="history-wrapper">
          <h3>Dragon Pot</h3>
          <img src={HISTORY_ICON?.img.src} alt="history" width={24} height={24} />
        </div>
        <div className="waiting-description">
          <p>Starts in</p>
          <h2>
            <CountdownTimer initialSeconds={200} />
          </h2>
          <h3>Silver Round</h3>
          <span>
            Total Participants: 8720/10000
            <br />
            Total Pot: 200 TON
          </span>
        </div>
        <button className="btn-start blur-dragon-round">Start</button>
      </div>
      <div className="footer-blur"></div>
    </div>
  );
};

export default Waiting;
