import React, { useState, useEffect } from "react";
import "./activity.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import { MdGroups, MdGroup, MdPerson } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import img1 from "../../Assets/activities/water-rafting.jpg"
import img2 from "../../Assets/activities/atv-ride.png"
import img3 from "../../Assets/activities/hiking.png"

const iconMap = {
  MdGroups: MdGroups,
  MdGroup: MdGroup,
  MdPerson: MdPerson,
};


const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const dataAPI = async () => {    
      // Sheet ID
      const gid = '1160060883';
      const gsheet = process.env.REACT_APP_SHEET_API;

      const url = `https://docs.google.com/spreadsheets/d/${gsheet}/gviz/tq?tqx=out:json&tq&gid=${gid}`;

      // console.log(url);
      const response = await fetch(url);
      const data = await response.text();
      // const testData = await response.json();
      // console.log(data);

      const jsonString = data.substring(47).slice(0, -2);
      const jsonData = JSON.parse(jsonString);

      console.log(jsonData);

      setActivities(jsonData.table.rows);

    };

    dataAPI();

    // console.log(activities);

    // Call the API every 5 minutes
    const intervalId = setInterval(dataAPI, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [])

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

          <Swiper 
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
          }}>
            {activities.map((activities, index) => {
              var activity_id = activities.c[0]?.f || activities.c[0]?.v;
              var activity_name = activities.c[1]?.f || activities.c[1]?.v;
              var description = activities.c[2]?.f || activities.c[2]?.v;
              var per_pax = activities.c[3]?.f || activities.c[3]?.v;
              var price = activities.c[4]?.f || activities.c[4]?.v;
              var pic = activities.c[5]?.f || activities.c[5]?.v;
              var icon = activities.c[6]?.f || activities.c[6]?.v;
              const IconComponent = iconMap[icon];
              return (
              <SwiperSlide key={index}>
                <div className="singleActivity">
                  <div className="actImage">
                    <img src={pic} alt="Image Title" />

                    <div className="overlayInfo">
                      <h3>{activity_name}</h3>
                      <p>{per_pax}</p>

                      <BsArrowRightShort className="icon" />
                    </div>
                  </div>

                  <div className="actFooter">
                    <div className="number">
                      0{activity_id}
                    </div>

                    <div className="actText flex">
                      <h6>{activity_name}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className="icon" />
                        </span>
                        {IconComponent && <IconComponent className="icon" />}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              )
            })
            } 
          </Swiper>

      </div>
    </section>);
};

export default Activities;
