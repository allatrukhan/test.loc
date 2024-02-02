import InputsBlock from "../LeftRequest/InputsBlock/InputsBlock";
import TextareaBlock from "../LeftRequest/TextareaBlock/TextareaBlock";
import CheckingSequrityBlock from "../LeftRequest/CheckingSequrityBlock/CheckingSequrityBlock";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";

import './LeftRequest.scss';

function LeftRequest(){

    return(
       <>
        <Breadcrumbs/>
        <Head title="Залишити звернення" />
        <div className="container request-form-container">
        	<div class="request-header">
                <h1>Залишити звернення</h1>
            </div>
            <div class="request-form">
                <div class="inputs-block">
                    <InputsBlock/>
                </div>
                <hr/>
                <div class="input-text-field">
                    <TextareaBlock/>
                </div>
                <hr/>
                <div class="checking-security-block">
                    <CheckingSequrityBlock/>
                </div>  
            </div>
        </div>
    </>
    )  
}

export default LeftRequest;