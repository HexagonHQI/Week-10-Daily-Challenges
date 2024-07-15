//First daily Challenge


function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        resolve(words.map(word => word.toUpperCase()));
      } else {
        reject('All elements in the array must be strings');
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        resolve(words.sort());
      } else {
        reject('The array must have more than 4 elements');
      }
    });
  }
  
  // Test 1: Catch method is executed
  makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  // Test 2: Catch method is executed
  makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  // Test 3: Array of words uppercased and sorted
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) // ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));


    //Second Daily Challenge



    const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`;
      
      async function main() {
        try {
          const morseJs = JSON.parse(morse);
          if (Object.keys(morseJs).length === 0) {
            throw new Error('Morse JavaScript object is empty');
          }
      
          const userInput = prompt('Enter a word or sentence:');
          const morseTranslation = userInput.toLowerCase().split('').map(char => {
            if (morseJs[char]) {
              return morseJs[char];
            } else {
              throw new Error(`Character '${char}' does not exist in the morse JavaScript object`);
            }
          });
      
          const morseString = morseTranslation.join('\n');
          const paragraph = document.createElement('p');
          paragraph.textContent = morseString;
          document.body.appendChild(paragraph);
          console.log(morseString);
        } catch (error) {
          console.error(error);
        }
      }
      
      main();