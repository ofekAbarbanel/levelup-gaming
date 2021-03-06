import "../styles/events.css";
import smokeVideo from "../video/smoke.mp4";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Events = () => {
  // ------------------- Winter section -------------------
  const eventSignUpWinter = () => {
    return toast.dark("You Signed Up To Our Winter Event⛄", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // ------------------- Summer section -------------------
  const eventSignUpSummer = () => {
    return toast.success("You Signed Up To Summer Event 🏄‍♀️", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <div className="container-fluid events">
        <section className="title-section">
          <video
            src={smokeVideo}
            autoPlay
            loop
            muted
            height="400"
            width="-600"
            className="smoke-video"
          ></video>
          <h1
            className="title-h1 ms-1 "
            data-bs-interval={3000}
            data-bs-ride="title-h1"
          >
            <span className="title-span event-title">W</span>
            <span className="title-span event-title">E</span>
            <span className="title-span event-title">L</span>
            <span className="title-span event-title">C</span>
            <span className="title-span event-title">O</span>
            <span className="title-span event-title">M</span>
            <span className="title-span event-title">E</span>
          </h1>
        </section>
      </div>

      <div className="main-content">
        <div className="winter-event">
          <br />
          <br />
          <br />
          <br />
          <h1 className="winter-event-title text-center display-2">
            Winter Event By Level-Up Gaming
          </h1>
          <div className="row text-left winter-event-row flex-xl-wrap justify-content-center ">
            <div
              className="col-6 col-sm-10 col-xl-6 d-flex
 justify-content-center  winter-event-left mt-5 ms-5  "
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="4000"
            ></div>
            <div
              className="col-5 col-sm-12 col-xl-5 d-flex
 justify-content-md-center
  winter-event-right mt-5 ms-2"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <ul className=" display-6 text-light mt-3 winter-event-list ">
                <li className="mb-3  winter-event-li">
                  Over 30 Gaming Stations
                </li>
                <li className="mt-3 winter-event-li">Prizes For Top Players</li>
                <li className="mt-3 winter-event-li">
                  Trivia Game with Prizes
                </li>
                <li className="mt-3 winter-event-li">
                  Meet Leading Developers
                </li>
                <li className="mt-3 winter-event-li">
                  Special God OF War Trailer
                </li>
                <li className="mt-3 winter-event-li">Free Food And Drinks</li>
              </ul>
            </div>
          </div>
          <div
            className="winter-event-down text-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="3000"
          >
            <h1 className=" col-10 col-lg-8 text-center display-4 text-light winter-event-down-h1">
              God Of War Ragnarok See You There
            </h1>
            <Link
              to="/"
              className="btn btn-outline-light btn-lg mb-5 "
              onClick={() => eventSignUpWinter()}
            >
              Sign Up To Event
            </Link>
          </div>
        </div>
      </div>

      <div className="summer-event">
        <div className="container">
          <div className="row text-center">
            <h1 className="col-12 summer-event-title text-center display-3 mb-4">
              Summer Event By Level-Up Gaming
            </h1>
          </div>
          <div className="row mt-5  flex-xl-wrap justify-content-center">
            <div
              className="col-6 col-sm-10 col-xl-6 d-flex
              justify-content-center  summer-event-right mt-5 ms-5"
              data-aos="fade-in-out"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            ></div>
            <div
              className="col-5 col-sm-12 col-xl-5 d-flex
 justify-content-md-center
   mt-5 ms-2 summer-event-left"
              data-aos="fade-in-out"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <ul className=" display-6  mt-3  summer-event-list ">
                <li className="mb-3   summer-event-li">
                  Over 30 Gaming Stations
                </li>
                <li className="mt-3  summer-event-li ">
                  Prizes For Top Players
                </li>
                <li className="mt-3  summer-event-li ">
                  Trivia Game with Prizes
                </li>
                <li className="mt-3  summer-event-li ">
                  Meet Leading Developers
                </li>
                <li className="mt-3  summer-event-li ">
                  Special God OF War Trailer
                </li>
                <li className="mt-3  summer-event-li ">Free Food And Drinks</li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h1 className="display-3 summer-event-down-h1 mb-5">
                35th - Super Mario Bros
              </h1>
              <Link
                to="/"
                className="summer-event-btn"
                onClick={() => eventSignUpSummer()}
              >
                Sign Up To Event
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="container px-4 py-5" id="custom-cards">
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage:
                  'url("http://cdn.mos.cms.futurecdn.net/XNkFV6uyYBeX5NLwjnomig.jpg")',
                backgroundSize: "cover",
              }}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <div className="d-flex flex-column h-100 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-primary event-buttom-card  text-center ">
                  Xbox -Events
                </h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://media-cldnry.s-nbcnews.com/image/upload/newscms/2017_02/1864536/170113-nintendo-switch-mn-1515.jpg")',
                backgroundSize: "cover",
              }}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="d-flex flex-column h-100  pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold  text-danger event-buttom-card text-center">
                  Nintendo - Events
                </h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_08/3452698/210225-2x1-gaming-accessories-ew-1244p.jpg")',
                backgroundSize: "cover",
              }}
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <div className="d-flex flex-column h-100  pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-primary event-buttom-card text-white event-buttom-card text-center">
                  Playstation - Events
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
