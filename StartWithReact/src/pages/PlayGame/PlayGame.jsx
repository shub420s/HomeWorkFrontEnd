import { Link } from "react-router-dom";
function PlayGame(){
    return        <div>
           <h1>Lets Play Game</h1>
           <Link to={'/PlayGame'} > 
           Play Game
           </Link>
    </div>
}

export default PlayGame;