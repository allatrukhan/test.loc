import React, { useState } from "react";

import './InputsBlock.scss';


function InputsBlock(){

    const [value, setValue] = useState("");

    const onInput = (e) => setValue(e.target.value);

    const onClear = () => {
        setValue("");
    };

    // { name, lastName, nameByFather, email, index, town, region, house, phone}
    // const { handleSubmit, register, formState: { errors } } = useForm();
    // const onClickSubmit = values => {
    //     console.log(values);
    //     setUser({
    //         name: values.name,
    //         lastName: values.lastName,
    //         email: values.email,
    //         nameByFather: values.nameByFather,
    //         index: values.index,
    //         town: values.town,
    //         region: values.region,
    //         house: values.house,
    //         phone: values.phone
    //     })
       

    return(
    
        <div className="container inputs-block">
             <div className="row">
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="Прізвище" value={value} onInput={onInput}/>
                <button type="button" className="clear-input-btn" onClick={onClear}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="Імʼя" value={value} onInput={onInput}/>
                <button type="button" className="clear-input-btn" onClick={onClear}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="По батькові" value={value} onInput={onInput}/>
                <button type="button" className="clear-input-btn" onClick={onClear}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="Електронна скринька" value={value} onInput={onInput}/>
                <button type="button" className="clear-input-btn" onClick={onClear}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="Поштовий індекс" value={value} onInput={onInput}/>
                <button type="button" className="clear-input-btn" onClick={onClear}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="Вулиця, будинок, квартира" value={value} onInput={onInput}/>
                <button type="button" className="clear-input-btn" onClick={onClear}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12  input-group">
                <input type="text" className="input-form-1" placeholder="Район"value={value} onInput={onInput}/>
                <button type="button" className="clear-input-btn" onClick={onClear}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12  input-group">
                <input type="text" className="input-form-1" placeholder="Населений пункт" value={value} onInput={onInput}/>
                <button type="button" className="clear-input-btn" onClick={onClear}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12  input-group">
                <input type="text" className="input-form-1" placeholder="Телефон, скайп" value={value} onInput={onInput}/>
                <button type="button" className="clear-input-btn" onClick={onClear}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>  
        </div>  
    </div>  
    
    )
}

export default InputsBlock;   