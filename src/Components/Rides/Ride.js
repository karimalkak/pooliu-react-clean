import React, { useState } from "react";
import Rating from "react-rating";
import axios from "axios";
import "./ride.scss";

export default function Ride({ name, rating, time, date, campus }) {
  return (
    <>
      <div className="container ride p-2">
        <div className="row">
          <div className="col-2 col-lg-1 d-md-flex align-items-center">
            <img src="profile.jpg" alt="" className="profile-pic" />
          </div>
          <div className="col-6 ">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h3 className="name">{name}</h3>
                <Rating
                  initialRating={rating}
                  readonly
                  emptySymbol={<img src="empty-wheel.svg" className="icon" />}
                  fullSymbol={<img src="full-wheel.svg" className="icon" />}
                  //fractions={2}
                />
              </div>
              <div className="col-12 col-lg-6">
                <div className="place">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11.4"
                    height="14.462"
                    viewBox="0 0 11.4 14.462"
                    className="me-1"
                  >
                    <g id="location" transform="translate(-0.039 -0.039)">
                      <path
                        id="Path_88"
                        data-name="Path 88"
                        d="M.739,6.184A5.243,5.243,0,0,1,5.756.739a5.251,5.251,0,0,1,4.983,5.482v.062a8.391,8.391,0,0,1-2.265,5.191,13.473,13.473,0,0,1-2.339,2.1.568.568,0,0,1-.793,0,13.451,13.451,0,0,1-3.29-3.366A7.406,7.406,0,0,1,.739,6.2Z"
                        fill="none"
                        stroke="#ffb019"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                        fill-rule="evenodd"
                      />
                      <circle
                        id="Ellipse_16"
                        data-name="Ellipse 16"
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        transform="translate(4.239 4.627)"
                        fill="none"
                        stroke="#ffb019"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </g>
                  </svg>
                  <span className="details">Going to {campus} campus</span>
                </div>
                <div className="date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    className="me-1"
                  >
                    <path
                      id="date_1_"
                      data-name="date (1)"
                      d="M3.211.26a.591.591,0,0,0-.584.6V1.45H.857a.591.591,0,0,0-.593.593V12.667a.591.591,0,0,0,.593.593H12.67a.591.591,0,0,0,.593-.593V2.043a.591.591,0,0,0-.593-.593H10.9V.862a.591.591,0,0,0-1.183,0V1.45H7.355V.862a.591.591,0,0,0-1.183,0V1.45H3.809V.862a.591.591,0,0,0-.6-.6ZM1.445,2.632H2.628v.593a.591.591,0,1,0,1.181,0V2.632H6.172v.593a.591.591,0,0,0,1.183,0V2.632H9.718v.593a.591.591,0,0,0,1.183,0V2.632h1.181V4.993H1.445Zm0,3.542H12.082v5.906H1.445ZM5.583,7.354a.59.59,0,1,0,.591.59A.591.591,0,0,0,5.583,7.354Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,7.946,7.354Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,10.309,7.354ZM3.22,9.716a.59.59,0,1,0,.591.59A.591.591,0,0,0,3.22,9.716Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,5.583,9.716Zm2.363,0a.59.59,0,1,0,.591.59A.591.591,0,0,0,7.946,9.716Z"
                      transform="translate(-0.264 -0.26)"
                      fill="#ffb019"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <span className="details">{date}</span>
                </div>
                <div className="time">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.3"
                    height="13.3"
                    viewBox="0 0 13.3 13.3"
                    className="me-1"
                  >
                    <path
                      id="time"
                      d="M8.638,15a6.5,6.5,0,1,1,6.5-6.5A6.507,6.507,0,0,1,8.638,15Zm0-11.96A5.46,5.46,0,1,0,14.1,8.5,5.466,5.466,0,0,0,8.638,3.04ZM8.6,8.978H5.258a.52.52,0,0,1,0-1.04H8.076V4.08a.52.52,0,1,1,1.04,0V8.458A.52.52,0,0,1,8.6,8.978Z"
                      transform="translate(-1.988 -1.85)"
                      fill="#ffb019"
                      stroke="#ffb019"
                      strokeWidth="0.3"
                    />
                  </svg>
                  <span className="details">Arrive before {time}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 col-lg-5 d-flex align-items-center justify-content-center p-0">
            <div className="row">
              <div className="col-12 col-lg-12 me-lg-2 ms-5 ms-lg-0 mb-2 mb-lg-0">
                {/* <button className="request" onClick={() => request()}> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="153"
                  height="41"
                  viewBox="0 0 153 41"
                >
                  <g
                    id="Group_51"
                    data-name="Group 51"
                    transform="translate(-428 -330)"
                  >
                    <rect
                      id="Rectangle_5"
                      data-name="Rectangle 5"
                      width="153"
                      height="41"
                      rx="7"
                      transform="translate(428 330)"
                      fill="#df2020"
                    />
                    <text
                      id="REMOVE_REQUEST"
                      data-name="REMOVE REQUEST"
                      transform="translate(437 357)"
                      fill="#fff"
                      font-size="16"
                      font-family="SegoeUI-Semibold, Segoe UI"
                      font-weight="600"
                      letter-spacing="-0.007em"
                    >
                      <tspan x="0" y="0">
                        REMOVE REQUEST
                      </tspan>
                    </text>
                  </g>
                </svg>
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
