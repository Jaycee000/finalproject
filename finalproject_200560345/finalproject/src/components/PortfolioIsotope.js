import Isotope from "isotope-layout";
import { Fragment, useEffect, useRef, useState } from "react";
import { portfolioHover } from "../utilits";
import PortfolioDetails from "./PortfolioDetails";

const PortfolioIsotope = () => {
  const isotope = useRef();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".grid", {
        itemSelector: ".col-12",
        percentPosition: true,
        masonry: {
          columnWidth: ".col-12",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 5000);
  });
  useEffect(() => {
    portfolioHover();
  });

  const [portfolioDetails, setPortfolioDetails] = useState(null);
  const [className, setClassName] = useState("");
  const onClick = (data) => {
    setPortfolioDetails(data);
    setClassName("preview--open");
    setTimeout(() => {
      setClassName("preview--open preview--image-loaded");
    }, 1000);
  };
  useEffect(() => {
    if (portfolioDetails) {
      document.querySelector("body").classList.add("open-portfolio-details");
    } else {
      document.querySelector("body").classList.remove("open-portfolio-details");
    }
  }, [portfolioDetails]);
  const datas = [
    {
      id: 4,
      img: "images/projects/4.jpg",
      title: "Autumn Papers",
      project: "Mobile Application",
      client: "Envato",
      langages: ["html", "css", "Js"],
      duration: "3 Months",
      bugdet: 33000,
    },
    {
      id: 1,
      img: "images/projects/1.jpg",
      title: "Globe",
      project: "Website Design",
      client: "Envato",
      langages: ["html", "css", "Js"],
      duration: "3 Months",
      bugdet: 33000,
    },
    {
      id: 3,
      img: "images/projects/3.jpg",
      title: "Colored Pens",
      project: "Photo Shooting",
      client: "Envato",
      langages: ["html", "css", "Js"],
      duration: "3 Months",
      bugdet: 33000,
    },
    {
      id: 8,
      img: "images/projects/8.jpg",
      title: "Woman Bag",
      project: "3d Object",
      client: "Envato",
      langages: ["html", "css", "Js"],
      duration: "3 Months",
      bugdet: 33000,
    },
    {
      id: 5,
      img: "images/projects/5.jpg",
      title: "halloween",
      project: "After Effect Video",
      client: "Envato",
      langages: ["html", "css", "Js"],
      duration: "3 Months",
      bugdet: 33000,
    },
    {
      id: 2,
      img: "images/projects/2.jpg",
      title: "Beautiful cat",
      project: "mobile application",
      client: "Envato",
      langages: ["html", "css", "Js"],
      duration: "3 Months",
      bugdet: 33000,
    },
    {
      id: 7,
      img: "images/projects/7.jpg",
      title: "Sofa",
      project: "Relaxing chairs",
      client: "Envato",
      langages: ["html", "css", "Js"],
      duration: "3 Months",
      bugdet: 33000,
    },
    {
      id: 6,
      img: "images/projects/6.jpg",
      title: "Bottle",
      project: "Water Project",
      client: "Envato",
      langages: ["html", "css", "Js"],
      duration: "3 Months",
      bugdet: 33000,
    }
  ];
  return (
    <Fragment>
      <div className="container portfolio-container">
        {/* Portfolio Items Starts */}
        <div className="grid row w-100 m-0 text-left">
          <div className="item-title-hover" />
          {/* Portfolio Item Starts */}
          {datas.map((data) => (
            <div
              className="grid__item col-12 col-md-6 col-lg-4"
              data-size="960x640"
              key={data.id}
            >
              <a
                className="d-block"
                href="#"
                data-title={data.title}
                data-category={data.project}
                onClick={() => onClick(data)}
              >
                {/* ¨Project Main Image Starts */}
                <img className="img-fluid" src={data.img} alt={data.title} />
                {/* ¨Project Main Image Ends */}
              </a>
              {/* Project Preview Mobile Link Starts */}
              <span className="btn main-btn d-inline-block d-md-none">
                <span>preview</span>
              </span>
              {/* Project Preview Mobile Link Ends */}
            </div>
          ))}
        </div>
        {/* Portfolio Items Ends */}
        {/* ¨Close Portfolio Item Starts */}
        <PortfolioDetails
          openClass={className}
          portfolioDetails={portfolioDetails}
          setPortfolioDetails={() => setPortfolioDetails(false)}
        />
        {/* ¨Close Portfolio Item Ends */}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
