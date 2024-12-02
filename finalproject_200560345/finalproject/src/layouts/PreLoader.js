import { useEffect } from "react";

const PreLoader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("body").classList.add("loaded");
    }, 1000);
  });

  return (
    <div id="loader-wrapper">
      <div id="loader" />
      <div className="loader-section section-left" />
      <div className="loader-section section-right" />
    </div>
  );
};
export default PreLoader;
