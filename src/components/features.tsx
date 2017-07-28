import * as React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const bImg = require('Images/banne-img.png');
const features = require('../features.json');

var slideIndex = 1;
var time:any;

class Features extends React.Component<any, any> {
    constructor(){
        super();
        this.state = {
            images: features.images,
        }
    }
    showDivs = (n:number) => {
        var i;
        var x = document.getElementsByClassName("nslide");
        var dots = document.getElementsByClassName("dot");
        slideIndex = n > x.length ? 1 : n < 1 ? x.length : n ;
        for (i = 0; i < x.length; i++) {
            x[i].className = "row nslide";  
            dots[i].className = "dot";
        }
        x[slideIndex-1].className = "row nslide act";  
        dots[slideIndex-1].className = "dot act";
        time = setTimeout(()=>{this.showDivs(slideIndex+=1)},5000)
    }
    currentDiv = (n:number) => {
        clearTimeout(time);
        this.showDivs(n);
    }
    componentDidMount() {
        this.showDivs(slideIndex);
    }
  render() {
      const imgs= this.state.images;
    return (
      <section id="Features">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h2>Features</h2>
                </div>
            </div>
            <div className="feature-slider">
                {
                    imgs.length > 0 ? imgs.map((data:any)=>
                        <div key={data.id} className={`row nslide`}>
                            <div className="col-md-5 col-sm-6 col-xs-12">
                                <img src={require(`Images/${data.img}`)} alt="Spotter Profile Screen Image" title="Spotter Profile Screen Image" />
                            </div>
                            <div className="col-md-7 col-sm-6 col-xs-12">
                                <i className={`fa fa-${data.icon}`}></i>
                                <h3>{data.title}</h3>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    ) : null
                }
                <div className="dots">
                {
                    imgs.length > 0 ? imgs.map((data:any)=>
                        <a key={data.id} className={`dot`} onClick={()=>this.currentDiv(data.id)}>
                        </a>
                    ) : null
                }
                </div>
                
            </div>
        </div>
      </section>
    );    
  }
}

export default Features;
