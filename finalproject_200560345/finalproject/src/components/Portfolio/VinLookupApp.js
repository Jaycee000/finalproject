import { useState } from "react";

const VINLookupApp = () => {
  const [vin, setVin] = useState("");
  const [vehicleInfo, setVehicleInfo] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State để điều khiển mở/đóng popup
  const API_KEY = "Bw6lsg+m1v5ggmeJtDPQfg==1xF95qU1Iy9F6aE3";

  const handleVinSearch = () => {
    fetch(`https://api.api-ninjas.com/v1/vinlookup?vin=${vin}`, {
      headers: { "X-Api-Key": API_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        setVehicleInfo(data);
        setIsPopupOpen(true); // Mở popup khi có dữ liệu
      })
      .catch((error) => console.error("Error fetching VIN data:", error));
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Đóng popup khi người dùng nhấn đóng
  };

  // Định nghĩa style cho cửa sổ popup
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

  const resultStyle = {
    color: "#333", // Màu chữ
    backgroundColor: "#f9f9f9", // Màu nền sáng cho phần kết quả
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div>
      {/* <h4>VIN Lookup</h4> */}
      <input
        type="text"
        placeholder="Enter VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
      />
      <button onClick={handleVinSearch}>Search</button>

      {isPopupOpen && (
        <div style={popupStyle}>
          <h5>Vehicle Information</h5>
          <div style={resultStyle}>
            <pre>{JSON.stringify(vehicleInfo, null, 2)}</pre>
          </div>
          <button style={closeButtonStyle} onClick={closePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default VINLookupApp;
