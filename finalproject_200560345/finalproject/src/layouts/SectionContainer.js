import { useContext } from "react";
import { Context } from "../context/context";

const SectionContainer = ({ children, sectionName }) => {
  const { nav } = useContext(Context);
  return (
    <div
      className={`section ${sectionName}-section`}
      id={sectionName}
      style={{ display: nav === sectionName ? "block" : "none" }}
    >
      {children}
    </div>
  );
};
export default SectionContainer;
