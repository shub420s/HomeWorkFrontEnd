import GetButtonStyleType from "./GetButtonStyleType";


function ButtonComponent({buttontype, text, StyleType,onClick }){
    return (
    <button
    onClick={onClick}
     type = {buttontype}
     className={`py-2 px-4 ${GetButtonStyleType(StyleType)} text-white rounded-md transistion-all`}
    >
        {text} 
    </button>

    )
}

export default ButtonComponent;