import { Link, useLocation } from "react-router-dom";
import MaskText from "../../Component/MaskText/MaskText";
import LetterButtons from "../../Component/LetterButton/LetterButton";
import { useState } from "react";
import HangMan from "../../Component/Hangman/HangMan";
//usedLetters={['B' , 'E']}
function PlayGame(){
    const [usedLetters , setUsedLetters] = useState([]);
    const [step , setstep] = useState(0);
    const location = useLocation();
    const wordSelected = location.state?.wordSelected;

    const handelLetterClick = function(letter){
        if (wordSelected.toUpperCase().includes(letter)) {
            console.log('correct');
        } else {
            console.log('correct');
            setstep(step +1);
        }
        setUsedLetters([...usedLetters , letter])
    }


    return  (      <div>
           <h1>Lets Play Game</h1>
          
          <hr/>

          <MaskText text={wordSelected} usedLetters={usedLetters} />

          <hr />
<div className="flex justify-between item-center" >

        <div className="basis-2/4" >
          <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handelLetterClick} />
        </div>

        <div className="basis-2/4" >
          <HangMan step={step} />
        </div>

</div>
           <Link to={'/StartGame'} >Start the Game </Link>
    </div>)
}

export default PlayGame;