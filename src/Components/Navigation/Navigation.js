import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./navigation.scss";

export default function Navigation() {
  const navigate = useNavigate();
  const ID = localStorage.getItem("liu_id");

  function logout() {

    axios
      .post("http://localhost:8000/api/logout")
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => console.error(error));
  }
  return (
    <nav className="nav p-0">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-3 col-5 pt-3">
            <Link className="navbar-brand" to="/main">
              <img src="logo-2.svg" alt="logo" />
            </Link>
          </div>
          <div
            className="col-2 col-lg-1 dropdown-toggle drop"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            <img src="profile.jpg" alt="" className="profile-pic me-1" />
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  className="dropdown-item d-flex align-items-center"
                  onClick={() => {
                    navigate("/edit-profile", { state: { id: ID } });
                  }}
                >
                  <svg
                    className="me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.374"
                    height="17.359"
                    viewBox="0 0 17.374 17.359"
                  >
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(0.367 0.353)"
                    >
                      <path
                        id="Path_54"
                        data-name="Path 54"
                        d="M-.017,33.423c0-1.706.006-3.412,0-5.117A2.462,2.462,0,0,1,2.45,25.813q2.558.02,5.117,0a.725.725,0,0,1,.758.691.683.683,0,0,1-.709.686c-.452.023-.9.01-1.358.011-1.21,0-2.42-.01-3.63.009a1.73,1.73,0,0,0-.791.188,1,1,0,0,0-.457.959c.01,2.516.005,5.031.005,7.546v2.689a1.023,1.023,0,0,0,1.149,1.139q5.106,0,10.211,0A1.03,1.03,0,0,0,13.9,38.568c.006-1.636,0-3.272.01-4.908a1.373,1.373,0,0,1,.184-.654.594.594,0,0,1,.713-.235.713.713,0,0,1,.482.62c0,1.836.027,3.673-.014,5.509a2.4,2.4,0,0,1-2.355,2.216q-5.274.017-10.551,0A2.445,2.445,0,0,1-.013,38.673C-.02,36.923-.017,35.173-.017,33.423Z"
                        transform="translate(0 -24.461)"
                        fill="#143d6d"
                        stroke="#143d6d"
                        strokeWidth="0.7"
                      />
                      <path
                        id="Path_55"
                        data-name="Path 55"
                        d="M126.159,2.007a2.011,2.011,0,0,1-.57,1.5q-3.168,3.182-6.356,6.344a1.7,1.7,0,0,1-.774.321c-.682.167-1.372.3-2.06.449a.688.688,0,0,1-.862-.857c.168-.806.34-1.612.534-2.412a1.084,1.084,0,0,1,.278-.484q3.09-3.113,6.2-6.21A2.037,2.037,0,0,1,124.672.1a1.971,1.971,0,0,1,1.449,1.581,2.577,2.577,0,0,1,.037.328Zm-4.073,1.08c-.029.026-.062.052-.093.085-1.414,1.416-2.808,2.853-4.253,4.237-.493.473-.446,1.061-.639,1.637.339-.075.627-.15.915-.2a1.017,1.017,0,0,0,.574-.313q2.141-2.16,4.3-4.306c.06-.06.116-.123.168-.179l-.969-.961Zm2.013-.052c.165-.169.348-.341.512-.529a.694.694,0,0,0-.029-.906.7.7,0,0,0-.905-.085c-.2.168-.38.371-.548.539Z"
                        transform="translate(-109.501)"
                        fill="#143d6d"
                        stroke="#143d6d"
                        strokeWidth="0.7"
                      />
                    </g>
                  </svg>
                  Edit profile
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <svg
                    className="me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.906"
                    height="22.625"
                    viewBox="0 0 16.906 22.625"
                  >
                    <g
                      id="Group_221"
                      data-name="Group 221"
                      transform="translate(-1074 -147.875)"
                    >
                      <g
                        id="Layer_1"
                        data-name="Layer 1"
                        transform="translate(1074 146.875)"
                      >
                        <path
                          id="Path_39"
                          data-name="Path 39"
                          d="M31.22,66.4c.456-.025.708-.054.961-.054,2.223,0,4.447-.011,6.662,0a3.109,3.109,0,0,1,3.322,3.324c.013,2.458,0,4.923,0,7.377,0,.233-.022.467-.035.726a1.358,1.358,0,0,1-1.55-.454c-2.875-3.372-5.792-6.719-8.695-10.078C31.7,67.022,31.53,66.792,31.22,66.4Z"
                          transform="translate(-26.265 -55.803)"
                          fill="#143d6d"
                        />
                        <path
                          id="Path_40"
                          data-name="Path 40"
                          d="M30.394,8A4,4,0,0,1,26.4,4.017a4,4,0,1,1,8,.026A3.949,3.949,0,0,1,30.394,8Z"
                          transform="translate(-21.799 1.001)"
                          fill="#143d6d"
                        />
                        <path
                          id="Path_41"
                          data-name="Path 41"
                          d="M8.93,82.252V75.826c0-.688,0-1.375.016-2.065A2.87,2.87,0,0,1,9.989,71.67l9.052,10.578Z"
                          transform="translate(-7.515 -60.288)"
                          fill="#143d6d"
                        />
                        <path
                          id="Path_42"
                          data-name="Path 42"
                          d="M14.1,52.186a2.829,2.829,0,0,1-3.143-1C7.982,47.545,4.874,44.01,1.817,40.435c-.476-.559-.953-1.124-1.429-1.68-.688-.791-.194-1.7-.211-2.595Z"
                          transform="translate(-0.021 -30.417)"
                          fill="#143d6d"
                        />
                      </g>
                      <line
                        id="Line_35"
                        data-name="Line 35"
                        x2="16"
                        transform="translate(1074.906 169)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                      />
                    </g>
                  </svg>
                  My rides
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  href="#"
                >
                  <svg
                    className="me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="20.191"
                    viewBox="0 0 16 20.191"
                  >
                    <g
                      id="Layer_1"
                      data-name="Layer 1"
                      transform="translate(-0.181 -1)"
                    >
                      <path
                        id="Path_31"
                        data-name="Path 31"
                        d="M29.182,7.994c-2.308.176-4.084-2.443-3.9-4.286A4.086,4.086,0,0,1,29.506.01a3.988,3.988,0,0,1,2.768,1.365,4.053,4.053,0,0,1,.984,2.944A4.052,4.052,0,0,1,29.182,7.994Z"
                        transform="translate(-20.687 0.997)"
                        fill="#143d6d"
                      />
                      <path
                        id="Path_32"
                        data-name="Path 32"
                        d="M7.6,73.613V70.862c0-.71-.009-1.254,0-1.964a2.84,2.84,0,0,1,2.615-2.278c2.554-.1,5.278,0,8,0-.8,1.052-1.018,1.366-1.3,1.661-.447.607-.014-.01-.976,1.2a21.755,21.755,0,0,1-1.615,1.865,5.5,5.5,0,0,0-4.8,2.62C8.674,74.034,8.494,73.726,7.6,73.613Z"
                        transform="translate(-5.994 -56.108)"
                        fill="#143d6d"
                      />
                      <path
                        id="Path_33"
                        data-name="Path 33"
                        d="M62.34,74.32l3.777-4.586c.454-.448.448.781.448.781v5.195c-.544.124-1.439.686-1.8.351A5.089,5.089,0,0,0,62.34,74.32Z"
                        transform="translate(-51.532 -58.585)"
                        fill="#143d6d"
                      />
                      <path
                        id="Path_34"
                        data-name="Path 34"
                        d="M43.741,43.819l6.347-7.668a10.631,10.631,0,0,1,0,2.35c-.55.688-2.473,2.917-3.743,4.453S46.052,44.036,43.741,43.819Z"
                        transform="translate(-34.978 -28.482)"
                        fill="#143d6d"
                      />
                      <path
                        id="Path_35"
                        data-name="Path 35"
                        d="M39.5,123.515H34.241c.65-.889,1.244-1.633,1.271-1.688a11.97,11.97,0,0,1,.8-.989c.11-.521,1.1.1,1.1.1A4.8,4.8,0,0,1,39.5,123.515Z"
                        transform="translate(-26.558 -103.714)"
                        fill="#143d6d"
                      />
                      <path
                        id="Path_37"
                        data-name="Path 37"
                        d="M.833,127.779c.568.437,1.49-.249,1.991.826l-1.662.124v.2l1.624.156v.258l-1.6.146v.2l1.6.125-.012.28-1.6.1-.012.237,1.554.114.1.182c-.192.151-.374.408-.581.431a9.739,9.739,0,0,1-1.631.016c-.466-.024-.608-.371-.61-.806,0-.816-.037-1.632,0-2.448a2.533,2.533,0,0,1,.321-.786Z"
                        transform="translate(0.206 -110.016)"
                        fill="#143d6d"
                      />
                      <path
                        id="Path_38"
                        data-name="Path 38"
                        d="M27.364,121.509a32.638,32.638,0,0,0-2.224,2.906c-.082.033-1.24-.008-1.73,0a19.061,19.061,0,0,1,2.279-2.906A3.191,3.191,0,0,1,27.364,121.509Z"
                        transform="translate(-17.833 -104.686)"
                        fill="#143d6d"
                      />
                      <path
                        id="Path_134"
                        data-name="Path 134"
                        d="M1.967,127.779c-.568.437-1.49-.249-1.991.825l1.662.124v.2l-1.624.156v.258l1.6.146v.2l-1.6.125.012.28,1.6.1.012.237-1.554.114-.1.182c.192.151.374.408.581.431a9.739,9.739,0,0,0,1.631.016c.466-.024.608-.371.61-.806,0-.816.037-1.632,0-2.448a2.533,2.533,0,0,0-.321-.786Z"
                        transform="translate(13.357 -110.016)"
                        fill="#143d6d"
                      />
                      <path
                        id="Path_135"
                        data-name="Path 135"
                        d="M34.241,123.652h1.372c.464-.728,2.307-3.056,2.307-3.056S35.475,120.589,34.241,123.652Z"
                        transform="translate(-30.558 -103.91)"
                        fill="#143d6d"
                      />
                    </g>
                  </svg>
                  My trips
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button
                  className="dropdown-item d-flex align-items-center buttons"
                  onClick={logout}
                >
                  <svg
                    className="me-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.259"
                    height="15.3"
                    viewBox="0 0 16.259 15.3"
                  >
                    <path
                      id="s"
                      d="M12.875,15c1.7-.007,3.079-1.687,3.079-3.757v-7.5C15.949,1.679,14.573.007,12.875,0H10.118a.434.434,0,0,0-.386.47v.939a.434.434,0,0,0,.386.47h2.757A1.724,1.724,0,0,1,14.41,3.743v7.5a2.09,2.09,0,0,1-.446,1.327,1.412,1.412,0,0,1-1.089.551H10.118a.434.434,0,0,0-.386.47v.939a.434.434,0,0,0,.386.47ZM5.365.77.118,7.174a.494.494,0,0,0,0,.652l5.247,6.417a.348.348,0,0,0,.547,0l.622-.757a.559.559,0,0,0,0-.678l-3.6-4.291h7.993c.213,0,.386-.47.386-.47v-1.1a.425.425,0,0,0-.386-.43H2.929l3.637-4.33a.544.544,0,0,0,0-.665L5.944.77a.336.336,0,0,0-.579,0Z"
                      transform="translate(0.155 0.15)"
                      fill="#143d6d"
                      stroke="#143d6d"
                      strokeWidth="0.3"
                    />
                  </svg>
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
