import './InputsBlock.scss';


function InputsBlock(){

    return(
    
        <div className="container inputs">
             <div class="row">
            <div class="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" class="input-form-1" placeholder="Прізвище"/>
                <img src='.././images/clear-input-icon.png' class="clear-input-img" alt="clear_img"/>
            </div>
            <div class="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" class="input-form-1" placeholder="Імʼя"/>
                <img src='.././images/clear-input-icon.png' class="clear-input-img" alt="clear_img"/>
            </div>
            <div class="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" class="input-form-1" placeholder="По батькові" />
                <img src='.././images/clear-input-icon.png' class="clear-input-img" alt="clear_img"/>
            </div>
            <div class="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" class="input-form-1" placeholder="Електронна скринька" />
                <img src='.././images/clear-input-icon.png' class="clear-input-img" alt="clear_img"/>
            </div>
            <div class="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" class="input-form-1" placeholder="Поштовий індекс"/>
                <img src='.././images/clear-input-icon.png' class="clear-input-img" alt="clear_img"/>
            </div>
            <div class="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" class="input-form-1" placeholder="Вулиця, будинок, квартира" />
                <img src='.././images/clear-input-icon.png' class="clear-input-img" alt="clear_img"/>
            </div>
            <div class="col-6 col-md-6 col-sm-12  input-group">
                <input type="text" class="input-form-1" placeholder="Район"/>
                <img src='.././images/clear-input-icon.png' class="clear-input-img" alt="clear_img"/>
            </div>
            <div class="col-6 col-md-6 col-sm-12  input-group">
                <input type="text" class="input-form-1" placeholder="Населений пункт" />
                <img src='.././images/clear-input-icon.png' class="clear-input-img" alt="clear_img"/>
            </div>
            <div class="col-6 col-md-6 col-sm-12  input-group">
                <input type="text" class="input-form-1" placeholder="Телефон, скайп" />
                <img src='.././images/clear-input-icon.png' class="clear-input-img" alt="clear_img"/>
            </div>  
        </div>  
    </div>  
    
    )
}

export default InputsBlock;   