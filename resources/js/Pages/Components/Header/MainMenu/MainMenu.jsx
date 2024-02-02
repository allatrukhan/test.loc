import SearchBtn from '../../Buttons/SearchBtn/SearchBtn';
import './MainMenu.scss';

function MainMenu(){

    return(
    
    <div className="menu">
    <div className=" tabs-menu">
    <ul className="nav nav-tabs">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Про управління</a>
                <ul className="dropdown-menu">
                    <li id="menu-item-1">
                        <a className="dropdown-item" href=".././pdfs/Про_Головне_управління.pdf">Про Головне управління</a>
                    </li>
                    <li id="menu-item-2">
                        <a className="dropdown-item" href="#">Профспілкова організація</a> 
                    </li>
                    <li id="menu-item-3">
                        <a className="dropdown-item" href="#">Державні установи (лабораторії, лікарні) ветеринарної медицини</a>
                    </li>
                    <li id="menu-item-4">
                        <a className="dropdown-item" href=".././pdfs/Структура.pdf">Структура</a>
                    </li>
                    <li id="menu-item-5">
                        <a className="dropdown-item" href="#">Кадрова політика</a>
                    </li>
                    <li id="menu-item-6">
                        <a className="dropdown-item" href="https://bf.in.ua/u-voiennyj-chas/">У воєнний час</a>
                    </li>
                    <li id="menu-item-7">
                        <a className="dropdown-item" href="#">Розпорядок роботи</a>
                    </li>
                    <li id="menu-item-8">
                        <a className="dropdown-item" href="#">Очищення влади</a>
                    </li>
                    <li id="menu-item-9">
                        <a className="dropdown-item" href="#">Кіровоградська регіональна державна лабораторія ветеринарної медицини</a>
                    </li>
                </ul>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Діяльність</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Суб'єктам господарювання</a></li>
                    <li><a className="dropdown-item" href="#">Закупівлі</a></li>
                    <li><a className="dropdown-item" href="#">Планування діяльності</a></li>
                    <li><a className="dropdown-item" href="#">Внутрішній аудит</a></li>
                    <li><a className="dropdown-item" href="#">Плани та звіти про виконання</a></li>
                    <li><a className="dropdown-item" href="#">Оцінювання службової діяльності посадових осіб</a></li>
                    <li><a className="dropdown-item" href="#">Система енергетичного менеджменту</a></li>
                </ul>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Напрямки</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Контроль за цінами</a></li>
                    <li><a className="dropdown-item" href="#">Санітарно-епідеміологічний нагляд</a></li>
                    <li><a className="dropdown-item" href="#">Фітосанітарна безпека, насінництво та розсадництво</a></li>
                    <li><a className="dropdown-item" href="#">Захист прав споживачів</a></li>
                    <li><a className="dropdown-item" href="#">Харчові продукти та ветеринарна медицина</a></li>
                    <li><a className="dropdown-item" href="#">Реєстрація сільськогосподарської техніки</a></li>
                </ul>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Публічна інформація</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Перелік відомостей, що містить службову інформацію</a></li>
                    <li><a className="dropdown-item" href="#">Інформація про використання бюджетних коштів</a></li>
                    <li><a className="dropdown-item" href="#">Про стан розгляду запитів на публічну інформацію</a></li>
                    <li><a className="dropdown-item" href="#">Доступ до публічної інформації</a></li>
                </ul>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Звʼязки з громадськістю</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"> Суб'єктам господарювання</a></li>
                    <li><a className="dropdown-item" href="#">Залишити звернення </a></li>
                    <li><a className="dropdown-item" href="#">Аналіз звернень громадян</a></li>
                </ul>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Стоп корупція</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Запобігання проявам корупції</a></li>
                    <li><a className="dropdown-item" href="#">Нормативно-правова база</a></li>
                    <li><a className="dropdown-item" href="#">Планування діяльності</a></li>
                    <li><a className="dropdown-item" href="#">Декларування</a></li>
                    <li><a className="dropdown-item" href="#">Повідом про корупцію</a></li>
                </ul>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">У воєнний час</a>
        </li>
    </ul>

    </div>

    <div className="search">
        <SearchBtn />
    </div>

    </div>   
    )

}

export default MainMenu;   