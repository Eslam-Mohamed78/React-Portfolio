import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container py-3 px-5">
          <Link className={`${style.logo} navbar-brand text-white`} href="">
            START REACT
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item mx-3 text-white">
                <Link className="nav-link active text-reset" aria-current="page" to="home">
                  HOME
                </Link>
              </li>
              <li className="nav-item mx-3 text-white">
                <Link className="nav-link text-reset" to="portfolio">
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item mx-3 text-white">
                <Link className="nav-link text-reset" to="about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item mx-3 text-white">
                <Link className="nav-link text-reset" to="contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
