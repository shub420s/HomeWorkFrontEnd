export function LetterButtonsUtility(usedLetter){
    const selectedLetters = new Set(usedLetter.join('').toUpperCase().split(''));

    const getStyling = function(letter){
        if (selectedLetters.has(letter)) {
            return 'text-red-900 hover:bg-red-900/10 active:bg-red-900/20'
        } else {
           return 'text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20'
        }
    }
      return getStyling();
}

