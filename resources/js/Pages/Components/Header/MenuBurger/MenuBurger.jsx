import { useState } from "react";
import SearchBlock from "../../SearchBlock/SearchBlock";
import SocialNetworkBtnsGroup from '../../Buttons/SocialNetworkBtnsGroup/SocialNetworkBtnsGroup';
import GovUaHeaderBlock from '../GovUaHeaderBlock/GovUaHeaderBlock';
import './MenuBurger.scss';

function MenuBurger(){

  const [isSearchOpen, setIsSearchOpen] = useState(false);
    
  const openSearchBlock=()=>{
      setIsSearchOpen(true);
  };
  
  const closeSearchBlock=()=>{
    setIsOpen(false);
  };

    return(
      
        <div className="burger-menu">
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-btn" 
                  // for="menu-toggle"
                  >
            <span></span>
          </label>
  
          <ul className="menubox">
            <div className="open-search-menu-burger">
              <button type="button" className="open-search-menu-burger" onClick={openSearchBlock}>
                <img src=".././images/search.png" className="search-img" alt="search-img"/>
                <span>Пошук</span>
              </button>
      
              <button type="button" className="open-search-menu-burger-adaptive" onClick={openSearchBlock}>
                <img src=".././images/search.png" className="search-img" alt="search-img"/>
              </button>
            </div>

            <li className="menu-item dropdown">
              <a className="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Про управління</a>
                <ul className="dropdown-menu">
            <li id="menu-item-1">
              <a className="dropdown-item" href=".././pdfs/Про_Головне_управління.pdf">Про Головне управління</a>
            </li>
            <li id="menu-item-2">
              <a className="dropdown-item" href="#">Профспілкова організація</a> 
            </li>
            <li id="menu-item-3">
              {/* <!-- route  Профспілкова організація --> */}
              <a className="dropdown-item" href="#">Державні установи (лабораторії, лікарні) ветеринарної медицини</a>
            </li>
            <li id="menu-item-4">
              {/* <!-- ?? Державні установи (лабораторії, лікарні) ветеринарної медицини --> */}
              <a className="dropdown-item" href=".././pdfs/Структура.pdf">Структура</a>
            </li>
            <li id="menu-item-5">
              <a className="dropdown-item" href="#">Кадрова політика</a>
            </li>
            <li id="menu-item-6">
              {/* <!-- ?? Кадрова політика --> */}
              <a className="dropdown-item" href="https://bf.in.ua/u-voiennyj-chas/">У воєнний час</a>
            </li>
            <li id="menu-item-7">
              <a className="dropdown-item" href="#">Розпорядок роботи</a>
            </li>
            <li id="menu-item-8">
              {/* <!-- route  Розпорядок роботи --> */}
              <a className="dropdown-item" href="#">Очищення влади</a>
            </li>
            <li id="menu-item-9">
              <a className="dropdown-item" href="#">Кіровоградська регіональна державна лабораторія ветеринарної медицини</a>
              {/* <!-- route Кіровоградська регіональна державна лабораторія ветеринарної медицини --> */}
             </li>
                </ul>
            </li>
            <li className="menu-item dropdown">
    <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Діяльність</a>
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
            <li className="menu-item dropdown">
            <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Напрямки</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Контроль за цінами</a></li>
           
                    <li><a className="dropdown-item" href="#">Санітарно-епідеміологічний нагляд</a></li>
           
                    <li><a className="dropdown-item" href="#">Фітосанітарна безпека, насінництво та розсадництво</a></li>
                    {/* <!-- route fito-security-blade --> */}
                    <li><a className="dropdown-item" href="#">Захист прав споживачів</a></li>
        
                    <li><a className="dropdown-item" href="#">Харчові продукти та ветеринарна медицина</a></li>
       
                    <li><a className="dropdown-item" href="#">Реєстрація сільськогосподарської техніки</a></li>

                </ul>
            </li>
            <li className="menu-item dropdown">
            <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Публічна інформація</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Перелік відомостей, що містить службову інформацію</a></li>
   
                    <li><a className="dropdown-item" href="#">Інформація про використання бюджетних коштів</a></li>
      
                    <li><a className="dropdown-item" href="#">Про стан розгляду запитів на публічну інформацію</a></li>
   
                    <li><a className="dropdown-item" href="#">Доступ до публічної інформації</a></li>

                </ul>
            </li>
            <li className="menu-item dropdown">
            <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Звʼязки з громадськістю</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"> Суб'єктам господарювання</a></li>

                    <li><a className="dropdown-item" href="#">Залишити звернення </a></li>
    
                    <li><a className="dropdown-item" href="#">Аналіз звернень громадян</a></li>

                </ul>
            </li>
            <li className="menu-item dropdown">
            <a className="nav-link " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Стоп корупція</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Запобігання проявам корупції</a></li>
                 
                    <li><a className="dropdown-item" href="#">Нормативно-правова база</a></li>
            
                    <li><a className="dropdown-item" href="#">Планування діяльності</a></li>
                 
                    <li><a className="dropdown-item" href="#">Декларування</a></li>
                 
                    <li><a className="dropdown-item" href="#">Повідом про корупцію</a></li>
               
                </ul>
            </li>
            <li className="menu-item">
            <a className="nav-link" href="#">У воєнний час</a>
            </li>
            <div className="frame1-adaptive">
              <SocialNetworkBtnsGroup/>
              <GovUaHeaderBlock/>
            </div>

            {(isSearchOpen)&&<SearchBlock closeSearchBlock={closeSearchBlock}/>} 
  
          </ul>
  
        </div>

    )

}

export default MenuBurger;   