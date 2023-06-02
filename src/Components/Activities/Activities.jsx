import React from "react";
import "./activity.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import { MdGroups, MdGroup, MdPerson } from "react-icons/md";

import img1 from "../../Assets/activities/water-rafting.jpg"
import img2 from "../../Assets/activities/atv-ride.png"
import img3 from "../../Assets/activities/hiking.png"

const Data = [

  {
    id: 1,
    imgSrc: img1,
    actTitle: 'Kayak',
    perPax: "2 per session",
    price: 'RM80',
    icon: "MdGroups",
  },

  {
    id: 2,
    imgSrc: img2,
    actTitle: 'ATV Ride',
    perPax: "2 per session",
    price: 'RM80',
    icon: "MdGroup",
  },

  {
    id: 3,
    imgSrc: img3,
    actTitle: 'Hiking',
    perPax: "1 per session",
    price: 'RM10',
    icon: "MdPerson",
  },

]

const iconMap = {
  MdGroups: MdGroups,
  MdGroup: MdGroup,
  MdPerson: MdPerson,
};

const Activities = () => {
  return (
    <section className="activity section">
      <div className="secContainer container">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Activity</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, ipsum non, est natus doloribus soluta incidunt delectus, ab rerum tempora labore? Repudiandae, iure! Eius, dolore!</p>

          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {
            Data.map(({ id, imgSrc, actTitle, perPax, price, icon }) => {
              const IconComponent = iconMap[icon];
              return (
                <div className="singleActivity">
                  <div className="actImage">
                    <img src={imgSrc} alt="Image Title" />

                    <div className="overlayInfo">
                      <h3>{actTitle}</h3>
                      <p>{perPax}</p>

                      <BsArrowRightShort className="icon" />
                    </div>
                  </div>

                  <div className="actFooter">
                    <div className="number">
                      0{id}
                    </div>

                    <div className="actText flex">
                      <h6>{actTitle}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className="icon" />
                        </span>
                        {IconComponent && <IconComponent className="icon" />}
                      </span>
                    </div>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>
    </section>);
};

export default Activities;
