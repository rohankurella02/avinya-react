import React from "react";
import BottomNavbar from "./BottomNavbar";

const Layout = (props) => {
  return (
    <div className="w-full mx-auto max-w-4xl">
      {props.children}
      <BottomNavbar />
    </div>
  );
};

export default Layout;
