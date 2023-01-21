import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="container py-4">
        <div className="row d-flex flex-column-reverse flex-md-row">
          <div className="col-xl-11 col-md-10 col-12 d-flex justify-content-center justify-content-md-start">
            <span>&copy; 2023 PooLIU. All rights reserved.</span>
          </div>
          <div className="col-xl-1 col-md-2 col-12 d-flex justify-content-center pb-md-0 pb-2  justify-content-md-end">
            <Link className="pe-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.7"
                height="21.7"
                viewBox="0 0 21.7 21.7"
              >
                <path
                  id="facebook"
                  d="M9.833,20.5H2.5a2,2,0,0,1-2-2V2.5a2,2,0,0,1,2-2h16a2,2,0,0,1,2,2v16a2,2,0,0,1-2,2H13.833V13.167h2l1.333-3.333H13.833V7.167c0-.733.6-.667,1.333-.667H16.5V3.167H13.833a4.006,4.006,0,0,0-4,4V9.833H7.167v3.333H9.833Z"
                  transform="translate(0.35 0.35)"
                  fill="none"
                  stroke="#143d6d"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-miterlimit="10"
                  strokeWidth="1.7"
                />
              </svg>
            </Link>{" "}
            <Link className="ps-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  id="instagram"
                  d="M18.874,5.806h0a1.32,1.32,0,1,0,1.32,1.32A1.32,1.32,0,0,0,18.874,5.806Zm5.06,2.662A8.349,8.349,0,0,0,23.428,5.8a5.434,5.434,0,0,0-1.276-1.947,5.17,5.17,0,0,0-1.947-1.265,8.03,8.03,0,0,0-2.673-.517C16.366,2,15.992,2,13,2s-3.366,0-4.532.066A8.03,8.03,0,0,0,5.8,2.583,5.258,5.258,0,0,0,3.848,3.848,5.17,5.17,0,0,0,2.583,5.795a8.03,8.03,0,0,0-.517,2.673C2,9.634,2,10.008,2,13s0,3.366.066,4.532A8.03,8.03,0,0,0,2.583,20.2a5.17,5.17,0,0,0,1.265,1.947A5.258,5.258,0,0,0,5.8,23.417a8.03,8.03,0,0,0,2.673.517C9.634,24,10.008,24,13,24s3.366,0,4.532-.066a8.03,8.03,0,0,0,2.673-.517,5.17,5.17,0,0,0,1.947-1.265,5.335,5.335,0,0,0,1.276-1.947,8.349,8.349,0,0,0,.506-2.673c0-1.166.066-1.54.066-4.532S24,9.634,23.934,8.468ZM21.954,17.4a6.171,6.171,0,0,1-.374,2.046,3.366,3.366,0,0,1-.825,1.265,3.509,3.509,0,0,1-1.265.825,6.171,6.171,0,0,1-2.046.374c-1.1.055-1.507.066-4.4.066s-3.3,0-4.4-.066a6.3,6.3,0,0,1-2.134-.33,3.6,3.6,0,0,1-1.21-.825,3.3,3.3,0,0,1-.814-1.265,6.094,6.094,0,0,1-.44-2.09c0-1.1-.066-1.507-.066-4.4s0-3.3.066-4.4a6.094,6.094,0,0,1,.385-2.09A3.3,3.3,0,0,1,5.3,5.3a3.454,3.454,0,0,1,1.21-.88A6.3,6.3,0,0,1,8.6,4.046c1.1,0,1.507-.066,4.4-.066s3.3,0,4.4.066a6.171,6.171,0,0,1,2.046.374,3.366,3.366,0,0,1,1.309.88,3.366,3.366,0,0,1,.825,1.21,6.171,6.171,0,0,1,.374,2.09c.055,1.1.066,1.507.066,4.4S22.009,16.3,21.954,17.4ZM13,7.357A5.632,5.632,0,1,0,17,9a5.643,5.643,0,0,0-4-1.646Zm0,9.306A3.663,3.663,0,1,1,16.663,13,3.663,3.663,0,0,1,13,16.663Z"
                  transform="translate(-2 -2)"
                  fill="#143d6d"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
