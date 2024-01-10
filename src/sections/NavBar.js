import { Header } from "./Header";
import { Navigation } from "../components/Navigation";

export function NavBar() {
  return (
    <div className="nav-flex-box header-nav margin-bottom-md">
      <Header />

      <Navigation />
    </div>
  );
}
