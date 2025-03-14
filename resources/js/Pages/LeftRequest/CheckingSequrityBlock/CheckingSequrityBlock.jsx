import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';

import './CheckingSequrityBlock.scss';


function CheckingSequrityBlock(){

    const handleSubmit = (e) =>{
        e.preventDefault();
        captchaRef.current.reset();
    }

    function onChange(value) {
        console.log("Captcha value:", value);
      }

    return(
    
    <div className="container checking">
        <div className="checking-content">
            <div className="checking-title">
                <h3>Перевірка безпеки</h3>
                <img src='.././images/i_image.png' className="i_img" alt="i_img"/>
            </div>
            <div className="checking-text-block">
                <p>Підтвердіть нижче, якщо Ви погоджуєтесь на обробку своїх персональних даних</p>
            </div>
            <div className="capcha">
                <ReCAPTCHA
                    sitekey="6LfL318pAAAAAFUd0bEyoyjl-DAF4tTUC1juwDOe"
                    onChange={onChange}
                />
            </div>
        </div>
        <div className="send-request-button">
                <input type="submit" className="submit-btn" value="Відправити" onSubmit={handleSubmit}/>
                {/* <!-- <img src='.././images/right-icon.png' class="right_icon_img" alt="vector_img"> --> */}
        </div>
    </div>
    
    )
}

export default CheckingSequrityBlock;   