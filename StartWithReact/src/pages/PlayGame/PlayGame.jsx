import { Link } from "react-router-dom";
import MaskText from "../../Component/MaskText/MaskText";
import LetterButtons from "../../Component/LetterButton/LetterButton";
//usedLetters={['B' , 'E']}
function PlayGame(){
    return        <div>
           <h1>Lets Play Game</h1>
          
          <hr/>

          <MaskText text="HUMBLE" usedletter={['b' , 'e']} />

          <hr />

          <LetterButtons usedletter={['b' , 'e']} />
          <hr />

           <Link to={'/PlayGame'} >  </Link>
    </div>
}

export default PlayGame;