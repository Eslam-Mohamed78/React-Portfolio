import React from "react";
import style from "./Home.module.css";
import avatar from "../../Assets/images/download.jpg";

export default function Home() {
  return (
    <>
      <div className={`vh-100 ${style.home} vstack`}>
        <div
          className={`${style.content} d-flex justify-content-center`}
        >
          <div className="text-center">
            <div className="image">
              <img src={avatar} alt="not found" />
            </div>

            <h1 className={`my-4 ${style.heading}`}>START REACT</h1>

            <div className="star text-center my-4 d-flex justify-content-center align-items-center">
              <span></span>
              <i className="fa-solid fa-star mx-2 fs-2"></i>
              <span></span>
            </div>

            <p className={style.title}>
              Software Engineer - React.js Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
