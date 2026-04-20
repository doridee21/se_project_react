import "./Header.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/user-avatar.png";

function Header({ handleAddBtnClick }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <p className="header__date-location">October 10, 2023 | New York, NY</p>
      <button
        className="header__clothes-btn"
        onClick={handleAddBtnClick}
        type="button"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrance Tegegne</p>
        <img className="header__avatar" src={avatar} alt="Terrance Tegegne" />
      </div>
    </header>
  );
}

export default Header;
