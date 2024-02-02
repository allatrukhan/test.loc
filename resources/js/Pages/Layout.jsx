import React from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ImageLinksBlock from './Components/ImageLinksBlock/ImageLinksBlock';
import BackToTopBtn from './Components/Buttons/BackToTopBtn/BackToTopBtn';


export default function Layout({ children }) {
  return (
    <main>
        <header>
            <Header/>
        </header>
        
        <article>{children}</article>
    
        <footer>
            <BackToTopBtn/>
            <ImageLinksBlock/>
            <Footer/>
        </footer>
  
    </main>
  )
}