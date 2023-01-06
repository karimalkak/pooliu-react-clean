import logo from './logo.svg';
import './App.scss';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


 export default function App() {
  return (
     
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    
  );
}


