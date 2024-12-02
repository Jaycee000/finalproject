import { Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../context/context";

const colors = [
  { id: 1, name: "amber" },
  { id: 2, name: "blue" },
  { id: 3, name: "brown" },
  { id: 4, name: "cyan" },
  { id: 5, name: "deeporange" },
  { id: 6, name: "deeppurple" },
  { id: 7, name: "green" },
  { id: 8, name: "grey" },
  { id: 9, name: "indigo" },
  { id: 10, name: "lightblue" },
  { id: 11, name: "pink" },
  { id: 12, name: "purple" },
  { id: 13, name: "red" },
  { id: 14, name: "teal" },
];

const Switcher = () => {
  const { setActiveStyleSheet } = useContext(Context);

  const [settingToggle, setSettingToggle] = useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (theme !== null) {
      if (theme === "dark") {
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
      } else {
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
      }
    }
  }, [theme]);

  // setActiveStyleSheet

  return (
    <Fragment>
      <div
        id="switcher"
        className={settingToggle ? "opened" : "close"}
        style={{
          display: settingToggle ? "block" : "none",
        }}
      >
        <div className="content-switcher">
          <h4>COLOR SWITCHER</h4>
          <ul>
            {colors.map((color) => (
              <li key={color.id}>
                <a
                  href="#"
                  onClick={() => setActiveStyleSheet(color.name)}
                  title={color.name}
                  className={`color ml-2`}
                >
                  <img
                    src={`images/styleswitcher/${color.name}.png`}
                    alt={color.name}
                  />
                </a>
              </li>
            ))}
          </ul>
          <hr />
          <h4>BODY SKIN</h4>
          <label onClick={() => setTheme("dark")}>
            <input
              className="dark_switch"
              type="radio"
              name="color_style"
              id="is_dark"
              defaultValue="dark"
              defaultChecked="checked"
            />{" "}
            Dark
          </label>
          <label onClick={() => setTheme("light")}>
            <input
              className="dark_switch"
              type="radio"
              name="color_style"
              id="is_light"
              defaultValue="light"
            />{" "}
            Light
          </label>
          <div id="hideSwitcher" onClick={() => setSettingToggle(false)}>
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className="styleSecondColor"
        style={{ display: settingToggle ? "none" : "block" }}
        onClick={() => setSettingToggle(true)}
      >
        <i className="fa fa-cog fa-spin" />
      </div>
    </Fragment>
  );
};
export default Switcher;
