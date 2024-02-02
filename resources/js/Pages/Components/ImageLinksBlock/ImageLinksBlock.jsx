import { useState } from "react";

import LeftRightArrowsBlock from "../Buttons/LeftRightArrowsBlock/LeftRightArrowsBlock";
import MapPortal from "../MapPortal/MapPortal";
import './ImageLinksBlock.scss';

function ImageLinksBlock(){

    const [show, setShow] = useState(false);

    return(
        <div className="container links-block">
            <div className="row">
    
        <div className="col-12 col-md-6 col-sm-12 title-links">
            <h1>Посилання</h1>
           <LeftRightArrowsBlock/>
        </div>
        <div className="col-12 col-md-6 col-sm-12 links">
            <div className="link-image-frame-1">
                <a className="image-link" href="https://dpss.gov.ua">
                    <img src='.././images/links_img_1.png' className="link_img" alt="link_img"/>
                </a>
            </div>
            <div className="link-image-frame-2">
                <a className="image-link" href="https://nads.gov.ua/eksperymentalnyi-proekt-shchodo-stvorennia-rezervu-pratsivnykiv-derzhavnykh-orhaniv-dlia-roboty-na-deokupovanykh-terytoriiakh-ukrainy">
                    <img src='.././images/links_img_2.png' className="link_img"  alt="link_img"/></a>
            </div>
            <div className="link-image-frame-3">
                <a className="image-link" href="https://www.google.com.ua">
                    <img src='.././images/links_img_3.png' className="link_img" alt="link_img"/>
                </a>
            </div>
            <div className="link-image-frame-4">
                <a className="image-link" href="https://www.google.com.ua">
                    <img src='.././images/links_img_4.png' className="link_img"  alt="link_img"/>
                </a>
            </div>
        </div>
            </div>

            <div className="map-portal-header">
                <p className="map-portal-title">Мапа порталy</p>
                <button onClick={()=>setShow(!show)}>
                    <img src='.././images/down_icon.png' className="down-btn" alt="down-icon"/>
                </button>
                {/* <MapPortal /> */}
                    {show && <MapPortal />}
            </div> 
        </div>
    )

}

export default ImageLinksBlock;   

