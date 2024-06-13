import React from "react";
import "../assets/styles/Navbar.css"
import { GoArrowUpRight } from "react-icons/go";
import logo from '../assets/images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-main navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="" height={30} />
          </Link>
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
                <Link className="nav-link" aria-current="page" to={'/about'}>
                  About Us
                </Link>
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
                <Link className="nav-link" to={'/gallery'}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/contact'}>
                  Contact
                </Link>
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
