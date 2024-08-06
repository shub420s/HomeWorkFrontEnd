function GetButtonStyleType(StyleType){
    
    const SimpleButtonStyling = "bg-blue-500 border-blue-700 hover:bg-blue-700 hover:border-blue-900 ";

    const SubmitButtonStylig = "bg-green-500 border-green-700 hover:bg-green-700 hover:border-green-900";

    const WarningButtonStyling = "bg-red-500 border-red-700 hover:bg-red-700 hover:border-red-900";
    
     if (StyleType === "Simple") {
        return SimpleButtonStyling;
     } else if (StyleType === "Submit") {
        return SubmitButtonStylig;
     } else {
        return;
     } 
   

}

export default GetButtonStyleType;