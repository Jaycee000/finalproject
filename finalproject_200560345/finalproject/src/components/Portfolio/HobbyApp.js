import { useEffect, useState } from "react";

const HobbyApp = () => {
  const [hobbies, setHobbies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Điều khiển hiển thị cửa sổ pop-up
  const API_KEY = "Bw6lsg+m1v5ggmeJtDPQfg==1xF95qU1Iy9F6aE3";

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/hobbies?category=general", {
      headers: {
        "X-Api-Key": API_KEY
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setHobbies(data);
        } else if (data && data.hobby) {
          setHobbies([data.hobby]);
        } else {
          setError("API response structure not as expected.");
        }
      })
      .catch((error) => {
        console.error("Error fetching hobbies:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
        setIsPopupOpen(true); // Mở cửa sổ pop-up ngay khi dữ liệu được tải xong
      });
  }, []);

  // Popup style
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
    overflowY: "scroll", // Để cuộn nếu nội dung dài
    maxHeight: "80vh" // Giới hạn chiều cao pop-up
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
      {/* <h4>Random Hobbies App</h4>
      <p>Explore random hobbies fetched using the Hobbies API.</p> */}
      {loading ? (
        <p>Loading hobbies...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        // Hiển thị cửa sổ pop-up ngay sau khi dữ liệu được tải và tránh hiển thị phần này ở ngoài pop-up
        isPopupOpen && (
          <div style={popupStyle}>
            <h5>All Hobbies</h5>
            <ul>
              {hobbies.map((hobby, index) => (
                <li key={index}>
                  {hobby}{" "}
                  <a href={`https://wikipedia.org/wiki/${hobby}`} target="_blank" rel="noopener noreferrer">
                    Learn more
                  </a>
                </li>
              ))}
            </ul>
            <button style={closeButtonStyle} onClick={() => setIsPopupOpen(false)}>
              Close
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default HobbyApp;
