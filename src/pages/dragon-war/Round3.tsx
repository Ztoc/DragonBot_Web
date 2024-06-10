import { useDispatch } from "react-redux";

import Score from "../../components/dragon/Score";
import CoinImage from "../../components/dragon/CoinImage";
import Energy from "../../components/dragon/Energy";
import ToolWrapper from "../../components/dragon/ToolWrapper";

import { setRound } from "../../store/dragonwar";

const Round3 = () => {
  const dispatch = useDispatch();
  dispatch(setRound(3));
  return (
    <div className="page-dragon-bg">
      <div className="header-blur"></div>
      <div className="dragon-container">
        <ToolWrapper />
        <div className="main-content">
          <Score />
          <CoinImage />
          <Energy />
        </div>
      </div>
      <div className="footer-blur"></div>
    </div>
  );
};

export default Round3;
