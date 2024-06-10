import { useSelector } from "react-redux";
import { AnimatedCounter } from "react-animated-counter";
import { ImageSliceType } from "../../types/store.ts";

const Score = ({ isTurbo = false }) => {
  const score = useSelector((state: any) => state.score.value);
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const COIN_IMG = image.core.find((img) => img.name === "COIN_ICON");
  return (
    <div className="flex justify-around flex-col items-center animate__animated  animate__fadeIn animate__slow my-[5%] z-[10]">
      <div className="score-time">Time: 120 sec</div>
      <div className={"score-holder flex justify-between items-center" + (isTurbo ? " turbo-counter" : "")}>
        {COIN_IMG ? <img className="mr-2" src={COIN_IMG?.img.src} alt="DragonCoin" /> : null}
        <div className="font-extrabold-count">
          <AnimatedCounter
            value={parseInt(score)}
            color="white"
            fontSize="40px"
            incrementColor="white"
            decrementColor="white"
            includeDecimals={false}
            includeCommas={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Score;
