import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Activities from "./Components/Activities/Activities";
import Offers from "./Components/Offers/Offer";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Activities />
      <Offers />
      <About />
      <Footer />
    </>
  );
};

export default App;
