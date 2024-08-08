export function GetAllCharacter(Word,usedletter){
    usedletter = usedletter.map(letter => letter.toUpperCase())
    const gussedLetter = new Set(usedletter);
    const character = Word.toUpperCase().split('').map(char => {
      if (gussedLetter.has(char)) {
          return char;
      }
      return '_';
    });
    return character.join('');
}