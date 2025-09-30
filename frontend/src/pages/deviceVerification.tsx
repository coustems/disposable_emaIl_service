import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./VerificationPage.css";

const DeviceVerification = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const bgColor = location.state?.bgColor || "card-red";
  const serviceName = location.pathname.split("/")[1];

  let colorClass = bgColor;
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
      colorClass = bgColor;
      icon = "";
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@derkmail.online")) {
      setError(
        "Please enter a valid email address from our supported domains: @derkmail.online"
      );
      return;
    }
    setError("");
    navigate(`/dashboard/${encodeURIComponent(email)}`);
  };

  return (
    <div className="verification-bg">
      <div className="verification-center">
        <div className="verification-card">
          <div className="verification-icon-wrapper">
            <span className={`verification-icon ${colorClass}`}>
              {icon ? (
                <img
                  src={icon}
                  alt={serviceName}
                  style={{ width: 48, height: 48, objectFit: "contain" }}
                />
              ) : (
                <span>📧</span>
              )}
            </span>
          </div>
          <h2 className="verification-title">Disposable Email Viewer</h2>
          <p className="verification-desc">
            Enter your temporary email address to view its inbox.
          </p>
          <form className="verification-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="verification-label">
              Temporary Email Address
            </label>
            <input
              type="email"
              id="email"
              className="verification-input"
              placeholder="Enter your mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <div
                style={{
                  color: "#dc2626",
                  fontSize: "0.9rem",
                  marginTop: "8px",
                }}
              >
                {error}
              </div>
            )}
            <button type="submit" className={`verification-btn ${colorClass}`}>
              View Inbox &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeviceVerification;
