            
import './CloseBtn.scss';

function CloseBtn({closeBtn}){
            
    return(
        <>
        <button type="button" className="btn-close-general" aria-label="Close" onClick={closeBtn}>
            <img src=".././images/close-icon.png" className="close-img" alt="close-img"/>
         </button>
        </>
    )
             
}
            
export default CloseBtn;   
            
            