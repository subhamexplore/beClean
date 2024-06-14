import React from "react";
import "../assets/styles/Navbar.css"
import { GoArrowUpRight } from "react-icons/go";
import logo from '../assets/images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
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
                <Link className="nav-link" to={'/gallery'}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={()=>{nav('/contact'); window.location.reload();}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
