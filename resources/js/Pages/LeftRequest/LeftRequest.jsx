import { Head } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
// import InputsBlock from "../LeftRequest/InputsBlock/InputsBlock";
// import TextareaBlock from "../LeftRequest/TextareaBlock/TextareaBlock";
// import CheckingSequrityBlock from "../LeftRequest/CheckingSequrityBlock/CheckingSequrityBlock";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import Layout from '../Layout';

import './LeftRequest.scss';
import '../LeftRequest/CheckingSequrityBlock/CheckingSequrityBlock.scss';
import '../LeftRequest/InputsBlock/InputsBlock.scss';
import '../LeftRequest/TextareaBlock/TextareaBlock.scss';
import '../global.scss';

function LeftRequest(){
    
    const captchaRef = useRef();

    const handleSubmitCapcha = (e) =>{
        e.preventDefault();
        captchaRef.current.reset();
    }

    const [value, setValue] = useState({
        name: "",
        lastName: "",
        email: "",
        nameByFather: "",
        index: "",
        town: "",
        region: "",
        house: "",
        phone: "",
        
    });

    const onInput = (e) => setValue(e.target.value);

    // const onClear = (e)=>resetField(e, e.target.value);
    
    // const onClear = (e, inputName) => {
    //     setValue("");
    // };

    function onChange(value) {
        console.log("Captcha value:", value);
      }

    const [request, setRequest] = useState([]);
    const [textArea, setTextArea] = useState('');


    const { handleSubmit, register, resetField, formState: { errors } } = useForm();
    
    const onClickSubmit = values => {
        console.log(values);
        setRequest({
            name: values.name,
            lastName: values.lastName,
            email: values.email,
            nameByFather: values.nameByFather,
            index: values.index,
            town: values.town,
            region: values.region,
            house: values.house,
            phone: values.phone,
        });
        reset();
       
    }  

    return(
    <>
        <Breadcrumbs/>
        <Head title="Залишити звернення" />
        <div className="container request-form-container">
        	<div className="request-header">
                <h1>Залишити звернення</h1>
            </div>
            <div className="request-form">
                <form className="left-request-form" onSubmit={handleSubmit(onClickSubmit)}> 
                <div className="inputs-block">{/* <InputsBlock name={name} /> */}
                <div className="row">
                    <div className="col-6 col-md-6 col-sm-12 input-group">
                        <input type="text" className="input-form-1" placeholder="Прізвище" name="lastName" 
                                value={value.lastName} 
                                // onChange={(e) => setValue(e.target.value)}
                                onInput={onInput}
                            {...register("lastName", {
                                required: "Required",
                                pattern: {
                                value: /^[A-Z0-9._%+-]/i,
                                message: "Invalid last name"
                            }
                        })
                        }/>
                        {errors.lastName && <p class="registr-err-mes">{errors.lastName.message}</p>}
                        <button type="button" className="clear-input-btn" onClick={()=>resetField( "lastName")}
                        // onClick={(e)=>onClear(e, "lastName")}
                        >
                            <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                        </button>
                    </div>
                    <div className="col-6 col-md-6 col-sm-12 input-group">
                        <input type="text" className="input-form-1" placeholder="Імʼя" name="name" 
                            value={value.name}
                            onInput={onInput}
                            // onChange={(e) => setValue(e.target.value)}
                                                         {...register("name", {
                                                            required: "Required",
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]/i,
                                                                message: "Invalid name"             
                                                            }
                                                        })
                                                        }/>
                            {errors.name  && <p class="registr-err-mes">{errors.name.message}</p>}                            
                        <button type="button" className="clear-input-btn" onClick={()=>resetField("name")}>
                            <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                        </button>
                    </div>
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="По батькові"  name="nameByFather" 
                    value={value.nameByFather} 
                    onInput={onInput}
                    // onChange={(e) => setValue(e.target.value)}
                        {...register("nameByFather", {
                            required: "Required",
                            pattern: {
                            value: /^[A-Z0-9._%+-]/i,
                            message: "Invalid father's name"
                        }
            })
            }/>
            {errors.nameByFather && <p class="registr-err-mes">{errors.nameByFather.message}</p>}
                <button type="button" className="clear-input-btn" onClick={()=>resetField("nameByFather")}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="Електронна скринька" name="email" 
                    value={value.email} 
                    // onChange={(e) => setValue(e.target.value)}
                    onInput={onInput}
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                    }
                })
                }/>
                    {errors.email && <p class="registr-err-mes">{errors.email.message}</p>} 
                <button type="button" className="clear-input-btn" onClick={()=>resetField("email")}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="Поштовий індекс" name="index" 
                    value={value.index} 
                    // onChange={(e) => setValue(e.target.value)}
                    onInput={onInput}
                    {...register("index", {
                    required: "Required"
                }
            )}
                /> {errors.index && <p class="registr-err-mes">{errors.index.message}</p>}
                <button type="button" className="clear-input-btn" onClick={()=>resetField("index")}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12 input-group">
                <input type="text" className="input-form-1" placeholder="Вулиця, будинок, квартира" name="house" 
                    value={value.house} 
                    // onChange={(e) => setValue(e.target.value)}
                    onInput={onInput}
                    {...register("house", {
                    required: "Required"
                    }
                )}
                /> {errors.house && <p class="registr-err-mes">{errors.house.message}</p>}
                <button type="button" className="clear-input-btn" onClick={()=>resetField("house")}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12  input-group">
                <input type="text" className="input-form-1" placeholder="Район" name="region" 
                    value={value.region} 
                    // onChange={(e) => setValue(e.target.value)}
                    onInput={onInput}
                    {...register("region", {
                        required: "Required"
                        }
                )}
                /> {errors.region && <p class="registr-err-mes">{errors.region.message}</p>}
                <button type="button" className="clear-input-btn" onClick={()=>resetField("region")}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12  input-group">
                <input type="text" className="input-form-1" placeholder="Населений пункт" 
                value={value.town} 
                // onChange={(e) => setValue(e.target.value)}
                onInput={onInput}
                {...register("town", {
                    required: "Required"
                    }
            )}
            /> {errors.town && <p class="registr-err-mes">{errors.town.message}</p>}
                <button type="button" className="clear-input-btn" onClick={()=>resetField("town")}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>
            <div className="col-6 col-md-6 col-sm-12  input-group">
                <input type="text" className="input-form-1" placeholder="Телефон, скайп" 
                value={value.phone} 
                // onChange={(e) => setValue(e.target.value)}
                onInput={onInput}
                {...register("phone", {
                    required: "Required"
                    }
            )}
            /> {errors.phone && <p class="registr-err-mes">{errors.phone.message}</p>}
                <button type="button" className="clear-input-btn" 
                    onClick={()=>resetField("phone")}>
                    <img src='.././images/clear-input-icon.png' className="clear-input-img" alt="clear_img"/>
                </button>
            </div>  
                </div>  
                </div>
                <hr/>
                {/* <div className="input-text-field"> */}
                    {/* <TextareaBlock/> */}
                <div className=" textarea-block">
             <textarea className="form-control-2" rows="5" id="message" name="text" 
                value={textArea} onChange={(e) => setTextArea(e.target.value)}>Повідомлення</textarea>
                </div>
                <hr/>
                {/* <div className="checking-security-block"> */}
                    {/* <CheckingSequrityBlock/> */}

                    <div className=" checking">
                    <div className="checking-content">
            <div className="checking-title">
                <h3>Перевірка безпеки</h3>
                <img src='.././images/i_image.png' className="i_img" alt="i_img"/>
            </div>
            <div className="checking-text-block">
                <p>Підтвердіть нижче, якщо Ви погоджуєтесь на обробку своїх персональних даних</p>
            </div>
            <div className="capcha" >
                <ReCAPTCHA
                    sitekey="6LfL318pAAAAAFUd0bEyoyjl-DAF4tTUC1juwDOe"
                    onChange={onChange}
                />
            </div>
        </div>
        </div> <div className="send-request-button">
                <button type="submit" className="submit-btn">
                    <span>Відправити</span>
                    <img src='.././images/right_icon.png' className="right_icon_img" alt="vector_img"/>
                    
                </button>
                </div>
                </form>
            </div>
        </div>
        </>
    ) 
}

LeftRequest.layout = page => <Layout children={page} title="Залишити звернення" />

export default LeftRequest; 