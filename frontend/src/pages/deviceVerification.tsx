import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import VerificationPage from "./VerificationPage";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowRight } from "lucide-react";

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
    if (
      !email.trim() ||
      !(
        email.includes("@derkmail.online") ||
        email.includes("@devilott.store") ||
        email.includes("@devilott.site")
      )
    ) {
      setError(
        "Please enter a valid email address from the luxidevilott.com domain."
      );
      return;
    }
    setError("");
    navigate(`/dashboard/${email}`);
  };

  return (
  <div className="verification-bg" style={{ background: '#fff' }}>
      <div className="verification-center">
        <div className="verification-card" style={{ background: '#fff' }}>
          <div className="verification-icon-wrapper">
            <span className={`verification-icon ${colorClass}`} style={{ background: undefined }}>
              {icon ? (
                serviceName === "Prime" ? (
                  <img src={icon} alt={serviceName} style={{ width: 60, height: 40, objectFit: 'contain' }} />
                ) : (
                  <img src={icon} alt={serviceName} style={{ width: 48, height: 48, objectFit: 'contain' }} />
                )
              ) : <span>📧</span>}
            </span>
          </div>
          <h2 className="verification-title">Disposable Email Viewer</h2>
          <p className="verification-desc">Enter your temporary email address to view its inbox.</p>
          <form className="verification-form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="verification-label">Temporary Email Address</label>
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
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <button type="submit" className="verification-btn">
              View Inbox <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeviceVerification;
