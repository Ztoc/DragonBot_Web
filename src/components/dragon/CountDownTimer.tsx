import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CountdownTimer = ({ seconds, setSeconds, type = "minute" }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let interval;

    if (seconds > 0) {
      interval = setInterval(() => {
        dispatch(setSeconds(seconds - 1));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  if (type === "minute") return <>{formatTime(seconds)}</>;
  else return <>{seconds}</>;
};

export default CountdownTimer;
