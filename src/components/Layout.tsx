import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-8">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
