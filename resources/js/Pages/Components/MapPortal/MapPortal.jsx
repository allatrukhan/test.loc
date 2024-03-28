import Masonry from 'react-masonry-css'

import './MapPortal.scss';

function MapPortal(){

    // const breakpointColumnsObj = {
    //     default: 3,
    //     1100: 2,
    //     700: 1,
    //     500:1
    //   };

    return(
        <Masonry
            breakpointCols={3}
            className="container row my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-1">
                    <a href="#">Про управління</a>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-2">
                    <a href="#">Діяльність</a>
                </div>        
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-3">
                    <a href="#">Напрямки</a>
                </div>    
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-4">
                    <a href="#">Про Головне управління</a>
                </div>   
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-5">
                    <div className="map-block-5-title">
                        <a href="#">Суб'єктам господарювання</a>
                    </div>
                    <div className="map-block-5-content">
                        <a href="#">Декларації малих виробництв виноробної продукції</a> 
                    </div>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-6">
                    <div className="map-block-6-title">
                        <a href="#">Контроль за цінами</a>
                    </div>
                    <div className="map-block-6-content">
                        <div className="inner-block-6-1-1">
                            <a href="#">В умовах воєнного стану</a>
                        </div>
                        <div className="inner-block-6-1-2">
                            <a href="#">Заходи щодо стабілізації цін (COVID-19)</a>
                        </div>
                        <div className="inner-block-6-1-3">
                            <a href="#">Основні напрямки діяльністі</a>
                        </div>
                        <div className="inner-block-6-1-4">
                            <a href="#">Державний контроль за регульованими цінами</a>
                        </div>
                        <div className="inner-block-6-1-5">
                            <a href="#">Актуальна інформація</a>
                        </div>
                    </div>
                </div>           
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-7">
                    <a href="#">Структура</a>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-8">
                    <div className="map-block-8-title">
                        <a href="#"> Внутрішній аудит  </a>
                    </div> 
                    <div className="map-block-8-content"> 
                        <div className="inner-block">
                            <div className="inner-block-1">
                                <a href="#">Планування діяльності</a>
                            </div>
                            <div className="inner-block-2">
                                <div className="inner-block-2-1-1">
                                    <a href="#">Оперативний план діяльності Держпродспоживслужби
                                            з внутрішнього аудиту на 2020 рік</a> 
                                </div>
                                <div className="inner-block-2-1-2">
                                    <a href="#">Стратегічний план діяльності Держпродспоживслужби 
                                            з внутрішнього аудиту на 2019 - 2021 роки (із змінами)</a>
                                </div>
                                <div className="inner-block-2-1-3">
                                    <a href="#">План діяльності з внутрішнього аудиту в Держпродспоживслужби 
                                            та її територіальних органах на ІІ півріччя 2018 року</a>   
                                </div>
                            </div>
                            <div className="inner-block-3">
                                <a href="#">Основні напрямки діяльності</a>
                            </div>
                            <div className="inner-block-4">
                                <a href="#">Декларація внутрішнього аудиту</a>
                            </div>
                            <div className="inner-block-5">
                                <a href="#">Перелік нормативно-правових актів</a>
                            </div>
                        </div>
                    </div>
                </div>     
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-9">
                    <div className="map-block-9-title">
                        <a href="#">Фітосанітарна безпека, насінництво та розсадництво</a>
                    </div>
                    <div className="map-block-9-content">
                        <div className="inner-block-9-1">
                            <a href="#">Основні напрямки діяльності</a>
                        </div>
                        <div className="inner-block-9-2">
                            <a href="#">Пам'ятки</a>
                        </div>
                        <div className="inner-block-9-3">
                            <a href="#">Перелік нормативно-правових актів</a>  
                        </div>
                        <div className="inner-block-9-4">
                            <a href="#">Довідники</a>  
                        </div>
                        <div className="inner-block-9-5">
                            <div className="inner-block-9-5-content-1">
                                <a href="#">Наказ перелік регульованих шкідливих організмів</a>
                            </div>
                            <div className="inner-block-9-5-content-2">
                                <a href="#">Переліки шкідливих організмів А1 та А2 ЄОКЗР</a>
                            </div>
                        </div>
                        <div className="inner-block-9-6">
                            <a href="#">Фітосанітарний моніторинг і прогноз</a> 
                        </div>
                        <div className="inner-block-9-7">
                            <a href="#">Фітосанітарні вимоги країн імпортерів</a>     
                        </div>
                        <div className="inner-block-9-8">
                            <a href="#">Адміністративні послуги</a>     
                        </div>
                        <div className="inner-block-9-9">
                            <a href="#">Перелік тестових питань та варіанти відповідей для проходження 
                                        тестування осіб, діяльність яких пов’язана з транспортуванням, зберіганням, застосуванням, 
                                        торгівлею пестицидами</a>     
                        </div>
                        <div className="inner-block-9-10">
                            <a href="#">Фітосанітарний стан області</a>     
                        </div>
                        <div className="inner-block-9-11">
                            <a href="#">Розпорядження про запровадження або скасування карантинного 
                                        режиму, 
                                        у тому числі переліку територій, на яких запроваджено карантинний режим</a>
                        </div>
                        <div className="inner-block-9-12">
                            <a href="#">Бланки фітосанітарних документів та заяв</a>
                        </div>
                        <div className="inner-block-9-13">
                            <div className="inner-block-9-13-content">
                                <div className="inner-block-9-13-content-1">
                                    <a href="#">Заява на оформлення фітосанітарного сертифіката, фітосанітарного 
                                            сертифіката на реекспорт, карантинного сертифіката</a>
                                </div>
                                <div className="inner-block-9-13-content-2">
                                    <a href="#">Заява на обстеження КНР</a>
                                </div>
                                <div className="inner-block-9-13-content-3">
                                    <a href="#">Фітосанітарний сертифікат</a>
                                </div>
                                <div className="inner-block-9-13-content-4">
                                    <a href="#">Заява про встановлення статусу вільних ділянок</a>
                                </div>
                                <div className="inner-block-9-13-content-5">
                                    <a href="#">Карантинний сертифікат</a>
                                </div>
                                <div className="inner-block-9-13-content-6">
                                    <a href="#">Заява про проведення перевірки та реєстрацію особи</a>
                                </div>
                                <div className="inner-block-9-13-content-7">
                                    <a href="#">Заява на проведення фітосанітарних процедур</a>
                                </div>
                            </div>
                        </div>
                        <div className="inner-block-9-14">
                            <a href="#">Рекомендації щодо торгівлі насінням</a>  
                        </div>
                        <div className="inner-block-9-15">
                            <a href="#">Перелік лабораторій з визначення посівних якостей насіння</a>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-10">
                    <a href="#">Розпорядок роботи</a>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-11">
                    <a href="#">Оцінювання службової діяльності посадових осіб</a>
                </div>           
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-12">
                    <div className="map-block-12-title">
                        <a href="#">Харчові продукти та ветеринарна медицина</a>
                    </div>
                    <div className="map-block-12-content">
                        <div className="inner-block-6-12-content-1">
                            <a href="#">Основні напрямки діяльності</a>
                        </div>
                        <div className="inner-block-6-12-content-2">
                            <a href="#">Перелік нормативно-правових актів</a>
                        </div>
                        <div className="inner-block-6-12-content-3">
                            <a href="#">Пам'ятки</a>
                        </div>
                        <div className="inner-block-6-12-content-4">
                            <a href="#">Реєстри</a>
                        </div>
                        <div className="inner-block-6-12-content-5">
                            <a href="#">Заява про державну реєстрацію потужності з додатком</a>
                        </div>
                        <div className="inner-block-6-12-content-6">
                            <a href="#">Звіти</a>
                        </div>
                        <div className="inner-block-6-12-content-7">
                            <a href="#">Рішення щодо вжитих заходів за результатами державного нагляду</a>
                        </div>
                        <div className="inner-block-6-12-content-8">
                            <a href="#">Повідомлення</a>
                        </div>
                        <div className="inner-block-6-12-content-9">
                            <a href="#">Адміністративні послуги</a>
                        </div>
                        <div className="inner-block-6-12-content-10">
                            <a href="#">Повідомлення системи швидкого оповіщення щодо харчових продуктів 
                                        та кормів RASFF</a>
                        </div>               
                    </div>
                </div>  
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-13">
                    <div className="map-block-13-title">
                        <a href="#">Профспілкова організація</a>
                    </div>
                    <div className="map-block-13-content">
                        <div className="map-block-13-main-content-1">
                            <a href="#">Колективний договір</a>
                        </div>
                        <div className="map-block-13-main-content-2">
                            <a href="#">Бланк заяви для вступу</a>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-14">
                    <a href="#">Закупівлі</a>    
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-15">
                    <div className="map-block-15-title">
                        <a href="#">Санітарно-епідеміологічний нагляд</a>
                    </div>
                    <div className="map-block-15-content">
                        <div className="inner-block-15-1">
                            <a href="#">Основні напрямки діяльності</a>
                        </div>
                        <div className="inner-block-15-2">
                            <a href="#">Державний нагляд (контроль)</a>
                        </div>
                        <div className="inner-block-15-3">
                            <a href="#">Перелік нормативно-правових актів</a>
                        </div>
                        <div className="inner-block-15-4">
                            <a href="#">Адміністративні послуги</a>
                        </div>
                        <div className="inner-block-15-5">
                            <a href="#">Матеріали семінарів</a>
                        </div>
                        <div className="inner-block-15-6">
                            <a href="#">Пам'ятки</a>
                        </div>
                        <div className="inner-block-15-7">
                            <a href="#">Актуальна інформація щодо проведення державної 
                                    санітарно-епідеміологічної експертизи</a>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-16">
                    <div className="map-block-16-title">
                        <a href="#">Кадрова політика</a>
                    </div>
                    <div className="map-block-16-content">
                        <div className="map-block-16-main-content-1">
                            <a href="#">Вакансії</a>
                        </div>
                        <div className="map-block-16-main-content-2">
                            <a href="#">Конкурс - вакансії</a>
                        </div>
                        <div className="map-block-16-main-content-3">
                            <a href="#">Зразки документів</a>
                        </div>
                        <div className="map-block-16-main-content-4">
                            <a href="#">Інформація про втрачені посвідчення</a>
                        </div>
                        <div className="map-block-16-main-content-5">
                            <a href="#">Результати конкурсів</a>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-17">
                    <a href="#">Плани та звіти про виконання</a>  
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-18">
                    <div className="map-block-18-title">
                        <a href="#">Захист прав споживачів</a>
                    </div>
                    <div className="map-block-18-content">
                        <div className="inner-block-18-1">
                            <a href="#">Анонси</a>
                        </div> 
                        <div className="inner-block-18-2">
                            <a href="#">Консультаційний центр</a>
                        </div>
                        <div className="inner-block-18-3">
                            <a href="#">Основні напрямки діяльності</a>
                        </div>
                        <div className="inner-block-18-4">
                            <a href="#">Державний нагляд (контроль)</a>
                        </div>
                        <div className="inner-block-18-5">
                            <a href="#">Перелік нормативно-правових актів</a>
                        </div>
                        <div className="inner-block-18-6">
                            <a href="#">Бланки заяв</a>
                        </div>
                        <div className="inner-block-18-7">
                            <a href="#">Судова практика</a>
                        </div>
                        <div className="inner-block-18-8">
                            <a href="#">Ринковий нагляд</a>
                        </div>
                        <div className="inner-block-18-9">
                           <div className="inner-block-18-9-content-1">
                                <a href="#">Щодо здійснення державного ринкового нагляду</a>
                            </div>
                            <div className="inner-block-18-9-content-2">
                                <a href="#">Перелік нормативно-правових актів</a>
                            </div>
                            <div className="inner-block-18-9-content-3">
                                <a href="#">Пам'ятки</a>
                            </div>
                            <div className="inner-block-18-9-content-4">
                                <a href="#">Технічний регламент</a>
                            </div>
                        </div>   
                        <div className="inner-block-18-10">
                            <a href="#">Метрологічний нагляд</a>
                        </div>
                        <div className="inner-block-18-11">
                            <a href="#">Презентаційний звіт управління захисту споживачів</a>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-19">
                    <a href="#">Очищення влади</a>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-20">
                    <a href="#">Система енергетичного менеджменту</a>   
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-21">
                    <div className="map-block-21-title">
                        <a href="#">Реєстрація сільськогосподарської техніки</a>
                    </div>
                    <div className="map-block-21-content">
                        <div className="inner-block-21-content-1">
                            <a href="#">Перелік нормативно-правових актів</a>
                        </div>
                        <div className="inner-block-21-content-2">
                            <a href="#">Прийом документів</a>
                        </div>
                        <div className="inner-block-21-content-3">
                            <a href="#">Новини</a>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-6 col-sm-12 grid-item map-block-22">
                    <div className="map-block-22-title">
                        <a href="#">Державні установи (лабораторії, лікарні) ветеринарної медицини</a>
                    </div>
                    <div className="map-block-22-content">
                        <a href="#">Вартість послуг</a>
                    </div>
                </div>
</Masonry>
        // <div className="container map-portal">
        // <div className="map-portal-content">
        //     <div className="row">
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-1">
                //     <a href="#">Про управління</a>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-2">
                //     <a href="#">Діяльність</a>
                // </div>        
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-3">
                //     <a href="#">Напрямки</a>
                // </div>    
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-4">
                //     <a href="#">Про Головне управління</a>
                // </div>   
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-5">
                //     <div className="map-block-5-title">
                //         <a href="#">Суб'єктам господарювання</a>
                //     </div>
                //     <div className="map-block-5-content">
                //         <a href="#">Декларації малих виробництв виноробної продукції</a> 
                //     </div>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-6">
                //     <div className="map-block-6-title">
                //         <a href="#">Контроль за цінами</a>
                //     </div>
                //     <div className="map-block-6-content">
                //         <div className="inner-block-6-1-1">
                //             <a href="#">В умовах воєнного стану</a>
                //         </div>
                //         <div className="inner-block-6-1-2">
                //             <a href="#">Заходи щодо стабілізації цін (COVID-19)</a>
                //         </div>
                //         <div className="inner-block-6-1-3">
                //             <a href="#">Основні напрямки діяльністі</a>
                //         </div>
                //         <div className="inner-block-6-1-4">
                //             <a href="#">Державний контроль за регульованими цінами</a>
                //         </div>
                //         <div className="inner-block-6-1-5">
                //             <a href="#">Актуальна інформація</a>
                //         </div>
                //     </div>
                // </div>           
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-7">
                //     <a href="#">Структура</a>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-8">
                //     <div className="map-block-8-title">
                //         <a href="#"> Внутрішній аудит  </a>
                //     </div> 
                //     <div className="map-block-8-content"> 
                //         <div className="inner-block">
                //             <div className="inner-block-1">
                //                 <a href="#">Планування діяльності</a>
                //             </div>
                //             <div className="inner-block-2">
                //                 <div className="inner-block-2-1-1">
                //                     <a href="#">Оперативний план діяльності Держпродспоживслужби
                //                             з внутрішнього аудиту на 2020 рік</a> 
                //                 </div>
                //                 <div className="inner-block-2-1-2">
                //                     <a href="#">Стратегічний план діяльності Держпродспоживслужби 
                //                             з внутрішнього аудиту на 2019 - 2021 роки (із змінами)</a>
                //                 </div>
                //                 <div className="inner-block-2-1-3">
                //                     <a href="#">План діяльності з внутрішнього аудиту в Держпродспоживслужби 
                //                             та її територіальних органах на ІІ півріччя 2018 року</a>   
                //                 </div>
                //             </div>
                //             <div className="inner-block-3">
                //                 <a href="#">Основні напрямки діяльності</a>
                //             </div>
                //             <div className="inner-block-4">
                //                 <a href="#">Декларація внутрішнього аудиту</a>
                //             </div>
                //             <div className="inner-block-5">
                //                 <a href="#">Перелік нормативно-правових актів</a>
                //             </div>
                //         </div>
                //     </div>
                // </div>     
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-9">
                //     <div className="map-block-9-title">
                //         <a href="#">Фітосанітарна безпека, насінництво та розсадництво</a>
                //     </div>
                //     <div className="map-block-9-content">
                //         <div className="inner-block-9-1">
                //             <a href="#">Основні напрямки діяльності</a>
                //         </div>
                //         <div className="inner-block-9-2">
                //             <a href="#">Пам'ятки</a>
                //         </div>
                //         <div className="inner-block-9-3">
                //             <a href="#">Перелік нормативно-правових актів</a>  
                //         </div>
                //         <div className="inner-block-9-4">
                //             <a href="#">Довідники</a>  
                //         </div>
                //         <div className="inner-block-9-5">
                //             <div className="inner-block-9-5-content-1">
                //                 <a href="#">Наказ перелік регульованих шкідливих організмів</a>
                //             </div>
                //             <div className="inner-block-9-5-content-2">
                //                 <a href="#">Переліки шкідливих організмів А1 та А2 ЄОКЗР</a>
                //             </div>
                //         </div>
                //         <div className="inner-block-9-6">
                //             <a href="#">Фітосанітарний моніторинг і прогноз</a> 
                //         </div>
                //         <div className="inner-block-9-7">
                //             <a href="#">Фітосанітарні вимоги країн імпортерів</a>     
                //         </div>
                //         <div className="inner-block-9-8">
                //             <a href="#">Адміністративні послуги</a>     
                //         </div>
                //         <div className="inner-block-9-9">
                //             <a href="#">Перелік тестових питань та варіанти відповідей для проходження 
                //                         тестування осіб, діяльність яких пов’язана з транспортуванням, зберіганням, застосуванням, 
                //                         торгівлею пестицидами</a>     
                //         </div>
                //         <div className="inner-block-9-10">
                //             <a href="#">Фітосанітарний стан області</a>     
                //         </div>
                //         <div className="inner-block-9-11">
                //             <a href="#">Розпорядження про запровадження або скасування карантинного 
                //                         режиму, 
                //                         у тому числі переліку територій, на яких запроваджено карантинний режим</a>
                //         </div>
                //         <div className="inner-block-9-12">
                //             <a href="#">Бланки фітосанітарних документів та заяв</a>
                //         </div>
                //         <div className="inner-block-9-13">
                //             <div className="inner-block-9-13-content">
                //                 <div className="inner-block-9-13-content-1">
                //                     <a href="#">Заява на оформлення фітосанітарного сертифіката, фітосанітарного 
                //                             сертифіката на реекспорт, карантинного сертифіката</a>
                //                 </div>
                //                 <div className="inner-block-9-13-content-2">
                //                     <a href="#">Заява на обстеження КНР</a>
                //                 </div>
                //                 <div className="inner-block-9-13-content-3">
                //                     <a href="#">Фітосанітарний сертифікат</a>
                //                 </div>
                //                 <div className="inner-block-9-13-content-4">
                //                     <a href="#">Заява про встановлення статусу вільних ділянок</a>
                //                 </div>
                //                 <div className="inner-block-9-13-content-5">
                //                     <a href="#">Карантинний сертифікат</a>
                //                 </div>
                //                 <div className="inner-block-9-13-content-6">
                //                     <a href="#">Заява про проведення перевірки та реєстрацію особи</a>
                //                 </div>
                //                 <div className="inner-block-9-13-content-7">
                //                     <a href="#">Заява на проведення фітосанітарних процедур</a>
                //                 </div>
                //             </div>
                //         </div>
                //         <div className="inner-block-9-14">
                //             <a href="#">Рекомендації щодо торгівлі насінням</a>  
                //         </div>
                //         <div className="inner-block-9-15">
                //             <a href="#">Перелік лабораторій з визначення посівних якостей насіння</a>
                //         </div>
                //     </div>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-10">
                //     <a href="#">Розпорядок роботи</a>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-11">
                //     <a href="#">Оцінювання службової діяльності посадових осіб</a>
                // </div>           
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-12">
                //     <div className="map-block-12-title">
                //         <a href="#">Харчові продукти та ветеринарна медицина</a>
                //     </div>
                //     <div className="map-block-12-content">
                //         <div className="inner-block-6-12-content-1">
                //             <a href="#">Основні напрямки діяльності</a>
                //         </div>
                //         <div className="inner-block-6-12-content-2">
                //             <a href="#">Перелік нормативно-правових актів</a>
                //         </div>
                //         <div className="inner-block-6-12-content-3">
                //             <a href="#">Пам'ятки</a>
                //         </div>
                //         <div className="inner-block-6-12-content-4">
                //             <a href="#">Реєстри</a>
                //         </div>
                //         <div className="inner-block-6-12-content-5">
                //             <a href="#">Заява про державну реєстрацію потужності з додатком</a>
                //         </div>
                //         <div className="inner-block-6-12-content-6">
                //             <a href="#">Звіти</a>
                //         </div>
                //         <div className="inner-block-6-12-content-7">
                //             <a href="#">Рішення щодо вжитих заходів за результатами державного нагляду</a>
                //         </div>
                //         <div className="inner-block-6-12-content-8">
                //             <a href="#">Повідомлення</a>
                //         </div>
                //         <div className="inner-block-6-12-content-9">
                //             <a href="#">Адміністративні послуги</a>
                //         </div>
                //         <div className="inner-block-6-12-content-10">
                //             <a href="#">Повідомлення системи швидкого оповіщення щодо харчових продуктів 
                //                         та кормів RASFF</a>
                //         </div>               
                //     </div>
                // </div>  
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-13">
                //     <div className="map-block-13-title">
                //         <a href="#">Профспілкова організація</a>
                //     </div>
                //     <div className="map-block-13-content">
                //         <div className="map-block-13-main-content-1">
                //             <a href="#">Колективний договір</a>
                //         </div>
                //         <div className="map-block-13-main-content-2">
                //             <a href="#">Бланк заяви для вступу</a>
                //         </div>
                //     </div>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-14">
                //     <a href="#">Закупівлі</a>    
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-15">
                //     <div className="map-block-15-title">
                //         <a href="#">Санітарно-епідеміологічний нагляд</a>
                //     </div>
                //     <div className="map-block-15-content">
                //         <div className="inner-block-15-1">
                //             <a href="#">Основні напрямки діяльності</a>
                //         </div>
                //         <div className="inner-block-15-2">
                //             <a href="#">Державний нагляд (контроль)</a>
                //         </div>
                //         <div className="inner-block-15-3">
                //             <a href="#">Перелік нормативно-правових актів</a>
                //         </div>
                //         <div className="inner-block-15-4">
                //             <a href="#">Адміністративні послуги</a>
                //         </div>
                //         <div className="inner-block-15-5">
                //             <a href="#">Матеріали семінарів</a>
                //         </div>
                //         <div className="inner-block-15-6">
                //             <a href="#">Пам'ятки</a>
                //         </div>
                //         <div className="inner-block-15-7">
                //             <a href="#">Актуальна інформація щодо проведення державної 
                //                     санітарно-епідеміологічної експертизи</a>
                //         </div>
                //     </div>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-16">
                //     <div className="map-block-16-title">
                //         <a href="#">Кадрова політика</a>
                //     </div>
                //     <div className="map-block-16-content">
                //         <div className="map-block-16-main-content-1">
                //             <a href="#">Вакансії</a>
                //         </div>
                //         <div className="map-block-16-main-content-2">
                //             <a href="#">Конкурс - вакансії</a>
                //         </div>
                //         <div className="map-block-16-main-content-3">
                //             <a href="#">Зразки документів</a>
                //         </div>
                //         <div className="map-block-16-main-content-4">
                //             <a href="#">Інформація про втрачені посвідчення</a>
                //         </div>
                //         <div className="map-block-16-main-content-5">
                //             <a href="#">Результати конкурсів</a>
                //         </div>
                //     </div>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-17">
                //     <a href="#">Плани та звіти про виконання</a>  
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-18">
                //     <div className="map-block-18-title">
                //         <a href="#">Захист прав споживачів</a>
                //     </div>
                //     <div className="map-block-18-content">
                //         <div className="inner-block-18-1">
                //             <a href="#">Анонси</a>
                //         </div> 
                //         <div className="inner-block-18-2">
                //             <a href="#">Консультаційний центр</a>
                //         </div>
                //         <div className="inner-block-18-3">
                //             <a href="#">Основні напрямки діяльності</a>
                //         </div>
                //         <div className="inner-block-18-4">
                //             <a href="#">Державний нагляд (контроль)</a>
                //         </div>
                //         <div className="inner-block-18-5">
                //             <a href="#">Перелік нормативно-правових актів</a>
                //         </div>
                //         <div className="inner-block-18-6">
                //             <a href="#">Бланки заяв</a>
                //         </div>
                //         <div className="inner-block-18-7">
                //             <a href="#">Судова практика</a>
                //         </div>
                //         <div className="inner-block-18-8">
                //             <a href="#">Ринковий нагляд</a>
                //         </div>
                //         <div className="inner-block-18-9">
                //            <div className="inner-block-18-9-content-1">
                //                 <a href="#">Щодо здійснення державного ринкового нагляду</a>
                //             </div>
                //             <div className="inner-block-18-9-content-2">
                //                 <a href="#">Перелік нормативно-правових актів</a>
                //             </div>
                //             <div className="inner-block-18-9-content-3">
                //                 <a href="#">Пам'ятки</a>
                //             </div>
                //             <div className="inner-block-18-9-content-4">
                //                 <a href="#">Технічний регламент</a>
                //             </div>
                //         </div>   
                //         <div className="inner-block-18-10">
                //             <a href="#">Метрологічний нагляд</a>
                //         </div>
                //         <div className="inner-block-18-11">
                //             <a href="#">Презентаційний звіт управління захисту споживачів</a>
                //         </div>
                //     </div>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-19">
                //     <a href="#">Очищення влади</a>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-20">
                //     <a href="#">Система енергетичного менеджменту</a>   
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-21">
                //     <div className="map-block-21-title">
                //         <a href="#">Реєстрація сільськогосподарської техніки</a>
                //     </div>
                //     <div className="map-block-21-content">
                //         <div className="inner-block-21-content-1">
                //             <a href="#">Перелік нормативно-правових актів</a>
                //         </div>
                //         <div className="inner-block-21-content-2">
                //             <a href="#">Прийом документів</a>
                //         </div>
                //         <div className="inner-block-21-content-3">
                //             <a href="#">Новини</a>
                //         </div>
                //     </div>
                // </div>
                // <div className="col-4 col-md-6 col-sm-12 grid-item map-block-22">
                //     <div className="map-block-22-title">
                //         <a href="#">Державні установи (лабораторії, лікарні) ветеринарної медицини</a>
                //     </div>
                //     <div className="map-block-22-content">
                //         <a href="#">Вартість послуг</a>
                //     </div>
                // </div>
        //     </div> 
        //  </div>   
        //  </div>  
    )
}

export default MapPortal;   