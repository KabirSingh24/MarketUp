import React from "react";

const Apps = () => {
  return (
    <div>
      <h1>MarketUp-Apps</h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: 0,
          listStyleType: "none",
        }}
      >
        <li style={{ marginTop: "20px" }}>
          <a href="https://www.ditto.com" style={{ textDecoration: "none" }}>
            <img
              src="dittoLogo.png"
              alt="Ditto"
              style={{
                width: "55%",
                maxWidth: "200px",
                marginBottom: "20px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            />
          </a>
        </li>
        <li style={{ marginTop: "20px" }}>
          <a href="https://www.streak.com" style={{ textDecoration: "none" }}>
            <img
              src="streakLogo.png"
              alt="Streak"
              style={{
                width: "55%",
                maxWidth: "200px",
                marginBottom: "20px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            />
          </a>
        </li>
        <li style={{ marginTop: "20px" }}>
          <a href="https://www.smallcase.com" style={{ textDecoration: "none" }}>
            <img
              src="smallcaseLogo.png"
              alt="Smallcase"
              style={{
                width: "55%",
                maxWidth: "200px",
                marginBottom: "20px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            />
          </a>
        </li>
        <li style={{ marginTop: "20px" }}>
          <a href="https://www.zerodha.com/fundhouse" style={{ textDecoration: "none" }}>
            <img
              src="zerodhaFundhouse.png"
              alt="Zerodha Fundhouse"
              style={{
                width: "55%",
                maxWidth: "200px",
                marginBottom: "20px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            />
          </a>
        </li>
        <li style={{ marginTop: "20px" }}>
          <a href="https://www.goldenpi.com" style={{ textDecoration: "none" }}>
            <img
              src="goldenpiLogo.png"
              alt="GoldenPi"
              style={{
                width: "55%",
                maxWidth: "200px",
                marginBottom: "20px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            />
          </a>
        </li>
        <li style={{ marginTop: "20px" }}>
          <a href="http://localhost:3000" style={{ textDecoration: "none" }}>
            <img
              src="MarketUp.png"
              alt="MarketUp"
              style={{
                width: "55%",
                maxWidth: "200px",
                marginBottom: "20px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Apps;
