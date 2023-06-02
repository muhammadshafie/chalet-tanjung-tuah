import React from "react";
import "./footer.css";
import footervid from "../../Assets/footervideo-2.mp4";
import { FiSend } from "react-icons/fi";
import { BsInstagram, BsFacebook, BsTiktok, BsWhatsapp } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

import logo from "../../Assets/logo.png"

const Data = [
  {
    id: 1,
    actTitle: "Kayak",
  },

  {
    id: 2,
    actTitle: "ATV Ride",
  },

  {
    id: 3,
    actTitle: "Hiking",
  },
];

const Data2 = [
  {
    id: 1,
    packageTitle: "Chalet Package 1",
  },

  {
    id: 2,
    packageTitle: "Chalet Package 2",
  },

  {
    id: 3,
    packageTitle: "Camping",
  },
];

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={footervid} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Explore with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              Send <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" rel="noreferrer" className="logo flex">
                <img src={logo} alt="" className="icon"/> Chalet Tanjung Tuah
              </a>
            </div>

            <div className="footerParagraph">
              Kami tidak menjanjikan kemewahan tetapi kegembiraan bersama alam
              semula jadi
            </div>

            <div className="footerSocials flex">
              <a href="https://www.instagram.com/chalettanjungtuah/" target="_blank" rel="noreferrer">
                <BsInstagram className="icon" />
              </a>
              <a href="https://www.facebook.com/chalettanjungtuah" target="_blank" rel="noreferrer">
                <BsFacebook className="icon" />
              </a>
              <a href="https://www.tiktok.com/@chalettanjungtuah" target="_blank" rel="noreferrer">
                <BsTiktok className="icon" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=60179519547&text=%20Hi,%20%20Nak%20booking%20penginapan%20di%20Chalet%20Tanjung%20Tuah%20boleh?" target="_blank" rel="noreferrer">
                <BsWhatsapp className="icon" />
              </a>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Section One */}
            <div className="linkGroup">
              <span className="groupTitle">OUR ACTIVITIES</span>

              {Data.map(({ id, actTitle }) => {
                return (
                  <li className="footerList flex">
                    <AiOutlineSwapRight className="icon" />
                    {actTitle}
                  </li>
                );
              })}
            </div>

            {/* Section Two */}
            <div className="linkGroup">
              <span className="groupTitle">OUR PACKAGE</span>

              {Data2.map(({ id, packageTitle }) => {
                return (
                  <li className="footerList flex">
                    <AiOutlineSwapRight className="icon" />
                    {packageTitle}
                  </li>
                );
              })}
            </div>

            {/* Section Two */}
            <div className="linkGroup">
              <span className="groupTitle">OUR PACKAGE</span>

              {Data2.map(({ id, packageTitle }) => {
                return (
                  <li className="footerList flex">
                    <AiOutlineSwapRight className="icon" />
                    {packageTitle}
                  </li>
                );
              })}
            </div>

            {/* Section Two */}
            <div className="linkGroup">
              <span className="groupTitle">OUR PACKAGE</span>

              {Data2.map(({ id, packageTitle }) => {
                return (
                  <li className="footerList flex">
                    <AiOutlineSwapRight className="icon" />
                    {packageTitle}
                  </li>
                );
              })}
            </div>
          </div>

          <div className="footerCopyright flex">
            <small>Designed & Built by Muhammad Shafie</small>
            <small>Copyright ©2023. All Rights Reserved </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
