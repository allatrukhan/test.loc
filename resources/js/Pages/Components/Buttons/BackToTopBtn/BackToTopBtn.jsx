import './BackToTopBtn.scss';

function BackToTopBtn(){

    let mybutton = document.getElementById("backToTopBtn");
    
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }

    return(
        <>
            <button onClick={topFunction} id="backToTopBtn" title="Go to top">
                <img src=".././images/back-to-top-icon.png" className="back-to-top-btn" alt="back-to-top-icon"/>
            </button>
        </>
    )
}

export default BackToTopBtn;   