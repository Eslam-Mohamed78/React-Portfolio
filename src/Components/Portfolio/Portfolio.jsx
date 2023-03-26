import style from "./Portfolio.module.css";
import cabin from "./../../Assets/images/cabin.png";
import cake from "./../../Assets/images/cake.png";
import circus from "./../../Assets/images/circus.png";
import game from "./../../Assets/images/game.png";
import safe from "./../../Assets/images/safe.png";
import submarine from "./../../Assets/images/submarine.png";

export default function Portfolio() {
  return (
    <>
      {/* main section */}
      <div className="container text-center section pt-5">
        <div className={`${style.title}`}>
          <h2 className="sec-heading text-uppercase fw-bold">portfolio</h2>
          <div className="star text-center my-4 d-flex justify-content-center align-items-center">
            <span></span>
            <i className="fa-solid fa-star mx-2 fs-2"></i>
            <span></span>
          </div>
        </div>

        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className={`${style.image} position-relative`}>
              <img src={cabin} alt="LOG CABIN" className=" w-100" />
              <div
                className={`${style.bgLayer} position-absolute top-0 w-100 h-100`}
              >
                <i
                  className="fa-solid fa-plus"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                ></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`${style.image} position-relative`}>
              <img src={cake} alt="TASTY CAKE" className=" w-100" />
              <div
                className={`${style.bgLayer} position-absolute top-0 w-100 h-100`}
              >
                <i
                  className="fa-solid fa-plus"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                ></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`${style.image} position-relative`}>
              <img src={circus} alt="CIRCUS TENT" className=" w-100" />
              <div
                className={`${style.bgLayer} position-absolute top-0 w-100 h-100`}
              >
                <i
                  className="fa-solid fa-plus"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                ></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`${style.image} position-relative`}>
              <img src={game} alt="CONTROLLER" className=" w-100" />
              <div
                className={`${style.bgLayer} position-absolute top-0 w-100 h-100`}
              >
                <i
                  className="fa-solid fa-plus"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                ></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`${style.image} position-relative`}>
              <img src={safe} alt="LOCKED SAFE" className=" w-100" />
              <div
                className={`${style.bgLayer} position-absolute top-0 w-100 h-100`}
              >
                <i
                  className="fa-solid fa-plus"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                ></i>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className={`${style.image} position-relative`}>
              <img src={submarine} alt="SUBMARINE" className=" w-100" />
              <div
                className={`${style.bgLayer} position-absolute top-0 w-100 h-100`}
              >
                <i
                  className="fa-solid fa-plus"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal6"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 1 --> */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className={`${style.close} btn-close ms-auto me-5 mt-5`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className={`modal-body py-0 text-center ${style.body}`}>
              {/* title */}
              <div className={`${style.title} mb-3`}>
                <h2 className="sec-heading text-uppercase fw-bold">
                  LOG CABIN
                </h2>
                <div className="star text-center my-4 d-flex justify-content-center align-items-center">
                  <span></span>
                  <i className="fa-solid fa-star mx-2 fs-2"></i>
                  <span></span>
                </div>
              </div>

              {/* img */}
              <img src={cabin} alt="LOG CABIN" className=" w-100" />

              {/* content */}
              <p className=" mx-5 my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
              </p>
            </div>

            <div className="modal-footer mx-auto border-top-0 pt-0">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark me-2 p-2"></i>
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 2 --> */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className={`${style.close} btn-close ms-auto me-5 mt-5`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className={`modal-body py-0 text-center ${style.body}`}>
              {/* title */}
              <div className={`${style.title} mb-3`}>
                <h2 className="sec-heading text-uppercase fw-bold">
                  TASTY CAKE
                </h2>
                <div className="star text-center my-4 d-flex justify-content-center align-items-center">
                  <span></span>
                  <i className="fa-solid fa-star mx-2 fs-2"></i>
                  <span></span>
                </div>
              </div>

              {/* img */}
              <img src={cake} alt="TASTY CAKE" className=" w-100" />

              {/* content */}
              <p className=" mx-5 my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
              </p>
            </div>

            <div className="modal-footer mx-auto border-top-0 pt-0">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark me-2 p-2"></i>
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 3 --> */}
      <div
        className="modal fade"
        id="exampleModal3"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className={`${style.close} btn-close ms-auto me-5 mt-5`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className={`modal-body py-0 text-center ${style.body}`}>
              {/* title */}
              <div className={`${style.title} mb-3`}>
                <h2 className="sec-heading text-uppercase fw-bold">
                  CIRCUS TENT
                </h2>
                <div className="star text-center my-4 d-flex justify-content-center align-items-center">
                  <span></span>
                  <i className="fa-solid fa-star mx-2 fs-2"></i>
                  <span></span>
                </div>
              </div>

              {/* img */}
              <img src={circus} alt="CIRCUS TENT" className=" w-100" />

              {/* content */}
              <p className=" mx-5 my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
              </p>
            </div>

            <div className="modal-footer mx-auto border-top-0 pt-0">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark me-2 p-2"></i>
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 4 --> */}
      <div
        className="modal fade"
        id="exampleModal4"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className={`${style.close} btn-close ms-auto me-5 mt-5`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className={`modal-body py-0 text-center ${style.body}`}>
              {/* title */}
              <div className={`${style.title} mb-3`}>
                <h2 className="sec-heading text-uppercase fw-bold">
                  CONTROLLER
                </h2>
                <div className="star text-center my-4 d-flex justify-content-center align-items-center">
                  <span></span>
                  <i className="fa-solid fa-star mx-2 fs-2"></i>
                  <span></span>
                </div>
              </div>

              {/* img */}
              <img src={game} alt="CONTROLLER" className=" w-100" />

              {/* content */}
              <p className=" mx-5 my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
              </p>
            </div>

            <div className="modal-footer mx-auto border-top-0 pt-0">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark me-2 p-2"></i>
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 5 --> */}
      <div
        className="modal fade"
        id="exampleModal5"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className={`${style.close} btn-close ms-auto me-5 mt-5`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className={`modal-body py-0 text-center ${style.body}`}>
              {/* title */}
              <div className={`${style.title} mb-3`}>
                <h2 className="sec-heading text-uppercase fw-bold">
                  LOCKED SAFE
                </h2>
                <div className="star text-center my-4 d-flex justify-content-center align-items-center">
                  <span></span>
                  <i className="fa-solid fa-star mx-2 fs-2"></i>
                  <span></span>
                </div>
              </div>

              {/* img */}
              <img src={safe} alt="LOCKED SAFE" className=" w-100" />

              {/* content */}
              <p className=" mx-5 my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
              </p>
            </div>

            <div className="modal-footer mx-auto border-top-0 pt-0">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark me-2 p-2"></i>
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal 6 --> */}
      <div
        className="modal fade"
        id="exampleModal6"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className={`${style.close} btn-close ms-auto me-5 mt-5`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className={`modal-body py-0 text-center ${style.body}`}>
              {/* title */}
              <div className={`${style.title} mb-3`}>
                <h2 className="sec-heading text-uppercase fw-bold">
                  SUBMARINE
                </h2>
                <div className="star text-center my-4 d-flex justify-content-center align-items-center">
                  <span></span>
                  <i className="fa-solid fa-star mx-2 fs-2"></i>
                  <span></span>
                </div>
              </div>

              {/* img */}
              <img src={submarine} alt="SUBMARINE" className=" w-100" />

              {/* content */}
              <p className=" mx-5 my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia neque assumenda ipsam nihil, molestias magnam,
                recusandae quos quis inventore quisquam velit asperiores, vitae?
                Reprehenderit soluta, eos quod consequuntur itaque. Nam.
              </p>
            </div>

            <div className="modal-footer mx-auto border-top-0 pt-0">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                <i className="fa-solid fa-xmark me-2 p-2"></i>
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
