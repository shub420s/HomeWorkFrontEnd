 function SelectButton(useLetter){
    const letter = useLetter.join('').toUpperCase().split('')
     const chosseLetter = new Set(letter);
    
     return chosseLetter;
}

export default SelectButton;