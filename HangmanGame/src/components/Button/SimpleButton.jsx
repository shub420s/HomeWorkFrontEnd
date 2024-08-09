function Sbutton({text,onclick,onSubmit,buttontype}){
    return(
        <>
        <button
        OnClick = {onclick}
        onSubmit={onSubmit}
        type = {buttontype}
        className="select-none rounded-lg bg-green-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
             {text} 
             </button>
        </>
    )
}

export default Sbutton;