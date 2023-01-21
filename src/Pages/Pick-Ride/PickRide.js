import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import { Link } from "react-router-dom";
import "./pickride.scss";

export default function PickRide() {
  return (
    <>
      <Navigation />
      <div className="pickride-page">
        <h1 className="my-5">PICK RIDE</h1>
        <div className="container mt-5 main-container">
          <div className="row inputs mt-5">
            <div className="col-9 col-lg-5 p-lg-4 py-4 px-3">
              <button
                type="button"
                className="btn btn-outline-primary location-btn"
                data-bs-toggle="modal"
                data-bs-target="#map-modal"
              >
                SELECT LOCATION
              </button>
            </div>
            <div className="arrow-container col-3 col-lg-2 d-flex justify-content-center p-lg-4 py-4 px-3 m-lg-0">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42.05"
                  height="34.858"
                  viewBox="0 0 42.05 34.858"
                  className="arrow"
                >
                  <path
                    id="arrow_1_"
                    data-name="arrow (1)"
                    d="M1,14.894H38.05M24.156,1,38.05,14.894,24.156,28.787"
                    transform="translate(1.5 2.536)"
                    fill="none"
                    stroke="#ffb019"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="col-9 col-lg-5 p-lg-4 py-4 px-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>CAMPUS SITE</option>
                <option value="1">BEIRUT</option>
                <option value="2">BEKAA</option>
                <option value="3">HALBA</option>
                <option value="4">MOUNT LEBANON</option>
                <option value="5">NABATIEH</option>
                <option value="6">RAYAK</option>
                <option value="7">SAIDA</option>
                <option value="8">TRIPOLI</option>
                <option value="9">TYRE</option>
              </select>
            </div>
            <div className="col-12 col-lg-6 p-lg-4 py-4 px-3">
              <button
                type="button"
                className="btn btn-outline-primary location-btn"
              >
                SELECT DATE AND TIME
              </button>
            </div>
            <div className="pick-container col-12 col-lg-6 d-flex justify-content-center p-lg-0 p-5">
              <button className="pick">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="138"
                  height="64"
                  viewBox="0 0 138 64"
                >
                  <defs>
                    <filter
                      id="Rectangle_11"
                      x="0"
                      y="0"
                      width="138"
                      height="64"
                      filterUnits="userSpaceOnUse"
                    >
                      <feOffset dx="-1" dy="2" input="SourceAlpha" />
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feFlood floodColor="#143d6d" floodOpacity="0.502" />
                      <feComposite operator="in" in2="blur" />
                      <feComposite in="SourceGraphic" />
                    </filter>
                  </defs>
                  <g
                    id="Group_17"
                    data-name="Group 17"
                    transform="translate(-1026 -569)"
                  >
                    <g
                      transform="matrix(1, 0, 0, 1, 1026, 569)"
                      filter="url(#Rectangle_11)"
                    >
                      <rect
                        id="Rectangle_11-2"
                        data-name="Rectangle 11"
                        width="120"
                        height="46"
                        rx="8"
                        transform="translate(10 7)"
                        fill="#143d6d"
                      />
                    </g>
                    <text
                      id="PICK"
                      transform="translate(1076 606)"
                      fill="#ffb019"
                      fontSize="18"
                      fontFamily="SegoeUI-Bold, Segoe UI"
                      fontWeight="700"
                    >
                      <tspan x="0" y="0">
                        PICK
                      </tspan>
                    </text>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-5 d-flex justify-content-start">
            <div className="container">
              <div className="row">
                <div className="col-6 d-flex justify-content-start">
                  <p className="text-buttom-left">Available Trips</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <Link to="">
                    <img src="filter.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 d-flex justify-content-end p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.036277206962!2d35.4990196537077!3d33.88193514693669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f1721587e1d6d%3A0xaa7f5769dc576d98!2sLebanese%20International%20University!5e0!3m2!1sen!2slb!4v1672151492684!5m2!1sen!2slb"
              width="700"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
