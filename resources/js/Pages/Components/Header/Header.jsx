import SocialNetworkBtnsGroup from '../Buttons/SocialNetworkBtnsGroup/SocialNetworkBtnsGroup';
import DarkModeBlock from './DarkModeBlock/DarkModeBlock';
import GovUaHeaderBlock from './GovUaHeaderBlock/GovUaHeaderBlock';
import MainMenu from './MainMenu/MainMenu';
import SearchBtn from '../Buttons/SearchBtn/SearchBtn';
// import MenuBurger from './MenuBurger/MenuBurger';
import HeaderMainTitleBlock from './HeaderMainTitleBlock/HeaderMainTitleBlock';
// import { useState } from "react";

import './Header.scss';
// import DarkModeSpecial from './DarkModeSpecial/DarkModeSpecial';

function Header(){

    // const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    
    // const openMenuBurger=()=>{
    //     setIsBurgerOpen(true);
    // };
    
    // const closeMenuBurger=()=>{
    //   setIsBurgerOpen(false);
    // };

    return (
    <div className="container header-content">
        <div className="row">
            <div className="col-12">
                <div className="header-layout">
                    <div className="row">
                        <div className="header-1st-row">
                            <div className="col-xl-2 col-md-6 gov-header first-el-header">
                                {/* <button type="button" className="burger-btn" onClick={openMenuBurger} >
                                    <img src="../images/menu.png" className="menu-img" alt="menu-img"/>
                                </button> */}
                                {/* {(isBurgerOpen)&&<MenuBurger closeMenuBurger={closeMenuBurger}/>} */}
                                <GovUaHeaderBlock/>
                            </div>
                {/* <div className="burger">
                    <MenuBurger/>   */}
                    {/* col-12 col-xl-6 frame2 order-2 order-xl-0 */}
   {/* col-md-12 col-xl-6 order-xl-0 order-2 */}
                            <div className="col-xl-8 col-md-12 order-xl-0 order-md-2">
                                <HeaderMainTitleBlock/>
                            </div>
                            <div className="col-xl-2 col-md-6 header-1st-row-3rd-block">
                                <div className='header-dark-mode'>
                                    <DarkModeBlock/>
                                </div>
                {/* <DarkModeSpecial/> */}
                                <div className="social-network-btn-block">
                                    <SocialNetworkBtnsGroup/>
                                </div>  
                                <div className="search-btn-1">
                                    <SearchBtn/>
                                </div>
                            </div>
                        </div>  
                    </div> 
                <div className='main-menu-block'>
                    <MainMenu/> 
                </div> 
            </div>
        </div>   
    </div>      
   
    </div>

)
}

export default Header;   