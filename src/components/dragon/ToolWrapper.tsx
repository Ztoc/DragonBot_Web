import { useSelector } from "react-redux";
import { ImageSliceType } from "../../types/store";

const ToolWrapper = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const CLOSE_IMG = image.core.find((i) => i.name === "CLOSE_ICON");
  const OPTION_ICON = image.dragon.find((img) => img.name === "OPTION_ICON");

  return (
    <div className="tool-wrapper">
      <div className="dragon-title">
        <img src={CLOSE_IMG?.img.src} alt="close" width={16} height={16} />
        <h1>Dragon</h1>
      </div>
      <img src={OPTION_ICON?.img.src} alt="close" width={4} height={18} />
    </div>
  );
};

export default ToolWrapper;
