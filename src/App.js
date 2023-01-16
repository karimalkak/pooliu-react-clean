import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
import './App.scss';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import CreateTrip from './Pages/Create-Trip/CreateTrip';
import Register from './Pages/Register/Register';
import PickRide from './Pages/Pick-Ride/PickRide';
import SetupAccount from './Pages/Setup-account/SetupAccount';
import Verify from './Pages/Verify/Verify';
import AllRides from './Pages/All-Rides/AllRides';
import AllTrips from './Pages/All-Trips/AllTrips';
import EditProfile from './Pages/Edit-Profile/EditProfile';
import ResetPassword from './Pages/Reset-Password/ResetPassword';
import Main from './Pages/Main/Main';
 export default function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create-trip" element={<CreateTrip/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/pick-ride" element={<PickRide/>} />
          <Route path="/setup-account" element={<SetupAccount/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/all-rides" element={<AllRides/>} />
          <Route path="/all-trips" element={<AllTrips/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/edit-profile" element={<EditProfile/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
        </Routes> 
  );
}


