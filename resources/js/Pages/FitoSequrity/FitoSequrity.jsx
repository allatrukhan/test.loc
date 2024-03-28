import { Head } from '@inertiajs/react';
import Layout from '../Layout';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';

import './FitoSequrity.scss';
import '../global.scss';

function FitoSequrity({...data}){

    return(
        <>
        <Head title={"Фітосанітарна безпека, насінництво та розсадництво"} />
        <div className="container fito-main-content">
      
            <Breadcrumbs/>
        <div className="title-fito">
        <h1>Фітосанітарна безпека, насінництво та розсадництво</h1>
    </div>
    <div class="fito-content">
        <div class= "row">
            <div class="col-4 col-md-6 col-sm-12 links-block-1">
                <a href="#">Основні напрямки діяльності</a> 
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-2">   
                <a href="#">Памʼятки</a> 
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-3">
                <a href="#">Перелік нормативно-правових актів</a>
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-4">
                <div class="links-block-4-title">
                    <a href="#">Довідники </a>
                </div>
                <div class="links-block-4-content">
                    <div class="links-block-4-content-1">
                        <a href="#">Наказ перелік регульованих шкідливих організмів</a> 
                    </div>
                    <div class="links-block-4-content-2">
                        <a href="#">Перелік шкідливих організмів А1 та А2 ЄОКЗР </a>
                    </div>
                </div>
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-5">
                <a href="#">Фітосанітарний моніторинг і прогноз</a> 
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-6">
                <a href="#">Фітосанітарні вимоги країн імпортерів</a>
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-7">
                <a href="#">Адміністративні послуги</a> 
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-8">
                <a href="#">Перелік тестових питань та варіанти відповідей для проходження тестування осіб, 
                    діяльність яких повʼязана з транспортуванням, зберіганням, застосуванням, торгівлею пестицидами</a>
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-9">
                <a href="#">Фітосанітарний стан області</a>
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-10">
                <a href="#">Розпорядження про запровадження або скасування карантинного режиму, 
                    тому числі переліку територій, на яких запроваджено карантинний режим </a>
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-11">
                <div class="links-block-11-title">
                   <a href="#">Бланки фітосанітарних документів та заяв</a>
                </div>
                <div class="links-block-11-content">
                    <div class="links-block-11-content-1">
                        <a href="#">Заява на оформлення фітосанітарного сертифіката, фітосанітарного сертифіката та реекспорт, карантинного сертифіката</a>
                    </div>
                    <div class="links-block-11-content-2">
                        <a href="#">Заява на обстеження КНР</a>
                    </div>
                    <div class="links-block-11-content-3">
                        <a href="#">Фітосанітарний сертифікат</a>
                    </div>
                    <div class="links-block-11-content-4">
                        <a href="#">Заява про встановлення статусу вільних ділянок</a>
                    </div>
                    <div class="links-block-11-content-5">
                        <a href="#">Карантинний сертифікат</a>
                    </div>
                    <div class="links-block-11-content-6">
                        <a href="#">Заява про проведення перевірки та реєстрацію особи</a>
                    </div>
                    <div class="links-block-11-content-7">
                        <a href="#">Заява на проведення фітосанітарних процедур</a>
                    </div>
                </div>
            </div>
            <div class="col-4 col-md-6 col-sm-12  links-block-12">
                <a href="#">Рекомендації щодо торгівлі насінням</a>
            </div>
            <div class="col-4 col-md-6 col-sm-12 links-block-13">
                <a href="#">Перелік лабораторій з визначення посівних якостей насіння</a>
            </div>
        </div>
    </div>

    </div>

    </>
    )
}

FitoSequrity.layout = page => <Layout children={page} title="Фітосанітарна безпека, насінництво та розсадництво" />

export default FitoSequrity;   