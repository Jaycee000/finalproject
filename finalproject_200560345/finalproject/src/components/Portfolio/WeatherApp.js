import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "e5eb5320f9db344026b98bee2a0691d2";

  const fetchWeatherData = () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    setLoading(true);
    setError(null);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`City not found or HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
        setIsPopupOpen(true); // Mở popup khi có dữ liệu
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Đóng popup
  };

  // Style cho kết quả hiển thị
  const resultStyle = {
    color: "#333", // Màu chữ đen
    backgroundColor: "#f9f9f9", // Nền sáng
    padding: "10px",
    borderRadius: "5px",
    lineHeight: "1.5",
  };

  const popupStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: "1000",
    width: "80%",
    maxWidth: "600px",
    overflowY: "scroll", // Cuộn nếu nội dung dài
    maxHeight: "80vh", // Giới hạn chiều cao pop-up
  };

  const closeButtonStyle = {
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
  };

  return (
    <div>
      {/* <h4>Weather Lookup</h4> */}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {isPopupOpen && weatherData && (
        <div style={popupStyle}>
          <h5>Weather Information</h5>
          <div style={resultStyle}>
            <p style={{ color: "#333" }}><strong style={{ color: "#000" }}>City:</strong> {weatherData.name}</p>
            <p style={{ color: "#333" }}><strong style={{ color: "#000" }}>Temperature:</strong> {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p style={{ color: "#333" }}><strong style={{ color: "#000" }}>Condition:</strong> {weatherData.weather[0].description}</p>
            <p style={{ color: "#333" }}><strong style={{ color: "#000" }}>Humidity:</strong> {weatherData.main.humidity}%</p>
            <p style={{ color: "#333" }}><strong style={{ color: "#000" }}>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
          </div>
          <button style={closeButtonStyle} onClick={closePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
