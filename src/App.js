import React from 'react';
import './App.css';
import FetchIpDataApi from "./services/FetchIpDataApi";
import FetchWeatherDataApi from "./services/FetchWeatherDataApi";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App()  {

  if (window.location.pathname === "/") {
    return (
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
    );
  }
  if (window.location.pathname === "/localisation") {
      return (
          <div>
              <Navbar />
              <FetchIpDataApi />
              <Footer />
          </div>
      );
  }
  if (window.location.pathname === "/meteo") {
      return (
          <div>
              <Navbar />
              <FetchWeatherDataApi />
              <Footer />
          </div>
      );
  }
}


export default App;
