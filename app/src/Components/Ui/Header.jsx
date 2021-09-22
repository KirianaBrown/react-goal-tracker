import "./Header.css";

import { GiAcorn } from "react-icons/gi";

const Header = () => {
  return (
    <header className="header">
      <GiAcorn className="logo" />
      <p className="title">GOAL Tracker</p>
    </header>
  );
};

export default Header;
