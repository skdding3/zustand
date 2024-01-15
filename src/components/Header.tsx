import { Link } from "react-router-dom";
import React from "react";

const Header = React.memo(() => {
  return (
    <nav className="mb-4 flex space-x-5 border-b-2 py-2">
      <Link to="/">Home</Link>
      <Link to="/axios-query">Axios Query</Link>
      <Link to="/react-query">React Query</Link>
      <Link to="/zustand">Zustand</Link>
      <Link to="/recoil">Recoil</Link>
      <Link to="/stylex">StyleX</Link>
    </nav>
  );
});

export default Header;
