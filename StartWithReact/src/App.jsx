import ButtonComponent from "./Component/Butoon/ButtonComponent"
import TextInput from "./Component/TextInput/TextInput";
import TextInputForm from "./Component/TextInputForm/TextInputForm";
import './index.css';
import { useState } from "react";
import { Router, Route, Routes, useNavigate } from 'react-router-dom';
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {


  const navigate = useNavigate();

  function handelSubmit(){
       navigate('/PlayGame');
  }

  const [Toggle,setToggle] = useState(false);
  const onclickShow = () => {
           setToggle(!Toggle)
  }

  return (
  <>
      <h1 className="font-semibold text-3xl text-center text-Black mb-4">Hello Wellcome in The Game</h1>

      <TextInputForm label={"Hint"}  />

      <TextInputForm label={"Enter the word"} type={Toggle ? 'text' : 'password'} text="Ok" buttontype="Submit" StyleType="Simple"
      onsubmit={(value) => console.log("value from hidden form is", value)} 
      onClick={onclickShow}
      onSubmit={handelSubmit}
      />
       
       <div
      //  className="flex w-max h-flex item-center justify-center"
       >
      < ButtonComponent text="Start Game" buttontype="Submit" StyleType="Submit"/>
      </div> 

        <Routes>
          {/* <Route path="/StartGame" element = {<StartGame/>} /> */}
          <Route path="/PlayGame" element = {<PlayGame/>} />
        </Routes>

  </>
  )
}

export default App; 
