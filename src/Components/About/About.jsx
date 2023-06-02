import React from "react";
import "./about.css";

import icon1 from '../../Assets/hiking.svg';
import icon2 from '../../Assets/atv.svg';
import icon3 from '../../Assets/camping.svg';

import video from '../../Assets/videotest.mp4';

const About = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          What do We offer?
        </h2>

        <div className="mainContent container grid">
          <div className="aboutItem">
            <img src={icon1} alt="About Icon" />
            <h3>18km Hiking Distance</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptatibus fuga ratione debitis sed tempora!</p>
          </div>

          <div className="aboutItem">
            <img src={icon2} alt="About Icon" />
            <h3>20km ATV Track</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptatibus fuga ratione debitis sed tempora!</p>
          </div>

          <div className="aboutItem">
            <img src={icon3} alt="About Icon" />
            <h3>Campsite</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, voluptatibus fuga ratione debitis sed tempora!</p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>About Us</h2>
              <p>A peaceful place for anyone who wants to release stress and be close to nature. Surrounded by rivers, hills, and forests we offer an ideal gateway for family or friends gathering during weekends or public holidays.</p>
              <br/>
              <p>Chalet Tanjung Tuah is a family-run and Mr.Noradnan is the place's founder. His aim is to bring back the "kampung Vibes" to everyone that visited this chalet.</p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted></video>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default About;
