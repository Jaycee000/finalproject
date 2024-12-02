import { Fragment, useEffect } from "react";
import Header from "./Header";
import Switcher from "./Switcher";
const Layout = ({ children }) => {
 
  return (
    <Fragment>
      <Switcher />
      <Header />
      {children}
    </Fragment>
  );
};
export default Layout;
