import * as React from 'react';
const gIcon = require('Images/google-play-store.png');
const aIcon = require('Images/AppStoreLogo.png');
const bImg = require('Images/banne-img.png');

const Banner = () => {
    return (
      <section id="Home" className="Banner">
          <div className="container">
              <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <h2>IN THIS WORLD,
                    A LOT IS HAPPENING.
                    ARE YOU?</h2>
                    <div>
                        <a target="_blank" href="https://play.google.com/store" title="spotter application google play store link"><img src={gIcon} alt="spotter application google play store icon" title="spotter application google play store icon" /></a>
                        <a target="_blank" href="https://play.google.com/store" title="spotter application apple play store link"><img src={aIcon} alt="spotter application apple play store icon" title="spotter application apple play store icon" /></a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12 text-center">
                      <img src={bImg} alt="spotter application first screen" title="spotter application first screen" />
                  </div>
              </div>
          </div>
      </section>
    )
}

export default Banner;
