import SiteListModal from '../SiteListModal/SiteListModal';
import './GovUaHeaderBlock.scss';
import { useState } from "react";

function GovUaHeaderBlock(){

    const [isOpen, setIsOpen] = useState(false);
    
    const openModal=()=>{
        setIsOpen(true);
    };
    
    const closeModal=()=>{
      setIsOpen(false);
    };

    return(
        <>
        <button className="gov-ua-header" onClick={openModal}>
            <img src=".././images/flag.png" className="flag-img" alt="flag-img"/>
            <div className="gov-ua-btn-text">
                <span>gov.ua</span> 
                <span>Державні сайти України</span> 
            </div>
         
        </button>

        {(isOpen)&&<SiteListModal closeModal={closeModal}/>} 

        </>
    )

}

export default GovUaHeaderBlock;   