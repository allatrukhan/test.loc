import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from 'react';

import './CheckingSequrityBlock.scss';


function CheckingSequrityBlock(){

    const captchaRef = useRef(null);

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     const token = captchaRef.current.getValue();
    //     captchaRef.current.reset();
    // }

    return(
    
        <div className="checking">
            <div class="checking-title">
                <h3>Перевірка безпеки</h3>
                <img src='.././images/i_image.png' class="i_img" alt="i_img"/>
            </div>
            <div class="checking-text-block">
                <p>Підтвердіть нижче, якщо Ви погоджуєтесь на обробку своїх персональних даних</p>
            </div>
            <div class="capcha">
                <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef}/>
            </div>
            <div class="send-request-button">
            <input type="submit" class="submit-btn" value="Відправити" />
            {/* <!-- <img src='.././images/right-icon.png' class="right_icon_img" alt="vector_img"> --> */}
        </div>
        </div>
    
    )
}

export default CheckingSequrityBlock;   