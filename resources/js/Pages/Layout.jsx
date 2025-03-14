import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ImageLinksBlock from './Components/ImageLinksBlock/ImageLinksBlock';
import BackToTopBtn from './Components/Buttons/BackToTopBtn/BackToTopBtn';
import { useState } from "react";
import './global.scss';
import MenuBurger from './Components/Header/MenuBurger/MenuBurger';





export default function Layout({ children }) {
const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    
const openMenuBurger=()=>{
    setIsBurgerOpen(true);
};

const closeMenuBurger=()=>{
  setIsBurgerOpen(false);
};

  return ( 
  <>
    <header id="header">
   
      <button type="button" className="burger-btn" onClick={openMenuBurger} >
        <img src="../images/menu.png" className="menu-img" alt="menu-img"/>
      </button>
      <div className="menu-burger-header">
      {(isBurgerOpen)&&<MenuBurger closeMenuBurger={closeMenuBurger}/>}
        {/* <MenuBurger closeMenuBurger={closeMenuBurger}/> */}
      </div>
        <Header/>
    </header>
    <main>
      <article id="article">{children}</article>
    </main>
    <footer id="footer">
      <BackToTopBtn/>
      <ImageLinksBlock/>
      <Footer/>
    </footer>
  </>
  )
}