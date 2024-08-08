import { Link } from "react-router-dom";

function PlayGame(){
    return(
        <div>
        <h2> Let's Play the Game</h2>
        <Link to={'/playgame'} ></Link>
        </div>
    )
}

export default PlayGame;