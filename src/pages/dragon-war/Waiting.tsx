import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CountdownTimer from "../../components/dragon/CountDownTimer";
import ToolWrapper from "../../components/dragon/ToolWrapper";

import { ImageSliceType } from "../../types/store";
import { setDuration, setRemainSec } from "../../store/dragonwar";

const Waiting = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const HISTORY_ICON = image.dragon.find((img) => img.name === "HISTORY_ICON");
  const navigate = useNavigate();
  const seconds = useSelector((state: any) => state.dragonwar.remainSec);
  const duration = useSelector((state: any) => state.dragonwar.duration);
  const round = useSelector((state: any) => state.dragonwar.round);
  const participants = useSelector((state: any) => state.dragonwar.participants);
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;

    if (duration > 0 && seconds === 0) {
      console.log(duration);
      interval = setInterval(() => {
        dispatch(setDuration(duration - 1));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [duration, seconds]);

  const toHistory = () => {
    navigate("/dragon-war/history");
  };

  const handleStart = () => {
    if (duration === 0) {
      alert("Already finished");
      return;
    }
    if (seconds === 0) {
      navigate(`/dragon-war/round${round}`);
    }
  };

  return (
    <div className="page-dragon-bg">
      <div className="header-blur"></div>
      <div className="dragon-container">
        <ToolWrapper />
        <div className="history-wrapper">
          <h3>Dragon Pot</h3>
          <img src={HISTORY_ICON?.img.src} alt="history" width={24} height={24} onClick={toHistory} />
        </div>
        <div className="waiting-description">
          <p>Starts in</p>
          <h2 style={{ color: seconds < 10 ? "red" : "" }}>
            <CountdownTimer seconds={seconds} setSeconds={setRemainSec} />
          </h2>

          <h3>Silver Round</h3>
          <span style={{ opacity: seconds < 10 ? "0" : "1" }}>
            Total Participants: {participants}/10000
            <br />
            Total Pot: {participants * (round === 1 ? 0.2 : round === 3 ? 0.5 : 1)} TON
          </span>
        </div>
        <button className={`btn-start ${seconds < 10 ? "btn-primary" : "blur-dragon-round"} `} onClick={handleStart}>
          Start
        </button>
      </div>
      <div className="footer-blur"></div>
    </div>
  );
};

export default Waiting;
