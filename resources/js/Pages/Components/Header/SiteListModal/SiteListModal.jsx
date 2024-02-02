import CloseBtn from '../../Buttons/CloseBtn/CloseBtn';
import './SiteListModal.scss';

function SiteListModal({closeModal}){

    return(
        <>
        <div className="btn-modal-close">
            <CloseBtn onClick={closeModal}/>
        </div>
        
        <div className="backdrop is-hidden">
            <div className="sites-list-modal">
                <div className="sites-list">
                   <p><a className="list" href="https://www.president.gov.ua">Президент України</a></p> 
                    <p><a className="list" href="https://www.rada.gov.ua">Верховна Рада України</a></p>
                    <p><a className="list" href="https://www.kmu.gov.ua">Урядовий портал</a></p>
                    <p><a className="list" href="https://ccu.gov.ua">Конституційний суд України</a></p>
                    <p><a className="list" href="https://www.rnbo.gov.ua">Рада національної безпеки і оборони України</a></p>
                </div>
            </div>
        </div>
        </>       
         
    )

}

export default SiteListModal;   