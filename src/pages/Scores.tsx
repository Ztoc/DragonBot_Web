import { useSelector } from "react-redux";
import ToolWrapper from "../components/dragon/ToolWrapper";
import { ImageSliceType } from "../types/store";

const Scores = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const CUP = image.dragon.find((img) => img.name === "CUP_ICON");
  const COIN_IMG = image.core.find((img) => img.name === "COIN_ICON");

  return (
    <div className="end-container">
      <div className="header-blur"></div>

      <ToolWrapper />
      <div className="scores-wrapper blur-dragon-round">
        <div className="cup-wrapper blur-dragon-round">
          <img src={CUP?.img.src} alt="cup" width={211} height={211} />
        </div>
        <div>
          <h2>Your score: 2500</h2>
          <p>Rank : 2900</p>
        </div>
        <div className="score-amount">
          <img src={COIN_IMG?.img.src} alt="" width={65} height={65} />
          <p>2500</p>
        </div>
        <button className="btn-close">Claim and Close</button>
      </div>

      <div className="footer-blur"></div>
    </div>
  );
};

export default Scores;
