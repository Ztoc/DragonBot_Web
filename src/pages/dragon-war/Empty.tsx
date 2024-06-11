import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ToolWrapper from "../../components/dragon/ToolWrapper";

import { ImageSliceType } from "../../types/store";

const Empty = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const HISTORY_ICON = image.dragon.find((img) => img.name === "HISTORY_ICON");
  const navigate = useNavigate();

  const toHistory = () => {
    navigate("/dragon-war/history");
  };
  return (
    <div className="empty-container">
      <div className="header-blur"></div>
      <div className="dragon-container">
        <ToolWrapper />
        <div className="history-wrapper">
          <h3>Dragon Pot</h3>
          <img src={HISTORY_ICON?.img.src} alt="history" width={24} height={24} onClick={toHistory} />
        </div>
        <div className="empty-description">
          no <br /> rounds <br /> available at <br /> the moment
        </div>
      </div>
      <div className="footer-blur"></div>
    </div>
  );
};

export default Empty;
