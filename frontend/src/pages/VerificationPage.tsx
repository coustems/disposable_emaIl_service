import React from "react";
import "./VerificationPage.css";
import { useLocation } from "react-router-dom";

interface VerificationPageProps {
  serviceName: string;
  colorClass: string;
  icon?: string;
}

const VerificationPage: React.FC<VerificationPageProps> = ({ serviceName, colorClass, icon }) => {
  return (
    <div className="verification-bg">
      <div className="verification-center">
        <div className={`verification-card ${colorClass}`}>  
          <div className="verification-icon-wrapper">
            <span className="verification-icon">
              {icon ? <img src={icon} alt={serviceName} style={{ width: 48, height: 48 }} /> : <span>📧</span>}
            </span>
          </div>
          <h2 className="verification-title">Disposable Email Viewer</h2>
          <p className="verification-desc">Enter your temporary email address to view its inbox.</p>
          <form className="verification-form">
            <label htmlFor="email" className="verification-label">Temporary Email Address</label>
            <input
              type="email"
              id="email"
              className="verification-input"
              placeholder="Enter your mail"
              required
            />
            <button type="submit" className="verification-btn">View Inbox &rarr;</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Example usage with router state
const VerificationPageWrapper: React.FC = () => {
  const location = useLocation();
  const { bgColor } = location.state || {};
  const serviceName = location.pathname.split("/")[1];
  let colorClass = "";
  let icon = "";
  switch (serviceName) {
    case "NF":
      colorClass = "card-red";
      icon = "/images/netmirror.jpg";
      break;
    case "Crunchy":
      colorClass = "card-orange";
      icon = "/images/crunchyroll.png";
      break;
    case "Prime":
      colorClass = "card-blue";
      icon = "/images/prime2.png";
      break;
    case "YT Premium":
      colorClass = "card-red2";
      icon = "/images/youtube.png";
      break;
    default:
      colorClass = bgColor || "card-red";
      icon = "";
  }
  return <VerificationPage serviceName={serviceName} colorClass={colorClass} icon={icon} />;
};

export default VerificationPageWrapper;
