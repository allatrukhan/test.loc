import './HeaderMainTitleBlock.scss';

function HeaderMainTitleBlock(){

    return(
        <div className="container">
            <div className="row">
                <div className="central-content">
                {/* col-6 order-xl-0 col-md-12 order-2  */}
                    <img src=".././images/emblem_img.png" className="emblem-img" alt="emblem"/>
                    <div className="central-title">
                        <p className="text1">
                            Головне управління Держпродспоживслужби в Кіровоградській області
                        </p>
                        <p className="text2">
                            Офіційний веб-сайт (веб-портал)
                        </p>    
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeaderMainTitleBlock;   