import SocialNetworkBtnsGroup from '../Buttons/SocialNetworkBtnsGroup/SocialNetworkBtnsGroup';
import DarkModeBlock from './DarkModeBlock/DarkModeBlock';
import GovUaHeaderBlock from './GovUaHeaderBlock/GovUaHeaderBlock';
import MainMenu from './MainMenu/MainMenu';
import SearchBtn from '../Buttons/SearchBtn/SearchBtn';
import MenuBurger from './MenuBurger/MenuBurger';
import HeaderMainTitleBlock from './HeaderMainTitleBlock/HeaderMainTitleBlock';

import './Header.scss';

function Header(){

    return (
    <div className="container header-content">
        <div className="row header-1st-row">
            <div className="col-2 first-el-header">
                <div className="burger">
                    <MenuBurger/>
                </div>
                <GovUaHeaderBlock/>
            </div>
            <div className="col-8 order-md-0 order-2">
                <HeaderMainTitleBlock/>
            </div>
            <div className="col-2 header-1st-row-3rd-block">
                <DarkModeBlock/>
                <div className="social-network-btn-block">
                    <SocialNetworkBtnsGroup/>
                </div>  
                <div className="search-btn">
                    <SearchBtn/>
                </div>
            </div>
        </div>    
            <MainMenu/>     
    </div>

)
}

export default Header;   