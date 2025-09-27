
import React from "react";

const people = [
  {
    name: "Avni Sharma",
    email: "sharmaavni1401@gmail.com",
    linkedin: "https://www.linkedin.com/in/avni-sharma-559966318",
    role: "Frontend Developer",
    avatar: "https://ui-avatars.com/api/?name=Avni+Sharma&background=2d3748&color=fff&size=128"
  },
  {
    name: "Sumit Rathore",
    email: "rathoresumit10a@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumit-rathore-4515a8250",
    role: "Backend Developer",
    avatar: "https://ui-avatars.com/api/?name=Sumit+Rathore&background=4a5568&color=fff&size=128"
  }
];

const AboutPage = () => (
  <div style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #4f8cff 0%, #a259ff 100%)", // Modern blue-purple gradient
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px"
  }}>
    <div style={{
      background: "linear-gradient(135deg, #f3f8ff 0%, #e0e7ff 100%)", // Soft gradient for inner card
      borderRadius: "18px",
      boxShadow: "0 12px 40px rgba(44,62,80,0.13)",
      width: "100%",
      minHeight: "calc(100vh - 80px)",
      padding: "60px 0 40px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{
        fontSize: "2.3rem",
        fontWeight: 700,
        marginBottom: 10,
        color: "#4f8cff",
        textAlign: "center",
        letterSpacing: "1px"
      }}>About Us</h1>
      <p style={{
        fontSize: "1.13rem",
        color: "#6b21a8",
        marginBottom: 36,
        textAlign: "center"
      }}>
        Meet the team behind Disposable Email Service. We are committed to building secure, fast, and user-friendly solutions for everyone.
      </p>
      <div style={{
        display: "flex",
        gap: "36px",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {people.map(person => (
          <div key={person.email} style={{
            background: "#f8fafc",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(44,62,80,0.10)",
            padding: "28px 20px",
            minWidth: 210,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <img src={person.avatar} alt={person.name} style={{width:68, height:68, borderRadius:"50%", marginBottom:14, boxShadow:"0 2px 8px rgba(44,62,80,0.10)"}} />
            <h2 style={{fontSize:"1.28rem", fontWeight:600, marginBottom:4, color:"#2d3748"}}>{person.name}</h2>
            <span style={{fontSize:"1rem", color:"#c53030", marginBottom:8, fontWeight:500}}>{person.role}</span>
            <a href={`mailto:${person.email}`} style={{fontSize:"0.99rem", color:"#222", textDecoration:"none", marginBottom:6, fontWeight:500}}>{person.email}</a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" style={{fontSize:"0.99rem", color:"#0ea5e9", textDecoration:"underline"}}>LinkedIn</a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
