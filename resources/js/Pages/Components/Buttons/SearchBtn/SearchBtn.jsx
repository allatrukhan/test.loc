import { useState } from "react";

import './SearchBtn.scss';
import SearchBlock from "../../SearchBlock/SearchBlock";

function SearchBtn(){

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    const openSearchBlock=()=>{
        setIsSearchOpen(true);
    };
    
    const closeSearchBlock=()=>{
      setIsOpen(false);
    };

    return(
        <>
            <div className="search-btn">
                <button type="submit" className="open-search" onClick={openSearchBlock}>
                    <img src=".././images/search.png" className="search-img" alt="search img"/>
                    <span>Пошук</span>
                </button>
            </div>
            <div className="search-btn-adaptive">
                <button type="submit" className="open-search" onClick={openSearchBlock}>
                    <img src=".././images/search.png" className="search-img" alt="search img"/>
                </button>
            </div> 

            {(isSearchOpen)&&<SearchBlock closeSearchBlock={closeSearchBlock}/>} 
        </>
    )

}

export default SearchBtn;   