import './DateComponent.scss';


function DateComponent({date}){

    return(
    
        <div className="date-block">
           <h2>{date}</h2> 
        </div>
    
    )
}

export default DateComponent;   