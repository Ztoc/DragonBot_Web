import { useSelector } from "react-redux";

import ToolWrapper from "../../components/dragon/ToolWrapper";

import { ImageSliceType } from "../../types/store";

const End = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const CUP = image.dragon.find((img) => img.name === "CUP_ICON");
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
          <h3>0:20</h3>
        </div>
      </div>
      <div className="footer-blur"></div>
    </div>
  );
};

export default End;
