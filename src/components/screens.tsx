import * as React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const logo = require(`Images/Flickr_ICON.png`);
const screen = require(`Images/screenshot.png`);


class Screens extends React.Component<any, any> {
  render() {
    const sts = window.innerWidth >= 1025 ? 5 : window.innerWidth >= 768 ? 3 : 1;
    const settings = {
	  dots: false,
	  autoplay: true,
	  fade: false,
	  draggable: false,
      infinite: true,
      speed: 500,
      slidesToShow: sts,
      slidesToScroll: 1,
    };
    return (
        <section id="Screens" className="carousel-cont">
            <div className="phonecase"></div>
            <Slider {...settings}>
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
                <img src={screen} alt="screenshot" />
            </Slider>
        </section>
    );
  }
}

export default Screens;
