import { useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import StartGame from './pages/StartPage/StartGame';
import PlayGame from './pages/PlayPage/PlayGame';
import Sbutton from './components/Button/SimpleButton';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

function App() {
  
  const navigate = useNavigate();
  
  function handelclick(){
      navigate('/playgame');
  }
         
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center ">
      Hello Wellcome to the Game 
    </h1>
 
      <h2 className='text-center text-2xl font-semibold' > To Play the game click on the play </h2>
        <div className='flex items-center justify-center'
         >

        <Link to= '/playgame' > 
        <Sbutton buttontype="button" text="Play Game" 
          onclick={handelclick}
          />
         </Link>

         </div>
       

     <Routes>
      <Route path='/playgame' element = {<PlayGame/>} />
      <Route path="/nfp" element={<NotFoundPage/>} />
      <Route path='/startgame' element = {<StartGame/>} />
     </Routes>
 </>
  )
}

export default App;
