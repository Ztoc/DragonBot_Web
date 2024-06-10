import { useSelector } from "react-redux";

import ToolWrapper from "../../components/dragon/ToolWrapper";

import { ImageSliceType } from "../../types/store";

const History = () => {
  const image: ImageSliceType = useSelector((state: any) => state.image);
  const TON_ICON = image.dragon.find((img) => img.name === "TON_ICON");
  const COIN_IMG = image.core.find((img) => img.name === "COIN_ICON");
  return (
    <div className="page-dragon-bg">
      <div className="header-blur"></div>
      <div className="dragon-container">
        <ToolWrapper />
        <div className="history-title">History</div>
        <div className="history-items-wrapper">
          <div className="history-item blur-round-border-bg">
            <div className="history-description">
              <div className="reward-title">
                <img src={TON_ICON?.img.src} width={41} height={41} alt="" />
                <div className="reward-amount">
                  <p>Ton Reward</p>
                  <p>0.1 TON</p>
                </div>
              </div>
              <div className="reward-status">
                <p className="reward-date">03 Oct, 08:30 AM</p>
                <p className="reward-status pending">Pending</p>
              </div>
            </div>
            <button className="btn-primary btn-claim">Claim</button>
          </div>
          <div className="history-item blur-round-border-bg">
            <div className="history-description">
              <div className="reward-title">
                <img src={COIN_IMG?.img.src} width={52} height={52} alt="" />
                <div className="reward-amount">
                  <p>Dragon Reward</p>
                  <p>4000 DRGN</p>
                </div>
              </div>
              <div className="reward-status">
                <p className="reward-date">03 Oct, 08:30 AM</p>
                <p className="reward-status success">Successfully Sent</p>
              </div>
            </div>
          </div>
          <div className="history-item blur-round-border-bg">
            <div className="history-description">
              <div className="reward-title">
                <img src={TON_ICON?.img.src} width={52} height={52} alt="" />
                <div className="reward-amount">
                  <p>Ton Reward</p>
                  <p>0.1 TON</p>
                </div>
              </div>
              <div className="reward-status">
                <p className="reward-date">03 Oct, 08:30 AM</p>
                <p className="reward-status success">Successfully Sent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-blur"></div>
    </div>
  );
};

export default History;
