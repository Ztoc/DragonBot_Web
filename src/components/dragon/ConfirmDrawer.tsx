import { useDispatch, useSelector } from "react-redux";
import { setConfirm } from "../../store/dragonwar";
import { useNavigate } from "react-router-dom";
import { ImageSliceType } from "../../types/store";

const ConfirmDrawer = () => {
  const isConfrim = useSelector((state: any) => state.dragonwar.isConfirm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const Silver_medal = image.dragon.find((img) => img.name === "SILVER_EXTRALARGE_MEDAL");
  const CLOSE_ICON = image.core.find((img) => img.name === "CLOSE_ICON");

  return (
    <div className={`drawer-wrapper ${isConfrim ? "move" : ""}`}>
      <div className="confirm-drawer  blur-dragon-round">
        <div
          className="confirm-close"
          onClick={() => {
            dispatch(setConfirm(false));
          }}
        >
          <img src={CLOSE_ICON?.img.src} alt="close" width={16} height={16} />
        </div>
        <img src={Silver_medal?.img.src} alt="sliver medal" width={130} height={160} />
        <p>Spend 1 Silver Ticket?</p>
        <button
          className="btn-primary btn-confirm-enter"
          onClick={(e) => {
            navigate("/dragon-war/wait");
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default ConfirmDrawer;
