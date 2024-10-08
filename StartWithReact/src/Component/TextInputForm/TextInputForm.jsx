import TextInput from "../TextInput/TextInput";
import ButtonComponent from "../Butoon/ButtonComponent";
import { useState } from "react";

function TextInputForm({label,type,text,buttontype,StyleType,onSubmit,onClick}){

    const [value,setValue] = useState('');

    function handelsubmitform(event){
       event.preventDefault();
       console.log("Form Submited",value);
       onSubmit?.(value);
    }

    function handletextInputChange(event){
         console.log("Text Input Change");
         console.log(event.target.value);   
         setValue(event.target.value);   
            
    }

    return(
        <>
        <form onSubmit={handelsubmitform} className="flex items-end" >
             <div className="mr-2 flex-1">

             <TextInput label={label} type={type} value={value} onchange={handletextInputChange}
             />

             </div>

            {buttontype && <div> 
                 < ButtonComponent text={text} buttontype={buttontype} StyleType={StyleType}/> 
            </div>}


        </form>

        {buttontype && <div >
                < ButtonComponent text="Show" buttontype={buttontype} StyleType={StyleType} onClick={onClick} /> 
             </div> }

        </>
    )
}

export default TextInputForm;