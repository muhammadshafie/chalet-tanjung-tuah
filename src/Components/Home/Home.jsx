import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Chalet Bertemakan <br /> Dinding Kelarai
          </h1>

          <p className="subTitle">Leave All Behind and Enjoy The Nature!</p>

          <button className="btn">
            <a href="/">Explore Now</a>
          </button>
        </div>

        {/* <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Staycation" />
          </div>

          <div className="packageDiv">
            <label htmlFor="package">Location</label>
            <input type="text" placeholder="Premium Package" />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder="RM50-RM210" />
          </div>

          <button className="btn">Search</button>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
