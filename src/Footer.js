import logo from "./img/Logo.svg";

export const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Little lemon logo" />
      <ul>
        <p>Site links</p>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Order online</a>
        </li>
      </ul>
      <ul>
        <p>Contact</p>
        <li>
          <a href="tel:888-321-2032">888-321-2032</a>
        </li>
        <li>
          <a href="">contactme@lemon.org</a>
        </li>
        <li>321 Fruit Dr.</li>
      </ul>
      <ul>
        <p>Social links</p>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Reddit</a>
        </li>
      </ul>
    </footer>
  );
};
