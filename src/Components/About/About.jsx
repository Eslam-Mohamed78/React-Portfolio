import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={`${style.backGround} section `}>
        <div className={`container ${style.container} text-white`}>
          <div className=" text-center">
            <h2 className="sec-heading text-uppercase fw-bold text-white">
              About
            </h2>
            <div className="star text-center my-4 d-flex justify-content-center align-items-center">
              <span></span>
              <i className="fa-solid fa-star mx-2 fs-2 text-white"></i>
              <span></span>
            </div>
          </div>

          <div className="row">
          <div className="col-lg-6">
              <div className="left">
                <p className={style.text}>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="left">
                <p className={style.text}>
                  You can create your own custom avatar for the masthead, change
                  the icon in the dividers, and add your email address to the
                  contact form to make it fully functional!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
