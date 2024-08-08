import { GetAllCharacter } from "./MaskTextUtility";

function MaskText({text,usedletter}){
    const Letter = GetAllCharacter(text,usedletter).split('');
    return(
        <>
        {Letter.map((Letter,index) => {
           return <span key={`letter-${index}`}  >{Letter} </span>
        })}
        </>
    )
}

export default MaskText;