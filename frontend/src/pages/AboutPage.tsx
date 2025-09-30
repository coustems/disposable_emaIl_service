import { Mail, Linkedin, User, Code, Server } from "lucide-react";

const people = [
  {
    name: "Avni Sharma",
    email: "sharmaavni1401@gmail.com",
    linkedin: "https://www.linkedin.com/in/avni-sharma-559966318",
    role: "Frontend Developer",
    avatar:
      "https://ui-avatars.com/api/?name=Avni+Sharma&background=4f8cff&color=fff&size=128",
    skills: ["React", "TypeScript", "UI/UX Design", "CSS"],
    icon: <Code size={24} />,
  },
  {
    name: "Sumit Rathore",
    email: "rathoresumit10a@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumit-rathore-4515a8250",
    role: "Backend Developer",
    avatar:
      "https://ui-avatars.com/api/?name=Sumit+Rathore&background=a259ff&color=fff&size=128",
    skills: ["Node.js", "Express", "API Development", "Database"],
    icon: <Server size={24} />,
  },
];

const AboutPage = () => (
  <div
    style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 16px",
    }}
  >
    <div
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "24px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "1200px",
        minHeight: "calc(100vh - 80px)",
        padding: "60px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <User size={32} color="#667eea" />
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            About Us
          </h1>
        </div>
        <p
          style={{
            fontSize: "1.25rem",
            color: "#64748b",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Meet the passionate team behind Disposable Email Service. We're
          dedicated to building secure, fast, and user-friendly solutions that
          protect your privacy online.
        </p>
      </div>

      {/* Team Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "40px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {people.map((person) => (
          <div
            key={person.email}
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              padding: "40px 30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
            }}
          >
            {/* Avatar and Role Icon */}
            <div style={{ position: "relative", marginBottom: "24px" }}>
              <img
                src={person.avatar}
                alt={person.name}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  border: "4px solid white",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: -8,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "50%",
                  padding: "8px",
                  border: "3px solid white",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                {person.icon}
              </div>
            </div>

            {/* Name and Role */}
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "8px",
                color: "#1e293b",
              }}
            >
              {person.name}
            </h2>

            <span
              style={{
                fontSize: "1.1rem",
                color: "#667eea",
                marginBottom: "20px",
                fontWeight: 600,
                background: "rgba(102, 126, 234, 0.1)",
                padding: "6px 16px",
                borderRadius: "20px",
              }}
            >
              {person.role}
            </span>

            {/* Skills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              {person.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background:
                      "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
                    color: "#475569",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    border: "1px solid rgba(148, 163, 184, 0.2)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact Links */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <a
                href={`mailto:${person.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#64748b",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  padding: "8px 16px",
                  borderRadius: "12px",
                  background: "rgba(100, 116, 139, 0.1)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(100, 116, 139, 0.2)";
                  e.currentTarget.style.color = "#475569";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(100, 116, 139, 0.1)";
                  e.currentTarget.style.color = "#64748b";
                }}
              >
                <Mail size={16} />
                Email
              </a>

              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#0ea5e9",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  padding: "8px 16px",
                  borderRadius: "12px",
                  background: "rgba(14, 165, 233, 0.1)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(14, 165, 233, 0.2)";
                  e.currentTarget.style.color = "#0284c7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(14, 165, 233, 0.1)";
                  e.currentTarget.style.color = "#0ea5e9";
                }}
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Message */}
      <div
        style={{
          marginTop: "60px",
          textAlign: "center",
          padding: "30px",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
          borderRadius: "16px",
          border: "1px solid rgba(102, 126, 234, 0.2)",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: "12px",
          }}
        >
          Our Mission
        </h3>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#64748b",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          We believe in making the internet a safer place by providing reliable
          temporary email services that protect your privacy and keep your inbox
          clean from spam and unwanted messages.
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
