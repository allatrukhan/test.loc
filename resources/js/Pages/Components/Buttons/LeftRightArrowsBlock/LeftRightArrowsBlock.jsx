import './LeftRightArrowsBlock.scss';

function LeftRightArrowsBlock({previous, next}){

    return(
             <div className="left-right-arrow">
                <button type="button" className='left-right-arrow-btn' onClick={previous}>
                    <img src=".././images/left_icon.png" className="left-right-img" alt="pointer-img"/>
                </button>
                <button type="button" className='left-right-arrow-btn' onClick={next}>
                    <img src=".././images/right_icon.png" className="left-right-img" alt="pointer-img"/>
                </button>
            </div>
    )
}

export default LeftRightArrowsBlock;   