import { useState } from "react";
import SearchBlock from "../../SearchBlock/SearchBlock";
import SocialNetworkBtnsGroup from '../../Buttons/SocialNetworkBtnsGroup/SocialNetworkBtnsGroup';
import GovUaHeaderBlock from '../GovUaHeaderBlock/GovUaHeaderBlock';
import './MenuBurger.scss';
import { nanoid } from "@reduxjs/toolkit";
import MenuItem from "../MenuItem/MenuItem";
import CloseBtn from "../../Buttons/CloseBtn/CloseBtn";


const dataMenu = [
  {
    id: nanoid(),
    title: 'Про управління',
    link: '/',
    children: [
      {
        id: nanoid(),
        title: 'Про Головне управління',
        link: '/pdfs/Про_Головне_управління.pdf',
        children: [],
      },
      {
        id: nanoid(),
        title: 'Профспілкова організація',
        link: '/',
        children: [],
      },
      {
        id: nanoid(),
        title: 'Державні установи ветеринарної медицини',
        link: '/',
        children: [],
      },
      {
        id: nanoid(),
        title: 'Структура',
        link: '/',
        children: [],
      },
      {
        id: nanoid(),
        title: 'У воєнний час',
        link: 'https://bf.in.ua/u-voiennyj-chas/',
        children: [],
      },
      {
        id: nanoid(),
        title: 'Очищення влади',
        link: '/',
        children: [],
      },
    ]
  },
  {
    id: nanoid(),
    title: 'Діяльність',
    link: '/',
    children: [
      {
        id: nanoid(),
        title: "Суб'єктам господарювання",
        link: '/',
        children: [],
      },
      {
        id: nanoid(),
        title: 'Закупівлі',
        link: '/',
        children: [],
      },
      {
        id: nanoid(),
        title: 'Планування діяльності',
        link: '/',
        children: [],
      },
      {
        id: nanoid(),
        title: 'Внутрішній аудит',
        link: '/',
        children: [],
      },
    ],
  },
  { 
    id: nanoid(),
    title: 'Напрямки',
    link: '/',
    children: [],
  },
  { 
    id: nanoid(),
    title: 'Публічна інформація',
    link: '/',
    children: [],
  },
  { 
    id: nanoid(),
    title: 'Стоп корупція',
    link: '/',
    children: [],
  },
  { 
    id: nanoid(),
    title: 'Звʼязки з громадськістю',
    link: '/',
    children: [],
  },
]

function MenuBurger({closeMenuBurger}){

  const [isSearchOpen, setIsSearchOpen] = useState(false);
    
  const openSearchBlock=()=>{
      setIsSearchOpen(true);
  };
  
  const closeSearchBlock=()=>{
    setIsSearchOpen(false);
  };

    return(
      
        <div className="container burger-menu">

          {/* <input id="menu-toggle" type="checkbox" />
          <label className="menu-btn" 
                  for="menu-toggle"
                  >
            <span></span>
          </label> */}

         
  
          <ul className="menubox">  
          <div className="header-burger">
            <div className="close-btn-burger">
            <CloseBtn closeBtn={closeMenuBurger}/>
            </div>
          
            <div className="open-search-menu-burger">
              <button type="button" className="open-search-menu-burger" onClick={openSearchBlock}>
                <img src=".././images/search.png" className="search-img" alt="search-img"/>
                <span>Пошук</span>
              </button>
      
              <button type="button" className="open-search-menu-burger-adaptive" onClick={openSearchBlock}>
                <img src=".././images/search.png" className="search-img" alt="search-img"/>
              </button>
            </div>
          </div>
           
            {dataMenu.map((_menu)=><MenuItem key={_menu.id} id={_menu.id} title={_menu.title} link={_menu.link} children={_menu.children} />)}
             {/* <li>
               
                <li>
                  {dataMenu.children.map((_sub_menu)=> 
                    <MenuItem key={_sub_menu.children.id} title={_sub_menu.children.title} link={_sub_menu.children.link}/>)}
                </li>
            </li>  */}


         {/* ----------------------------------------------------------------------------------- */}

  

         {/* <ul>
          {dataMenu.map((_menu) => (
            <li key={_menu.id}>
             <a href={_menu.link} aria-haspopup={_menu.children && _menu.children.length > 0 ? true : false}>
                {_menu.title}
              </a>
            {_menu.children && _menu.children.length > 0 ? (
        <ul aria-label="submenu">
          {_menu.children.map((_sub_menu) => (
            <li key={_sub_menu.id}>
              <a href={_sub_menu.link}>{_sub_menu.name}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  ))}
</ul> */}



{/* ------------------------------------------------------------------------------------------------ */}



            {/* {dataMenu.map(function(menuItem, link, id){
              if (dataMenu.children != undefined) {
                    return (
                        <ul>
                          <a key={id} href={link}>{menuItem.title}</a> 
                            {menuItem.children.map(function(children, children_link, children_id) {
                                return ( 
                                <li>
                                  <a key={children_id} href={children_link}>{children.title}</a>
                                </li>
                                )   
                            })}
                        </ul>
                    )
                } else {
                    return (
                        <ul>
                          <a key={id} href={link}> {menuItem.title}</a></ul>
                    )
                }
            })}; */}

          {/* //  ---------------------------------------------------------------------------------// */}

            {/* <li className="dropdown">
              <a href="#">Про управління</a>
                <div className="dropdown-content">
                  <a className="dropdown-item" href=".././pdfs/Про_Головне_управління.pdf">Про Головне управління</a>
      <a className="dropdown-item" href="#">Профспілкова організація</a>
      <a className="dropdown-item"  href="#">Державні установи (лабораторії, лікарні) <br/>ветеринарної медицини</a>
      <a className="dropdown-item"  href="#">Структура</a>
      <a className="dropdown-item"  href="#">Кадрова політика</a>
      <a className="dropdown-item"  href="https://bf.in.ua/u-voiennyj-chas/">У воєнний час</a>
      <a className="dropdown-item" href="#">Розпорядок роботи</a>
      <a className="dropdown-item"  href="#">Очищення влади</a>
      <a className="dropdown-item"  href="#">Кіровоградська регіональна державна <br/>лабораторія ветеринарної медицини</a>
    </div>
  </li> */}

  {/* <li className="dropdown">
    <a href="#">Діяльність</a>
    <div className="dropdown-content">
      <a className="dropdown-item" href="#">Суб'єктам господарювання</a>
      <a className="dropdown-item" href="#">Закупівлі</a>
      <a className="dropdown-item"  href="#">Планування діяльності</a>
      <a className="dropdown-item"  href="#">Внутрішній аудит</a>
      <a className="dropdown-item"  href="#">Плани та звіти про виконання</a>
      <a className="dropdown-item"  href="#">Оцінювання службової діяльності посадових осіб</a>
      <a className="dropdown-item" href="#">Система енергетичного менеджменту</a>
    </div>
  </li>

  <li className="dropdown">
    <a href="#">Напрямки</a>
    <div className="dropdown-content">
      <a className="dropdown-item" href="#">Контроль за цінами</a>
      <a className="dropdown-item" href="#">Санітарно-епідеміологічний нагляд</a>
      <a className="dropdown-item"  href="#">Фітосанітарна безпека, насінництво та розсадництво</a>
      <a className="dropdown-item"  href="#">Захист прав споживачів</a>
      <a className="dropdown-item"  href="#">Харчові продукти та ветеринарна медицина</a>
      <a className="dropdown-item"  href="#">Реєстрація сільськогосподарської техніки</a>
    </div>
  </li>

  <li className="dropdown">
    <a href="#">Публічна інформація</a>
    <div className="dropdown-content">
      <a className="dropdown-item" href="#">Перелік відомостей, що містить службову інформацію</a>
      <a className="dropdown-item" href="#">Інформація про використання бюджетних коштів</a>
      <a className="dropdown-item"  href="#">Про стан розгляду запитів на публічну інформацію</a>
      <a className="dropdown-item"  href="#">Доступ до публічної інформації</a>
    </div>
  </li>

  <li className="dropdown">
    <a href="#">Звʼязки з громадськістю</a>
    <div className="dropdown-content">
      <a className="dropdown-item" href="#">Суб'єктам господарювання</a>
      <a className="dropdown-item" href="#">Залишити звернення</a>
      <a className="dropdown-item"  href="#">Аналіз звернень громадян</a>
    </div>
  </li>

  <li className="dropdown">
    <a href="#">Стоп корупція</a>
    <div className="dropdown-content">
      <a className="dropdown-item" href="#">Запобігання проявам корупції</a>
      <a className="dropdown-item" href="#">Нормативно-правова база</a>
      <a className="dropdown-item" href="#">Планування діяльності</a>
      <a className="dropdown-item"  href="#">Декларування</a>
      <a className="dropdown-item"  href="#">Повідом про корупцію</a>
    </div>
  </li>

  <li><a href="#">У воєнний час</a></li> */}
{/* ----------------------------------------------------------------------------------------------------------------- */}
            {/* <li className="menu-item dropdown">
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
              {/* <a className="dropdown-item" href="#">Державні установи (лабораторії, лікарні) ветеринарної медицини</a>
            </li>
            <li id="menu-item-4"> */}
              {/* <!-- ?? Державні установи (лабораторії, лікарні) ветеринарної медицини --> */}
              {/* <a className="dropdown-item" href=".././pdfs/Структура.pdf">Структура</a>
            </li>
            <li id="menu-item-5">
              <a className="dropdown-item" href="#">Кадрова політика</a>
            </li>
            <li id="menu-item-6"> */}
              {/* <!-- ?? Кадрова політика --> */}
              {/* <a className="dropdown-item" href="https://bf.in.ua/u-voiennyj-chas/">У воєнний час</a>
            </li>
            <li id="menu-item-7">
              <a className="dropdown-item" href="#">Розпорядок роботи</a>
            </li>
            <li id="menu-item-8"> */}
              {/* <!-- route  Розпорядок роботи --> */}
              {/* <a className="dropdown-item" href="#">Очищення влади</a>
            </li>
            <li id="menu-item-9">
              <a className="dropdown-item" href="#">Кіровоградська регіональна державна лабораторія ветеринарної медицини</a> */}
              {/* <!-- route Кіровоградська регіональна державна лабораторія ветеринарної медицини --> */}
             {/* </li>
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
                    {/* <li><a className="dropdown-item" href="#">Захист прав споживачів</a></li>
        
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
               
                </ul> */}
            {/* </li> */}
            {/* <li className="menu-item">
            <a className="nav-link" href="#">У воєнний час</a>
            </li>  */}
            <div className="frame1-adaptive">
              <SocialNetworkBtnsGroup/>
              <GovUaHeaderBlock/>
            </div>

            {(isSearchOpen)&&<SearchBlock closeBtn={closeSearchBlock}/>} 
  
          </ul>
  
        </div>

    )

}

export default MenuBurger;   