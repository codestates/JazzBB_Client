import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows:true,
      autoplay:true,
      autoplaySpeed:4000,
      pauseOnHover:true,
      fade:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <div>
            <Link to="/posting" className="service-bannerWrapper">
                <img id="service-banner-top" src="/img/resource/service-banner-top.png" alt="banner(top)"/>
            </Link>
        </div>
        <div>
            <Link to="/posting" className="service-bannerWrapper">
                <img id="service-banner-top" src="/img/resource/service-banner-top2.png" alt="banner(top)"/>
            </Link>
        </div>

      </Slider>
    );
  }
}

export default SimpleSlider;