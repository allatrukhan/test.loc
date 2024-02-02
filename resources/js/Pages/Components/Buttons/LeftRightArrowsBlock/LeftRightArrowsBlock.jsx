import './LeftRightArrowsBlock.scss';

function LeftRightArrowsBlock(){

    return(
             <div className="left-right-arrow">
                <button type="button">
                    <img src=".././images/left_icon.png" className="left-right-img" alt="pointer-img"/>
                </button>
                <button type="button">
                    <img src=".././images/right_icon.png" className="left-right-img" alt="pointer-img"/>
                </button>
            </div>
    )
}

export default LeftRightArrowsBlock;   