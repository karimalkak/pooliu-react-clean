import React, { useState, useEffect } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Ride from "../../Components/Rides/Ride";
import axios from "axios";
import "./allrides.scss";

function AllRides() {
  // const [isPicked, setIsPicked] = useState(false);
  // const [noDrivers, setNoDrivers] = useState(false);
  const [name, setName] = useState([]);
  const [rating, setRating] = useState([]);
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);
  const [campus, setCampus] = useState([]);

  const getRides = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8000/api/my-trips?user_id=${localStorage.getItem("id")}`
      );
      console.log(result.data);
      if (result.data.trips.trips.length === 0) {
        // setNoDrivers(true);
        // setIsPicked(false);
      } else {
        for (let i = 0; i < result.data.trips.trips.length; i++) {
          setName(result.data.trips.trips[i].driver_name);
          setRating(result.data.trips.trips[i].driver_score);
          setDate(result.data.trips.trips[i].date);
          setTime(result.data.trips.trips[i].time);
          setCampus(result.data.trips.trips[i].campus);
          //setId(result.data.trips.trips[i].id);
        }
        // setIsPicked(true);
        // setNoDrivers(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRides();
  }, []);

  return (
    <>
      <Navigation />
      <div className="all-rides">
        <div className="container">
          <h1 className="my-5">MY RIDES</h1>
          <Ride
            name={name}
            rating={rating}
            date={date}
            time={time}
            campus={campus}
          />
        </div>
      </div>
    </>
  );
}

export default AllRides;
