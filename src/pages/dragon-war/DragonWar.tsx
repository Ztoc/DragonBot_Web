import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ConfirmDrawer from "../../components/dragon/ConfirmDrawer";
import MedalSelections from "../../components/dragon/MedalSelections";
import CountdownTimer from "../../components/dragon/CountDownTimer";
import ToolWrapper from "../../components/dragon/ToolWrapper";

import { setConfirm, setRemainSec } from "../../store/dragonwar";
import { ImageSliceType } from "../../types/store";

import "../../dragon.css";

const rounds = ["Bronze", "", "Silver", "Gold"];

const DragonWar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toHistory = () => {
    navigate("/dragon-war/history");
  };

  const dragonwar = useSelector((state: any) => state.dragonwar);
  const tickets = dragonwar.tickets;
  const round = dragonwar.round;
  const duration = dragonwar.duration;
  const participants = dragonwar.participants;
  const seconds = dragonwar.remainSec;

  const image: ImageSliceType = useSelector((state: any) => state.image);
  const Bronze_medal = image.dragon.find((img) => img.name === "BRONZE_MEDAL");
  const Silver_medal = image.dragon.find((img) => img.name === "SILVER_MEDAL");
  const Gold_medal = image.dragon.find((img) => img.name === "GOLD_MEDAL");
  const Silver_large = image.dragon.find((img) => img.name === "SILVER_LARGE_MEDAL");
  const HISTORY_ICON = image.dragon.find((img) => img.name === "HISTORY_ICON");

  return (
    <div className="page-dragon-bg">
      <div className="header-blur"></div>
      <div className="dragon-container">
        <ToolWrapper />
        <div className="history-wrapper">
          <h3>Dragon Pot</h3>
          <img src={HISTORY_ICON?.img.src} alt="history" width={24} height={24} onClick={toHistory} />
        </div>
        <div className="medal-group">
          <div className="medal-item blur-round-border-bg">
            <img src={Bronze_medal?.img.src} className="medal" alt="bronze" />
            <div className="count">{tickets?.bronze}</div>
          </div>
          <div className="medal-item blur-round-border-bg">
            <img src={Silver_medal?.img.src} className="medal" alt="silver" />
            <div className="count">{tickets?.silver}</div>
          </div>
          <div className="medal-item blur-round-border-bg">
            <img src={Gold_medal?.img.src} className="medal" alt="gold" />
            <div className="count">{tickets?.gold}</div>
          </div>
        </div>
        <div className="wait-time">
          <p>Starts in</p>
          <h2 style={{ color: seconds < 10 ? "red" : "" }}>
            <CountdownTimer seconds={seconds} setSeconds={setRemainSec} />
          </h2>
        </div>
        <div className="round-description blur-dragon-round">
          <div style={{ display: "flex", flexDirection: "column", rowGap: "4px" }}>
            <h2>{rounds[round - 1]} Round</h2>
            <p>Duration:{duration / 60} minutes</p>
            <p>Participants: {participants}/10000</p>
          </div>
          <img src={Silver_large?.img.src} width={90} height={160} alt="medal" />
        </div>
        <div className="enter-btn-wrapper">
          <button
            className="btn-primary"
            onClick={(e) => {
              dispatch(setConfirm(true));
            }}
          >
            Enter
          </button>
        </div>
      </div>
      <MedalSelections />
      <ConfirmDrawer />
      <div className="footer-blur"></div>
    </div>
  );
};

export default DragonWar;
