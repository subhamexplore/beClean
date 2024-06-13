import React from "react";
import "../assets/styles/Navbar.css"
import { GoArrowUpRight } from "react-icons/go";
import logo from '../assets/images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-main navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" height={30} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="" style={{color:'grey', fontSize:'30px'}}>
              <RxHamburgerMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                    Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="nav-button btn" type="submit">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
