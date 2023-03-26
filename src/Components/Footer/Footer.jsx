import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={`${style.footer}`}>
        <div className="container">
          <div className="row text-center gy-5">
            <div className="col-lg-4">
              <div>
                <h3 className=" mb-4 fw-bold">LOCATION</h3>
                <p className=" mb-0">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div>
                <h3 className=" mb-4 fw-bold">AROUND THE WEB</h3>
                <ul className={`${style.social} list-unstyled hstack justify-content-center gap-3`}>
                  <li>
                    <i className="fa-brands fa-facebook-f"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-dribbble"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div>
                <h3 className=" mb-4 fw-bold">ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.copyRight}>
        <p className="text-center mb-0">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
