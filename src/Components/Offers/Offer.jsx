import React from "react";
import "./offer.css";
import { MdKingBed, MdBathtub, MdBalcony, MdWifiOff } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { IoPricetag } from "react-icons/io5";


import img1 from '../../Assets/package/room-1.png';
import img2 from '../../Assets/package/campsite-A.jpg';
import img3 from '../../Assets/package/campsite-B.png';

const Offers = [
  {
    id: 1,
    imgSrc: img1,
    offerTitle: 'Chalet Package 1',
    offerTag: "20% Off",
    price: 'RM120',
  },

  {
    id: 2,
    imgSrc: img2,
    offerTitle: 'Camping Package 1',
    offerTag: "30% Off",
    price: 'RM100',
  },

  {
    id: 3,
    imgSrc: img3,
    offerTitle: 'Camping Package 2',
    offerTag: "10% Off",
    price: 'RM80',
  },
]

const Offer = () => {
  return <section className="offer section">
    <div className="secContainer container">
      <div className="secIntro">
        <h2 className="secTitle">
          Special Offers
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, debitis!</p>
      </div>

      <div className="mainContent grid">

        {
          Offers.map(({ id, imgSrc, offerTitle, location, offerTag, price }) => {
            return (
              <div className="singleOffer">
                <div className="offerImage">
                  <img src={imgSrc} alt="Offer Image" />

                  <span className="discount">
                    {offerTag}
                  </span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>{offerTitle}</h4>
                    <span className="status">
                      Available
                    </span>
                  </div>

                  <div className="benefit flex">
                    <div className="singleBenefit flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleBenefit flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleBenefit flex">
                      <MdBalcony className="icon" />
                      <small>1 Balcony</small>
                    </div>
                    <div className="singleBenefit flex">
                      <MdWifiOff className="icon" />
                      <small>No Wi-Fi</small>
                    </div>
                  </div>

                  <div className="priceTag flex">
                    <IoPricetag className="icon" />
                    <small>{price}</small>
                  </div>

                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  </section>;
};

export default Offer;
