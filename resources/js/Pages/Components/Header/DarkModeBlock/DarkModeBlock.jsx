
import './DarkModeBlock.scss';

function DarkModeBlock(){

function setMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
}

    return(
        <div className="special-eye-block">
            <button className="set-mode-button" onClick={setMode}>
                <img src=".././images/eye-icon.png" className="eye-img" alt="eye-img"/>
                <span>Людям із порушенням зору</span> 
            </button>
        </div>
    )
}
   


export default DarkModeBlock;   
