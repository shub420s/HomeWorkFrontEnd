//container component for the TextInputForm
import { useState } from "react";
import TextInputForm from "./TextInputForm";
function TextInputFormContainer(){
    const [value,setValue] = useState('');

    function handelsubmitform(event){
       event.preventDefault();
       console.log("Form Submited",value);
       onsubmit?.(value);
    }

    function handletextInputChange(event){
         console.log("Text Input Change");
         console.log(event.target.value);   
         setValue(event.target.value);   
    }

    return(
        <TextInputForm
           handelsubmitform ={handelsubmitform}
           handletextInputChange = {handletextInputChange}
           value = {value}
        />
    )
}

export default TextInputFormContainer;