import React, { useState } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Accordion from "../../Components/Accordion/Accordion";
import Trip from "../../Components/Trips/trip";
import Ride from "../../Components/Rides/Ride";
import axios from "axios";
import "./alltrips.scss";

const AllTrips = () => {
  // const [isPicked, setIsPicked] = useState(false);
  // const [noDrivers, setNoDrivers] = useState(false);
  const [name, setName] = useState([]);
  const [rating, setRating] = useState([]);
  const [date, setDate] = useState([]);
  const [location, setLocation] = useState([]);
  const [campus, setCampus] = useState([]);

  // const pick = async () => {
  //   try {
  //     const result = await axios.get(
  //       `http://localhost:8000/api/my-trips?user_id=${localStorage.getItem("id")}`
  //     );
  //     console.log(result.data);
  //     if (result.data.trips.trips.length === 0) {
  //       setNoDrivers(true);
  //       setIsPicked(false);
  //     } else {
  //       for (let i = 0; i < result.data.trips.trips.length; i++) {
  //         setName(result.data.trips.trips[i].driver_name);
  //         setRating(result.data.rides.trips[i].driver_score);
  //         setTime(result.data.rides.trips[i].time);
  //         setId(result.data.rides.trips[i].id);
  //       }
  //       setIsPicked(true);
  //       setNoDrivers(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <Navigation />
      <div className="all-rides">
        <div className="container">
          <h1 className="my-5">MY TRIPS</h1>
          <Trip />          
        </div>
      </div>
    </>
  );
};

export default AllTrips;
