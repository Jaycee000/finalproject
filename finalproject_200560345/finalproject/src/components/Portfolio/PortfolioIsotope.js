import { useState } from "react";
import PortfolioDetails from "./PortfolioDetails";

const PortfolioIsotope = () => {
  const [portfolioDetails, setPortfolioDetails] = useState(null);

  const datas = [
    {
      id: 1,
      img: "images/projects/hobby-app.jpg",
      title: "Random Hobbies App",
      project: "Web Application",
      type: "hobby",
      description: "Explore random hobbies fetched using the Hobbies API.",
    },
    {
      id: 2,
      img: "images/projects/vin-lookup.jpg",
      title: "VIN Lookup App",
      project: "Web Application",
      type: "vin",
      description: "Look up vehicle information by entering a VIN number.",
    },
    {
      id: 3,
      img: "images/projects/weather-app.jpg",
      title: "Weather App",
      project: "Web Application",
      type: "weather",
      description: "Get current weather data by entering city name",
    },
  ];

  return (
    <div className="portfolio-container">
      <div className="grid row">
        {datas.map((data) => (
          <div
            className="grid__item col-12 col-md-6 col-lg-4"
            key={data.id}
            onClick={() => setPortfolioDetails(data)}
          >
            <img className="img-fluid" src={data.img} alt={data.title} />
            <h4>{data.title}</h4>
          </div>
        ))}
      </div>

      {portfolioDetails && (
        <PortfolioDetails
          portfolioDetails={portfolioDetails}
          closeDetails={() => setPortfolioDetails(null)}
        />
      )}
    </div>
  );
};

export default PortfolioIsotope;
