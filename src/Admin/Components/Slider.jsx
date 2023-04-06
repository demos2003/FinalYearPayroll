import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./center.css";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
    };
    return (
      <div className="sliders">
        <Slider {...settings}>
          <div>
            <div className="center_desc-holder">
              <img
                src="/images/Employees.png"
                alt=""
                className="photo_size"
              />
              <h5 className="mt-3">Employees</h5>
            </div>
          </div>
          <div>
            <div className="center_desc-holder">
              <img
                src="/images/Positions.png"
                alt=""
                className="photo_size"
              />
              <h5 className="mt-3">Positions</h5>
            </div>
          </div>
          <div>
            <div className="center_desc-holder">
              <img
                src="/images/Payslip.png"
                alt=""
                className="photo_size"
              />
              <h5 className="mt-3">Payslip</h5>
            </div>
          </div>
          <div>
            <div className="center_desc-holder">
              <img
                src="/images/Dashboard.png"
                alt=""
                className="photo_size"
              />
              <h5 className="mt-3">Dashboard</h5>
            </div>
          </div>
          <div>
            <div className="center_desc-holder">
              <img
                src="/images/EmployeeSettings.png"
                alt=""
                className="photo_size"
              />
              <h5 className="mt-3">Settings</h5>
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}