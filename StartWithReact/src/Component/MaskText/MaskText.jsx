import { GetAllCharacter } from "./MaskTextUtility";

function MaskText({text,usedLetters}){
    const Letter = GetAllCharacter(text,usedLetters).split('');
    return(
        <>
        {Letter.map((Letter,index) => {
           return <span key={`letter-${index}`}  >{Letter} </span>
        })}
        </>
    )
}

export default MaskText;