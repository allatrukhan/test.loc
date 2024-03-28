
import './DarkModeSpecial.scss';

function DarkModeSpecial(){

    // function changeStyle(){
    //     var element = document.getElementById("header");
    //     element.style.fontSize = size(2);
    // }

    // $(document).ready(function(){
    //     $(".increaseFont,.decreaseFont").click(function(){
    //        var type= $(this).val();
    //        var curFontSize = $('.data').css('font-size');
    //        if(type=='increase'){
    //           $('.data').css('font-size', parseInt(curFontSize)+1);
    //        } else{
    //           $('.data').css('font-size', parseInt(curFontSize)-1);
    //        }
    //        // alert($('.data').css('font-size'));
    //     });
    //  });

    return(
        <div className="dark-mode-special-content">
            <div className="dark-mode-special-text">
                <p>Стандартна версія</p>
            </div>
            <div className="font-size-btns-block">
                <button className="font-size-btn" value="increase" type="button">A+</button>
                <button className="font-size-btn" value="decrease" type="button">A-</button>
            </div>
        </div>
    )
}

export default DarkModeSpecial;   