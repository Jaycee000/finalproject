import HobbyApp from "./HobbyApp";
import VINLookupApp from "./VinLookupApp";
import WeatherApp from "./WeatherApp";

const PortfolioDetails = ({ portfolioDetails, closeDetails }) => {
  return (
    <div className="portfolio-details">
      <button onClick={closeDetails}>Close</button>
      <h3>{portfolioDetails.title}</h3>
      <p>{portfolioDetails.description}</p>

      {portfolioDetails.type === "hobby" && <HobbyApp />}
      {portfolioDetails.type === "vin" && <VINLookupApp />}
      {portfolioDetails.type === "weather" && <WeatherApp />}
    </div>
  );
};

export default PortfolioDetails;
