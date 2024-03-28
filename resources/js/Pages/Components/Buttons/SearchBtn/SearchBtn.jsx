import { useState } from "react";

import './SearchBtn.scss';
import SearchBlock from "../../SearchBlock/SearchBlock";

function SearchBtn(){

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    const openSearchBlock=()=>{
        setIsSearchOpen(true);
    };
    
    const closeSearchBlock=()=>{
      setIsSearchOpen(false);
    };

    return(
        <>
            <div className="search-btn">
                <button type="button" className="open-search" onClick={openSearchBlock}>
                    <img src=".././images/search.png" className="search-img" alt="search img"/>
                    <span>Пошук</span>
                </button>
            </div>
            {/* <div className="search-btn-adaptive">
                <button type="button" className="open-search" onClick={openSearchBlock}>
                    <img src=".././images/search.png" className="search-img" alt="search img"/>
                </button>
            </div>  */}

            {(isSearchOpen)&&<SearchBlock closeBtn={closeSearchBlock}/>} 
        </>
    )

}

export default SearchBtn;   