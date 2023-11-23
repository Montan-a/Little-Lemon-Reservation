import logo from "./icons_assets/Logo.svg";

export const Footer = () => {
  return (
    <footer className="footer-nav">
      <img src={logo} alt="Little lemon logo" />
      <ul className="footer-list">
        <p>Site links</p>
        <li>
          <a href="" className="list-item-nav">
            Home
          </a>
        </li>
        <li>
          <a href="" className="list-item-nav">
            About
          </a>
        </li>
        <li>
          <a href="" className="list-item-nav">
            Menu
          </a>
        </li>
        <li>
          <a href="" className="list-item-nav">
            Order online
          </a>
        </li>
      </ul>
      <ul className="footer-list">
        <p>Contact</p>
        <li className="list-item">888-321-2032</li>
        <li className="list-item">contactme@lemon.org</li>
        <li className="list-item">321 Fruit Dr.</li>
      </ul>
      <ul className="footer-list">
        <p>Social links</p>
        <li>
          <a href="" className="list-item-nav">
            Facebook
          </a>
        </li>
        <li>
          <a href="" className="list-item-nav">
            Twitter
          </a>
        </li>
        <li>
          <a href="" className="list-item-nav">
            Instagram
          </a>
        </li>
        <li>
          <a href="" className="list-item-nav">
            Reddit
          </a>
        </li>
      </ul>
    </footer>
  );
};
