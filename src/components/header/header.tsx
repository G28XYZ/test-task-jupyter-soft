import { NavLink } from "react-router-dom";

import logo from "../../images/logo.svg";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__menu">
        <div className="header__logo">
          <img src={logo} alt="" className="header__logo-image" />
          <p className="header__logo-name">Agency</p>
        </div>
        <nav>
          <ul className="header__list">
            <li className="header__list-item">
              <NavLink to="/" className="header__link">
                About
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="/" className="header__link">
                Services
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="/" className="header__link">
                Pricing
              </NavLink>
            </li>
            <li className="header__list-item">
              <NavLink to="/" className="header__link">
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="header__button button button_outline">
          CONTACT
        </button>
      </div>
      <h1 className="header__title">Portfolio</h1>
      <p className="header__about">
        Agency provides a full service range including technical skills, design,
        business understanding.
      </p>
    </header>
  );
}

export default Header;
