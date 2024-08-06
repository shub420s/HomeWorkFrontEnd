import ButtonComponent from '../../Component//Button//ButtonComponent.jsx';
import TextInputForm from "../../Component/TextInputForm/TextInputForm.jsx";
import './index.css';
import { useState } from "react";
import { Link } from "react-router-dom";
function StartPage(){
    const [Toggle,setToggle] = useState(false);
    const onclickShow = () => {
             setToggle(!Toggle)
             
    }

    return(
    <>

<h1 className="font-semibold text-3xl text-center text-Black mb-4">Hello Wellcome in The Game</h1>

<TextInputForm label={"Hint"}  />

<TextInputForm  label={"Enter the word"} type={Toggle ? 'text' : 'password'} text="Ok" buttontype="Submit" StyleType="Simple"
onsubmit={(value) => console.log("value from hidden form is", value)} 
onClick={onclickShow}
/>
 
 <div>
< ButtonComponent text="Start Game" buttontype="Submit" StyleType="Submit"/>
</div>

<Link to={'/StartPage'} >
StartPage</Link>
    </>
)


}

export default StartPage;