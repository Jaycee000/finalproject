import { Fragment } from "react";
const PortfolioDetails = ({
  openClass,
  portfolioDetails,
  setPortfolioDetails,
}) => {
  return (
    <Fragment>
      <div className={`preview ${portfolioDetails ? openClass : ""}`}>
        <button
          className="action action--close"
          onClick={() => setPortfolioDetails()}
        >
          <span className="position-relative d-block">
            <span className="navigation-close-line" />
            <span className="navigation-close-line" />
          </span>
        </button>
        <div className="description description--preview">
          <h3>{portfolioDetails && portfolioDetails.title}</h3>
          <div className="details">
            <ul className="list-unstyled">
              <li>
                <span>Project : </span>
                <span>{portfolioDetails && portfolioDetails.project}</span>
              </li>
              <li>
                <span>Client : </span>
                <span>{portfolioDetails && portfolioDetails.client}</span>
              </li>
              <li>
                <span>Langages : </span>
                <span>
                  {" "}
                  {portfolioDetails &&
                    portfolioDetails.langages.map((langages, i) => (
                      <Fragment key={i}>{langages}, </Fragment>
                    ))}
                </span>
              </li>
              <li>
                <span>Duration : </span>
                <span>{portfolioDetails && portfolioDetails.duration}</span>
              </li>
              <li>
                <span>Bugdet : </span>
                <span>${portfolioDetails && portfolioDetails.bugdet}</span>
              </li>
            </ul>
            {/* Project Preview Desktop Link Starts */}
            <span
              className="btn main-btn d-none d-md-inline-block"
              onclick="window.open('#')"
            >
              <span>preview</span>
            </span>
            {/* Project Preview Desktop Link Ends */}
          </div>
        </div>
        <img
          className="original"
          style={{ opacity: portfolioDetails ? 1 : 0 }}
          src={portfolioDetails && portfolioDetails.img}
        />
        {/* <img className="clone" src="/images/projects/4.jpg" /> */}
      </div>
    </Fragment>
  );
};
export default PortfolioDetails;
