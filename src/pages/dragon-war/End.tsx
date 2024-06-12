import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ToolWrapper from "../../components/dragon/ToolWrapper";
import CountdownTimer from "../../components/dragon/CountDownTimer";

import { ImageSliceType } from "../../types/store";
import { setCalcTime } from "../../store/dragonwar";

const End = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const CUP = image.dragon.find((img) => img.name === "CUP_ICON");
  const calcTime = useSelector((state: any) => state.dragonwar.calcTime);
  const navigate = useNavigate();
  if (calcTime === 0) {
    navigate("/dragon-war/scores");
  }
  return (
    <div className="end-container">
      <div className="header-blur"></div>
      <ToolWrapper />
      <div className="">
        <div className="end-wrapper blur-dragon-round">
          <img src={CUP?.img.src} alt="cup" width={287} height={287} />
          <div>
            <h2>Round is over</h2>
            <p>Calculating Scores</p>
          </div>
          <h3>
            <CountdownTimer seconds={calcTime} setSeconds={setCalcTime} />{" "}
          </h3>
        </div>
      </div>
      <div className="footer-blur"></div>
    </div>
  );
};

export default End;
