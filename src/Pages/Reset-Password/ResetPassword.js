import React from "react";
import "./resetpassword.scss";
import { Link } from "react-router-dom";
export default function ResetPassword() {
  return (
    <div className="auth-pages d-flex align-items-center">
      <div className="container">
        <div className="row  d-flex justify-content-center">
          <div className="col-5 p-0 container-mini container-mini-left">
            <div className="card cards">
              <div className="card-title mt-2 btn d-flex justify-content-lg-start">
                <Link to="/home" className="links">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="mb-1"
                  >
                    <path
                      id="arrow"
                      d="M143.047,136.988a.715.715,0,0,0-.211-.527l-4.242-4.242-1.066-1.066a.765.765,0,0,0-1.055,0l-1.066,1.066-4.242,4.242a.765.765,0,0,0,0,1.055l1.066,1.066a.765.765,0,0,0,1.055,0l2.215-2.215v5.883a.76.76,0,0,0,.75.75h1.5a.76.76,0,0,0,.75-.75v-5.883l2.215,2.215a.736.736,0,0,0,1.055,0l1.066-1.066A.715.715,0,0,0,143.047,136.988ZM146,137a8.8,8.8,0,0,1-1.207,4.518,8.959,8.959,0,0,1-3.275,3.275,9.058,9.058,0,0,1-9.035,0,8.959,8.959,0,0,1-3.275-3.275,9.058,9.058,0,0,1,0-9.035,8.959,8.959,0,0,1,3.275-3.275,9.058,9.058,0,0,1,9.035,0,8.959,8.959,0,0,1,3.275,3.275A8.8,8.8,0,0,1,146,137Z"
                      transform="translate(-128 146) rotate(-90)"
                      fill="#ffb019"
                    />
                  </svg>
                  <span className="mt-1"> Return Home</span>
                </Link>
              </div>
              <div className="card-body">
                <h1 className="title">RESET PASSWORD</h1>
                <div className="container">
                  <div className="row inputs mt-4 input-verify">
                    <form>
                      <div className="col-12 d-flex justify-content-center ">
                        <input
                          type="text"
                          className="form-control my-5 input-verify"
                          id="inputCurrentPass"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-12 d-flex justify-content-center input-verify mb-5">
                        <input
                          type="password"
                          className="form-control "
                          id="password"
                          placeholder="PASSWORD"
                        />
                      </div>
                      <div className="col-12 d-flex justify-content-center input-verify">
                        <input
                          type="password"
                          className="form-control "
                          id="passwordCon"
                          placeholder="CONFIRM PASSWORD"
                        />
                      </div>
                    </form>
                    <div className="col-12 d-flex justify-content-end ">
                      <button href="#" className="link m-0 link mt-2 buttons">
                        Forgot password?
                      </button>
                    </div>
                    <button
                      href="#"
                      className="submit d-flex justify-content-center buttons "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xlink="http://www.w3.org/1999/xlink"
                        width="218"
                        height="70"
                        viewBox="0 0 218 70"
                      >
                        <defs>
                          <filter
                            id="Rectangle_11"
                            x="0"
                            y="0"
                            width="218"
                            height="70"
                            filterUnits="userSpaceOnUse"
                          >
                            <feOffset dx="-1" dy="2" input="SourceAlpha" />
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feFlood
                              floodColor="#143d6d"
                              floodOpacity="0.502"
                            />
                            <feComposite operator="in" in2="blur" />
                            <feComposite in="SourceGraphic" />
                          </filter>
                        </defs>
                        <g
                          id="Group_105"
                          data-name="Group 105"
                          transform="translate(-254 -515)"
                        >
                          <g
                            transform="matrix(1, 0, 0, 1, 254, 515)"
                            filter="url(#Rectangle_11)"
                          >
                            <rect
                              id="Rectangle_11-2"
                              data-name="Rectangle 11"
                              width="200"
                              height="52"
                              rx="10"
                              transform="translate(10 7)"
                              fill="#143d6d"
                            />
                          </g>
                          <text
                            id="LET_S_GO"
                            data-name="LET'S GO"
                            transform="translate(322 555)"
                            fill="#ffb019"
                            fontSize="20"
                            fontFamily="SegoeUI-Bold, Segoe UI"
                            fontWeight="700"
                            letterSpacing="-0.007em"
                          >
                            <tspan x="0" y="0">
                              LET&apos;S GO
                            </tspan>
                          </text>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 p-0 m-0 container-mini container-mini-right">
            <img src="auth.svg" className="img-fluid img" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
