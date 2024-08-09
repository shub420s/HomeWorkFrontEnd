import { Link } from "react-router-dom";
import Sbutton from "../../components/Button/SimpleButton";

function PlayGame(){
    return(
        <div>
        <h2> Let's Play the Game</h2>

        <Link to={'/startgame'} > 
        <Sbutton text="Start Game" />
        </Link>
        </div>
    )
}

export default PlayGame;