import './TextareaBlock.scss';


function TextareaBlock(){

    return(
    
        <div className="container textarea-block">
             <textarea className="form-control-2" rows="5" id="message" 
             name="text" value="Textarea" readOnly
            //  onChange={alert('You just changed the textarea.')}
             >Повідомлення</textarea>
        </div>
    
    )
}

export default TextareaBlock;   