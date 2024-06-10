import { useSelector } from "react-redux";

import Score from "../../components/dragon/Score";
import Energy from "../../components/dragon/Energy";
import CoinImage5 from "../../components/dragon/CoinImage5";
import ToolWrapper from "../../components/dragon/ToolWrapper";

import { ImageSliceType } from "../../types/store";

const Round5 = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const Dragon1 = image.dragon.find((img) => img.name === `DRAGON1`);
  const Dragon3 = image.dragon.find((img) => img.name === `DRAGON3`);
  const Dragon4 = image.dragon.find((img) => img.name === `DRAGON4`);
  const Dragon5 = image.dragon.find((img) => img.name === `DRAGON5`);
  const Dragon6 = image.dragon.find((img) => img.name === `DRAGON6`);

  return (
    <div className="page-dragon-bg">
      <div className="header-blur"></div>
      <div className="dragon-container">
        <ToolWrapper />
        <div className="round-container">
          <Score />
          <CoinImage5 />
          <Energy />
        </div>
        <img src={Dragon1?.img.src} alt="" width={39} height={39} className="dragon1" />
        <img src={Dragon3?.img.src} alt="" width={65} height={65} className="dragon3" />
        <img src={Dragon4?.img.src} alt="" width={73} height={73} className="dragon4" />
        <img src={Dragon5?.img.src} alt="" width={55} height={55} className="dragon5" />
        <img src={Dragon6?.img.src} alt="" width={49} height={49} className="dragon6" />
      </div>
      <div className="footer-blur"></div>
    </div>
  );
};

export default Round5;
