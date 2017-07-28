import * as React from 'react';
import * as ReactDOM from 'react-dom';
const gIcon = require('Images/google-play-store.png');
const aIcon = require('Images/AppStoreLogo.png');
const mapI = require('Images/map.png');
const icon = require('Images/icon.png');

class Contact extends React.Component<any, any> {
  componentDidMount(){
    document.addEventListener("DOMContentLoaded",()=>{
      var parallax:any = document.getElementById("mapCont");
      window.onscroll = () => {
          var curParaP:HTMLDivElement=parallax, windowYOffset = window.pageYOffset;
          if(windowYOffset>=curParaP.offsetTop){
            parallax.className = "mapCont act";
          }
      };
    })
  }
  render() {
    
    return (
      <section id="Contact">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Explore Spotts of Buddies Around the World</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text-center">
              <div id="mapCont" className="mapCont">
                <img src={mapI} className="map" />
                <img src={icon} className="icon1" />
                <img src={icon} className="icon2" />
                <img src={icon} className="icon3" />
                <img src={icon} className="icon4" />
                <img src={icon} className="icon5" />
                <img src={icon} className="icon6" />
                <img src={icon} className="icon7" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text-center">
            <a target="_blank" href="https://play.google.com/store" title="spotter application google play store link"><img src={gIcon} alt="spotter application google play store icon" title="spotter application google play store icon" /></a>
            <a target="_blank" href="https://play.google.com/store" title="spotter application apple play store link"><img src={aIcon} alt="spotter application apple play store icon" title="spotter application apple play store icon" /></a>
            </div>
          </div>
        </div>
      </section>
    );    
  }
  
}

export default Contact;
