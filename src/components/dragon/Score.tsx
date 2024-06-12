import { useSelector } from "react-redux";
import { AnimatedCounter } from "react-animated-counter";
import { ImageSliceType } from "../../types/store.ts";
import CountdownTimer from "./CountDownTimer.tsx";
import { setDuration } from "../../store/dragonwar.ts";

const Score = ({ isTurbo = false }) => {
  const score = useSelector((state: any) => state.score.value);
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const COIN_IMG = image.core.find((img) => img.name === "COIN_ICON");
  const duration = useSelector((state: any) => state.dragonwar.duration);
  return (
    <div className="flex justify-around flex-col items-center animate__animated  animate__fadeIn animate__slow my-[5%] z-[10]">
      <div className="score-time" style={{ display: "flex" }}>
        Time: &nbsp;
        <p style={{ color: duration < 10 ? "red" : "" }}>
          <CountdownTimer seconds={duration} setSeconds={setDuration} type="seconds" />
        </p>{" "}
        &nbsp; sec
      </div>
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
