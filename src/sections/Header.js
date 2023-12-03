import Logo from "../icons_assets/Logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <img src={Logo} alt="Little Lemon logo" />
      </Link>
    </header>
  );
};
