import { Head } from '@inertiajs/react';
import Layout from '../Layout';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';

import './HashTagSearchPage.scss';

function HashTagSearchPage(){

    return(
        <>
        <Head title="Пошук" />
        <div className="container hashtag-search-content">
        <div className="path-block">   
            <Breadcrumbs/>
        </div>
    
        <div className="hashtag-search-content-header">
            <div className="hashtag-search-content-header-text-1">
                <p>Ви шукали за хештегом <b>“ПРАВО”</b>. Знайдено 87 матеріалів</p>
            </div>
            <div className="hashtag-search-content-header-text-2">
                <h1>Право</h1>
            </div>
            <hr/>
        </div>
    
         <div className="hashtag-search-main-content">
            <div className="row">
       
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">1</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-1-2-1">
                        <h4>Деякі питання визнання іноземних сертифікатів відкритих ключів, 
                            електронних підписів, а також використання інформаційно-комунікаційної системи центрального 
                            засвідчувального органу для забезпечення визнання в Україні електронних довірчих послуг, 
                            іноземних сертифікатів відкритих ключів, що використовуються під час надання юридично значущих 
                            електронних послуг у процесі взаємодії між суб’єктами різних держав</h4>
                    </div>
                    <div className="hashtag-search-block-1-2-2">
                        <h2>14 листопада 2023 р., № 1198</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">2</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-2-2-1">
                        <h4>Про затвердження Порядку підготовки, перепідготовки та підвищення 
                            кваліфікації фахівців у сфері утвердження української національної та громадянської ідентичності</h4>
                    </div>
                    <div className="hashtag-search-block-2-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">3</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-3-2-1">
                        <h4>Заходи з імунізації домашніх тварин проти сказу тривають на території Чугуївського району</h4>
                    </div>
                    <div className="hashtag-search-block-3-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">4</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-4-2-1">
                        <h4>На території Лозівського району тривають заходи з імунізації домашніх тварин проти сказу</h4>
                    </div>
                    <div className="hashtag-search-block-4-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">5</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-5-2-1">
                        <h4>Заходи з імунізації домашніх тварин проти сказу тривають на території Чугуївського району</h4>
                    </div>
                    <div className="hashtag-search-block-5-2-2">
                        <h2 className="date-source">12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">6</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-6-2-1">
                        <h4>Про затвердження Порядку підготовки, перепідготовки та підвищення 
                            кваліфікації фахівців у сфері утвердження української національної та громадянської ідентичності</h4>
                    </div>
                    <div className="hashtag-search-block-6-2-2">
                        <h2>14 листопада 2023 р., № 1198</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">7</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-7-2-1">
                        <h4>Про затвердження Порядку підготовки, перепідготовки та підвищення 
                            кваліфікації фахівців у сфері утвердження української національної та громадянської ідентичності</h4>
                    </div>
                    <div className="hashtag-search-block-7-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">8</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-8-2-1">
                        <h4>Заходи з імунізації домашніх тварин проти сказу тривають на території Чугуївського району</h4>
                    </div>
                    <div className="hashtag-search-block-8-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">9</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-9-2-1">
                        <h4>На території Лозівського району тривають заходи з імунізації домашніх тварин проти сказу</h4>
                    </div>
                    <div className="hashtag-search-block-9-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">10</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-10-2-1">
                        <h4>Заходи з імунізації домашніх тварин проти сказу тривають на території Чугуївського району</h4>
                    </div>
                    <div className="hashtag-search-block-10-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">11</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-11-2-1">
                        <h4>Заходи з імунізації домашніх тварин проти сказу тривають на території Чугуївського району</h4>
                    </div>
                    <div className="hashtag-search-block-11-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">12</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-12-2-1">
                        <h4>Про затвердження Порядку підготовки, перепідготовки та підвищення 
                            кваліфікації фахівців у сфері утвердження української національної та громадянської ідентичності</h4>
                    </div>
                    <div className="hashtag-search-block-12-2-2">
                        <h2>14 листопада 2023 р., № 1198</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">13</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-13-2-1">
                        <h4>Про затвердження Порядку підготовки, перепідготовки та підвищення 
                            кваліфікації фахівців у сфері утвердження української національної та громадянської ідентичності</h4>
                    </div>
                    <div className="hashtag-search-block-13-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">14</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-14-2-1">
                        <h4>Заходи з імунізації домашніх тварин проти сказу тривають на території Чугуївського району</h4>
                    </div>
                    <div className="hashtag-search-block-14-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">15</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-15-2-1">
                        <h4>На території Лозівського району тривають заходи з імунізації домашніх тварин проти сказу</h4>
                    </div>
                    <div className="hashtag-search-block-15-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 hashtag-search-block">
                <div className="hashtag-search-block-1">
                    <p className="number-search-result">16</p>
                </div>
                <div className="hashtag-search-block-2">
                    <div className="hashtag-search-block-16-2-1">
                        <h4>Заходи з імунізації домашніх тварин проти сказу тривають на території Чугуївського району</h4>
                    </div>
                    <div className="hashtag-search-block-16-2-2">
                        <h2>12 липня 2023</h2>
                    </div>
                </div>
            </div>
            <div className="col-12 show-more-btn-block">
                <button type="button" className="show-more-btn">Показати більше
                    <img src=".././images/all_news_btn_icon.png" className="show-more-btn-icon" alt="show-more-btn-icon"/>
                </button> 
            </div>
        </div>
        </div>
    </div></>
    )
}

HashTagSearchPage.layout = page => <Layout children={page} title="Пошук" />

export default HashTagSearchPage;   