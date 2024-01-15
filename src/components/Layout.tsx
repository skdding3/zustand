import Header from "./Header";
import { Outlet } from "react-router-dom";
import React from "react";
import { memo } from "react";

const Layout = React.memo(() => {
  return (
    <div className="p-8">
      <Header />
      <Outlet />
    </div>
  );
});

export default Layout;
