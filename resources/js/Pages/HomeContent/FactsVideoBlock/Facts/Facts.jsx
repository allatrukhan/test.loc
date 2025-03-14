import LeftRightArrowsBlock from '../../../Components/Buttons/LeftRightArrowsBlock/LeftRightArrowsBlock';
import { useRef} from "react";
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function Facts(){


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
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      return(
        <div className="facts">
        <div className="facts-header">
            <h1>Події</h1>
            <LeftRightArrowsBlock previous={previous} next={next}/>
        </div>
        <Slider  ref={slider => {
                sliderRef = slider;
                }} {...settings}>
        <div key={1}>
            <img src=".././images/facts_img.png" className="last-news-img" alt="news-img"/>
            <div className="description">
                <div className="description-block">
                    <h4> Прем’єр-міністр: Україна налаштована реалізувати модель справедливої трансформації вугільних регіонів</h4>
                </div>
                <div className="date">
                    <h2>12 липня 2023</h2>
                </div>
            </div>
        </div>
        <div key={2}>
            <img src=".././images/video_img.png" className="last-news-img" alt="news-img"/>
            <div className="description">
                <div className="description-block">
                    <h4> Прем’єр-міністр: Україна налаштована реалізувати модель справедливої трансформації вугільних регіонів</h4>
                </div>
                <div className="date">
                    <h2>12 липня 2023</h2>
                </div>
            </div>
        </div>

        <div key={3}>
            <img src=".././images/facts_img.png" className="last-news-img" alt="news-img"/>
            <div className="description">
                <div className="description-block">
                    <h4> Прем’єр-міністр: Україна налаштована реалізувати модель справедливої трансформації вугільних регіонів</h4>
                </div>
                <div className="date">
                    <h2>12 липня 2023</h2>
                </div>
            </div>
        </div>
        </Slider>   
    </div>
      )

    }

    export default Facts;  
