// import map from "./globe.png";
import map from "../assets/globe.png";

function Header() {
  return (
    <header>
      <img src={map} alt="globe icon" />
      <h1>my travel journal.</h1>
    </header>
  );
}

export default Header;
