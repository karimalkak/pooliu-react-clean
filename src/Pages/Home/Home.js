import React from "react";
import Footer from "../../Components/Footer/Footer";
import HomeNavigation from "../../Components/Home-navigation/HomeNavigation";
import "animate.css";
import './home.scss';

export default function Home(){
  return (
    <>
      <HomeNavigation></HomeNavigation>
      <div className="home-page">
        <div className="background p-0 m-0">
          <div className="row header-row d-flex flex-column-reverse flex-lg-row m-0 p-0">
            <div className="yellow-img col-lg-6 col-12 m-0 p-0">
              <div className="header container">
                <h1 className="first animate__animated animate__fadeInLeft animate__fast">
                  Let's share
                </h1>
                <h1 className="second animate__animated animate__fadeInLeft animate__delay-1s animate__fast">
                  &nbsp; &nbsp; &nbsp; the Ride.
                </h1>
                <p className="header-text mt-5 animate__animated animate__fadeIn animate__delay-1s animate__fast">
                  Due to the high prices in gas, and due to transferring
                  education from online to on campus. We as students will help
                  each other to reach out for our college to reach out for a
                  better future.
                </p>
              </div>
            </div>
            <div className="header-img col-lg-6 col-12 m-0 p-0"></div>
          </div>
        </div>
        <div className="container">
          <div className="row pros">
            <div className="col-lg-4 col-12 pb-5">
              <div className="d-flex justify-content-center">
                <img src="car.svg" alt="" />
              </div>
              <h3>Get a ride</h3>
              <p>
                You can a ride from a place you near to you to your campus easily.
              </p>
            </div>
            <div className="col-lg-4 col-12 pb-5">
              <div className="d-flex justify-content-center">
                <img src="shield.svg" alt="" />
              </div>
              <h3>Safe and convenient</h3>
              <p>
                It is a safe environment since the drivers and the riders will be strictly your college colleagues.
              </p>
            </div>
            <div className="col-lg-4 col-12 pb-5">
              <div className="d-flex justify-content-center">
                <img src="tap.svg" alt="" />
              </div>
              <h3>Easy to use</h3>
              <p>
                With just a click of a bottom you  can navigate through the available rides from your city to your campus and vice versa.
              </p>
            </div>
          </div>
        </div>
        <div className="phone1">
          <img
            src="light-yellow.svg"
            className="light-yellow-img p-0"
            alt="..."
          />
          <div className="container">
            <div className="row">
              <div className="col-7 text">
                <h2>Request a ride...</h2>
                <p>
                  As it easy as it goes you can request a ride from your city to your campus
                  and navigate between all the available rides according to your needs and 
                  time, we create for you a safe environment{" "}
                </p>
              </div>
              <div className="col-5 image d-flex justify-content-end">
                <img src="phone1.svg" alt="" className="phone1-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="phone2">
          <div className="container">
            <div className="row">
              <div className="col-6 image"></div>
              <div className="col-6 text">
                <h2>...or offer one!</h2>
                <p>
                  Or you can offer a ride if you have a car and your colleagues will share the gas 
                  fees with you so it become easier for everyone to afford. Cause in these hard times
                  unity among us is a must.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer></Footer> 
    </>
  );
};