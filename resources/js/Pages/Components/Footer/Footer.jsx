import SocialNetworkBtnsGroup from '../Buttons/SocialNetworkBtnsGroup/SocialNetworkBtnsGroup';
import './Footer.scss';

function Footer(){

    return(
        <div className="container layout-footer">
            <div className="row">
                <div className="col-md-9 block-one">
                    <h2> © 2016-2023 Головне управління Держпродспоживслужби в Кіровоградській області. 
                        Усі права на матеріали, що розміщено на даному сайті, охороняються відповідно до чинного законодавства України. 
                        При будь-якому використанні матеріалів сайту, гіперпосилання на сайт обов'язкове.</h2>
                </div>
                <div className="col-md-1 block-two">
                    <SocialNetworkBtnsGroup/>
                </div>
                <div className="col-md-2  block-three">
                    <div className="developer-block">
                        <h2> Розробка сайту:</h2>
                        <a href="https://doroshenko.agency"> Doroshenko agency</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;   