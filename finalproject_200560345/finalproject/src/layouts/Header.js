import { Fragment, memo, useCallback, useContext, useState } from "react";
import { Context } from "../context/context";

const menus = [
  { id: 1, name: "home", href: "home", icon: "home" },
  { id: 2, name: "about", href: "about", icon: "article" },
  { id: 3, name: "portfolio", href: "work", icon: "cases" },
  { id: 4, name: "contact", href: "contact", icon: "email" },
  { id: 5, name: "blog", href: "blog", icon: "topic" },
];

const Header = () => {
  const { nav, sectionToggle, transition } = useContext(Context);
  const [toggle, setToggle] = useState(false);
  const [transitionBlock, setTransitionBlock] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const menuActive = useCallback(async (value) => {
    setTransitionBlock(true);
    await delay(500);
    sectionToggle(value);
    await delay(1000);
    setToggle(false);
    await delay(2000);
    setTransitionBlock(false);
  }, []);

  return (
    <Fragment>
      <div
        id="transitionblock"
        style={{ display: transition ? "block" : "none" }}
      />
      <div id="navigation" className="is-fixed">
        <a
          href="#"
          className={`navigation-trigger ${toggle ? "menu-is-open" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          Menu
          <span />
        </a>
        <nav id="main-navigation">
          <ul className={toggle ? "is-visible" : ""}>
            {menus.map((menu) => (
              <li key={menu.id}>
                <a
                  href="#home"
                  className={`link-page link-${menu.href} ${
                    nav === menu.href ? "active" : ""
                  }`}
                  onClick={() => menuActive(menu.href)}
                >
                  <span className="material-icons">{menu.icon}</span>
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};
export default memo(Header);
