import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={`${style.container} container section`}>
        <div className={`${style.title} text-center`}>
          <h2 className="sec-heading text-uppercase fw-bold">contact me</h2>
          <div className="star text-center my-4 d-flex justify-content-center align-items-center">
            <span></span>
            <i className="fa-solid fa-star mx-2 fs-2"></i>
            <span></span>
          </div>
        </div>

        <form action="">
          <div className={`${style.input}`}>
            <input
              type="text"
              name="y-name"
              placeholder="Name"
              className=" w-100 py-4"
            />
          </div>
          <div className={`${style.input}`}>
            <input
              type="email"
              name="y-email"
              placeholder="Email Address"
              className=" w-100 py-4"
            />
          </div>
          <div className={`${style.input}`}>
            <input
              type="tel"
              name="y-phone"
              placeholder="Phone Number"
              className=" w-100 py-4"
            />
          </div>
          <div className={style.input}>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className=" w-100 py-4"
            ></textarea>
          </div>
          <button className={`btn btn-success mt-5 ${style.submit}`} type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
