import SelectButton from "./GetStyleNow";

 
const Alphabates = new Array(26).fill('').map((e,index)=>
    String.fromCharCode(65+index)
);


function LetterButtons({usedLetters}){
     

    const selectedLetters = SelectButton(usedLetters)

    const getStyling = function(letter){
        if (selectedLetters.has(letter)) {
            return 'text-red-900 hover:bg-red-900/10 active:bg-red-900/20'
        } else {
           return 'text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20'
        }
    }

    const buttons = Alphabates.map(letter => {
        return(
         <button key={`button-${letter}`}
         className={`px-6 py-3 font-sans text-xl font-bold text-center uppercase align-middle transition-all rounded-full select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none ${getStyling(letter)} `}
         >
            {letter}
         </button>
        );
    })
    return (
        <>
        {buttons}
        </>
    )
}

export default LetterButtons;