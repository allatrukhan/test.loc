import { useState, useRef} from "react";
import React from "react";
import Slider from "react-slick";
import LeftRightArrowsBlock from "../Buttons/LeftRightArrowsBlock/LeftRightArrowsBlock";
import MapPortal from "../MapPortal/MapPortal";
import './ImageLinksBlock.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageLinksBlock(){

    const [show, setShow] = useState(false);

    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };

    return(
        <div className="container links-block">
            <div className="row">
    
        <div className="col-12 col-md-6 col-sm-12 title-links">
            <h1>Посилання</h1>
           <LeftRightArrowsBlock previous={previous} next={next}/>
        </div>
        {/* <div className="col-12 col-md-6 col-sm-12 links"> */}
        <Slider  ref={slider => {
          sliderRef = slider;
        }} {...settings}>
            <div className="link-image-frame-1">
                <a className="image-link" href="https://dpss.gov.ua">
                    <img src='.././images/links_img_1.png' className="link_img" alt="link_img"/>
                </a>
                <div className="hide">Держпродспоживслужба України</div>
            </div>
            
            <div className="link-image-frame-2">
                <a className="image-link" href="https://nads.gov.ua/eksperymentalnyi-proekt-shchodo-stvorennia-rezervu-pratsivnykiv-derzhavnykh-orhaniv-dlia-roboty-na-deokupovanykh-terytoriiakh-ukrainy">
                    <img src='.././images/links_img_2.png' className="link_img"  alt="link_img"/></a>
                    <div className="hide">I am shown when after hovers</div>
            </div>
            <div className="link-image-frame-3">
                <a className="image-link" href="https://www.google.com.ua">
                    <img src='.././images/links_img_3.png' className="link_img" alt="link_img"/>
                </a>
                <div className="hide">I am shown when after hovers</div>
            </div>
            <div className="link-image-frame-4">
                <a className="image-link" href="https://www.google.com.ua">
                    <img src='.././images/links_img_4.png' className="link_img"  alt="link_img"/>
                </a>
                <div className="hide">I am shown when after hovers</div>
            </div>
            <div className="link-image-frame-1">
                <a className="image-link" href="https://dpss.gov.ua">
                    <img src='.././images/links_img_1.png' className="link_img" alt="link_img"/>
                </a>
                <div className="hide">I am shown when after hovers</div>
            </div>
            <div className="link-image-frame-2">
                <a className="image-link" href="https://nads.gov.ua/eksperymentalnyi-proekt-shchodo-stvorennia-rezervu-pratsivnykiv-derzhavnykh-orhaniv-dlia-roboty-na-deokupovanykh-terytoriiakh-ukrainy">
                    <img src='.././images/links_img_2.png' className="link_img"  alt="link_img"/></a>
                    <div className="hide">I am shown when after hovers</div>
            </div>
            <div className="link-image-frame-3">
                <a className="image-link" href="https://www.google.com.ua">
                    <img src='.././images/links_img_3.png' className="link_img" alt="link_img"/>
                    <div className="hide">I am shown when after hovers</div>
                </a>
            </div>
            <div className="link-image-frame-4">
                <a className="image-link" href="https://www.google.com.ua">
                    <img src='.././images/links_img_4.png' className="link_img"  alt="link_img"/>
                    <div className="hide">I am shown when after hovers</div>
                </a>
            </div>
            </Slider>
        {/* </div> */}
            </div>

            <div className="map-portal-header">
                <h1>Мапа порталy</h1>
                <button onClick={()=>setShow(!show)} className="show-mab-btn">
                    <img src='.././images/down_icon.png' className="down-btn" alt="down-icon"/>
                </button>
                {/* <MapPortal /> */}
                    {show && <MapPortal />}
            </div> 
        </div>
    )

}

export default ImageLinksBlock;   

