// Type for fetched email
type FetchedEmail = {
  id: string;
  from: string;
  subject: string;
  snippet: string;
  body: string;
  timestamp: string | number;
};

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, RefreshCw } from "lucide-react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

interface SafeEmailBodyProps {
  htmlContent: string;
}

const SafeEmailBody: React.FC<SafeEmailBodyProps> = ({ htmlContent }) => {
  const cleanHTML: string = DOMPurify.sanitize(htmlContent);

  return (
    <div
      className="w-full h-auto overflow-x-auto prose max-w-none"
      style={{
        wordBreak: "break-word",
        overflowWrap: "break-word",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>{parse(cleanHTML)}</div>
      <style>{`
        .prose img {
          max-width: 100%;
          height: auto;
        }
        .prose table {
          width: 100%;
          border-collapse: collapse;
        }
        .prose iframe, .prose video {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

const EmailDashboard = () => {
  const [emails, setEmails] = useState<FetchedEmail[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<FetchedEmail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { emailAddress } = useParams<{ emailAddress: string }>();
  const navigate = useNavigate();

  const fetchEmails = async () => {
    if (!emailAddress) return;
    setIsLoading(true);
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const response = await fetch(
        `${apiUrl}/api?to=${encodeURIComponent(emailAddress)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch emails from server.");
      }
      const data: FetchedEmail[] = await response.json();
      setEmails(data);
    } catch (err: any) {
      console.error("Fetch error:", err);
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, [emailAddress]);

  if (!emailAddress) {
    return <div>Error: No email address provided.</div>;
  }

  // Inbox view
  if (!selectedEmail) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #faf3e0, #fdfdf9)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#fffdf7",
            minHeight: "100vh",
            borderLeft: "1px solid #e0d5c1",
            borderRight: "1px solid #e0d5c1",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              borderBottom: "2px solid #e0d5c1",
              paddingBottom: "15px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  margin: "0 0 5px 0",
                  color: "#4e342e",
                }}
              >
                Inbox for {emailAddress}
              </h1>
              <p
                style={{
                  color: "#7b6a58",
                  margin: "0",
                  fontSize: "14px",
                }}
              >
                {emails.length} message(s) found.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                variant="outline"
                asChild={false}
                onClick={() => navigate("/")}
                style={{
                  backgroundColor: "#f8f4ec",
                  border: "1px solid #d6c6a8",
                  color: "#4e342e",
                  fontWeight: 500,
                  padding: "8px 16px",
                }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={fetchEmails}
                disabled={isLoading}
                style={{
                  backgroundColor: "#d4a017",
                  border: "1px solid #b58900",
                  color: "white",
                  fontWeight: 500,
                  padding: "8px 16px",
                }}
              >
                <RefreshCw
                  className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
                />
                Refresh
              </Button>
            </div>
          </div>

          {/* Loading */}
          {isLoading && (
            <div
              style={{
                textAlign: "center",
                padding: "40px",
                color: "#7b6a58",
              }}
            >
              Loading emails...
            </div>
          )}

          {/* Error */}
          {error && (
            <div
              style={{
                color: "#842029",
                backgroundColor: "#f8d7da",
                border: "1px solid #f5c6cb",
                borderRadius: "6px",
                padding: "12px",
                marginBottom: "20px",
              }}
            >
              Error: {error}
            </div>
          )}

          {/* Emails list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {emails.map((email) => (
              <div
                key={email.id}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #e0d5c1",
                  borderRadius: "10px",
                  cursor: "pointer",
                  padding: "15px 20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                }}
                onClick={() => setSelectedEmail(email)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fdf8ee";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#7b6a58",
                      marginBottom: "4px",
                      fontWeight: 500,
                    }}
                  >
                    {email.from}
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#4e342e",
                      marginBottom: "6px",
                      lineHeight: "1.3",
                    }}
                  >
                    {email.subject}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#7b6a58",
                      lineHeight: "1.4",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {email.snippet}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#a1887f",
                    marginLeft: "15px",
                    flexShrink: 0,
                    textAlign: "right",
                  }}
                >
                  {new Date(email.timestamp).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year:
                      new Date(email.timestamp).getFullYear() !==
                      new Date().getFullYear()
                        ? "numeric"
                        : undefined,
                  })}
                  <br />
                  {new Date(email.timestamp).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {emails.length === 0 && !isLoading && !error && (
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#7b6a58",
              }}
            >
              <h3 style={{ margin: "0 0 10px 0", color: "#4e342e" }}>
                No emails found
              </h3>
              <p style={{ margin: "0", fontSize: "14px" }}>
                This inbox is empty. Emails will appear here when they arrive.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Single email view
  return (
    <div
      className="container mx-auto p-4"
      style={{ background: "#faf3e0", minHeight: "100vh" }}
    >
      <Button
        variant="outline"
        asChild={false}
        onClick={() => setSelectedEmail(null)}
        className="mb-4"
        style={{
          backgroundColor: "#f8f4ec",
          border: "1px solid #d6c6a8",
          color: "#4e342e",
          fontWeight: 500,
          padding: "8px 16px",
        }}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Inbox
      </Button>
      <Card
        style={{
          border: "1px solid #e0d5c1",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
        }}
      >
        <CardHeader>
          <p className="text-sm" style={{ color: "#7b6a58" }}>
            From: {selectedEmail.from}
          </p>
          <CardTitle style={{ color: "#4e342e" }}>
            {selectedEmail.subject}
          </CardTitle>
          <p className="text-sm" style={{ color: "#7b6a58" }}>
            At: {new Date(selectedEmail.timestamp).toLocaleString()}
          </p>
        </CardHeader>
        <CardContent>
          <SafeEmailBody htmlContent={selectedEmail.body} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailDashboard;
