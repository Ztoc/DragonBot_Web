import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Score from "../../components/dragon/Score";
import CoinImage from "../../components/dragon/CoinImage";
import Energy from "../../components/dragon/Energy";
import ToolWrapper from "../../components/dragon/ToolWrapper";

import { setRound } from "../../store/dragonwar";
import { useNavigate } from "react-router-dom";

const Round1 = () => {
  const navigate = useNavigate();
  const duration = useSelector((state: any) => state.dragonwar.duration);
  if (duration === 0) {
    navigate("/dragon-war/end");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRound(1));
  }, []);

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

export default Round1;
