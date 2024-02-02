import LeftRightArrowsBlock from '../../Components/Buttons/LeftRightArrowsBlock/LeftRightArrowsBlock';

import './FactsVideoBlock.scss';

function FactsVideoBlock(){

    return(
        <div className="facts-video-block">
            <div class="facts">
                <div class="facts-header">
                    <h1>Події</h1>
                    <LeftRightArrowsBlock/>
                </div>
                <img src=".././images/facts_img.png" class="last-news-img" alt="news-img"/>
                <div class="description">
                    <div class="description-block">
                        <h4> Прем’єр-міністр: Україна налаштована реалізувати модель справедливої трансформації вугільних регіонів</h4>
                    </div>
                    <div class="date">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div class="video">
            <div class="video-header">
                <h1>Відеосюжети</h1>
                <LeftRightArrowsBlock/>
            </div>
                <img src=".././images/video_img.png" class="last-news-img" alt="news-img"/>
                <div class="description">
                    <div class="description-block">
                        <h4>Промова Прем’єр-міністра України Дениса Шмигаля на засіданні Уряду 10 листопада </h4>
                    </div>
                    <div class="date">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FactsVideoBlock;   