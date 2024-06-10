import { useSelector } from "react-redux";
import { ImageSliceType } from "../../types/store";

const MedalSelections = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const Bronze_medal = image.dragon.find((img) => img.name === "BRONZE_MEDAL");
  const Silver_medal = image.dragon.find((img) => img.name === "SILVER_MEDAL");
  const Gold_medal = image.dragon.find((img) => img.name === "GOLD_MEDAL");
  return (
    <div className="medal-selections  blur-dragon-round">
      <div className="medal-select">
        <img src={Bronze_medal?.img.src} className="medal" alt="" />
        <p>
          0.2 TON <br /> TICKET
        </p>
      </div>
      <div className="medal-select">
        <img src={Silver_medal?.img.src} className="medal" alt="" />
        <p>
          0.5 TON <br /> TICKET
        </p>
      </div>
      <div className="medal-select">
        <img src={Gold_medal?.img.src} className="medal" alt="" />
        <p>
          1 TON <br /> TICKET
        </p>
      </div>
    </div>
  );
};

export default MedalSelections;
