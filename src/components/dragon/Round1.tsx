import MedalSelections from "../components/MedalSelections";
import CoinImage from "../dashboard/CoinImage";
import DragonHead from "../dashboard/DragonHead";
import Energy from "../dashboard/Energy";
import Score from "../dashboard/Score";
import League from "./League";

const Round1 = () => {
  return (
    <div className="page-dragon-bg">
      <div className="add-pad tap z-[10]">
        <div className="container">
          <Score1 />
          <CoinImage1 />
          <Energy1 />
        </div>
      </div>
    </div>
  );
};

export default Round1;
