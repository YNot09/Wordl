const wordPool = [
  "APPLE","BRAVE","CRANE","DANCE","EAGLE","FLAME","GLOBE","HONEY",
  "IGLOO","JUMBO","MONEY","PLANE","QUICK","ROBOT","SNAKE","TIGER",
  "ULTRA","VIVID","WATER","XENON","YACHT","ZEBRA","DOMER","HOMER", 
  "WORDL", 
];

let answer = wordPool[Math.floor(Math.random() * wordPool.length)];

let firstGuessSubmitted = false;
let secondGuessSubmitted = false;
let thirdGuessSubmitted = false;
let fourthGuessSubmitted = false;
let fifthGuessSubmitted = false;
let sixthGuessSubmitted = false;

console.log("The answer is " + answer);

/* CONTROLS WHICH ROW RUNS */

function submitWord() {

  if (!firstGuessSubmitted) {
    submitGuess();
    return;
  }

  if (!secondGuessSubmitted) {
    submitSecondGuess();
    return;
  }

  if (!thirdGuessSubmitted) {
    submitThirdGuess();
    return;
  }

  if (!fourthGuessSubmitted) {
    submitFourthGuess();
    return;
  }

  if (!fifthGuessSubmitted) {
    submitFifthGuess();
    return;
  }

  if (!sixthGuessSubmitted) {
    submitSixthGuess();
    return;
  }

}

/* ROW FUNCTIONS */
function submitGuess(){
  firstGuessSubmitted = true
  checkRow(1)
}

function submitSecondGuess(){
  secondGuessSubmitted = true
  checkRow(6)
}

function submitThirdGuess(){
  thirdGuessSubmitted = true
  checkRow(11)
}

function submitFourthGuess(){
  fourthGuessSubmitted = true
  checkRow(16)
}

function submitFifthGuess(){
  fifthGuessSubmitted = true
  checkRow(21)
}

function submitSixthGuess(){
  sixthGuessSubmitted = true
  checkRow(26)
}
/* COLOUR CHECKING */
function checkRow(start){

  let word = ""

  for(let i=0;i<5;i++){

    let id = String(start + i).padStart(2,"0")
    let box = document.getElementById(id)
    let val = box.value.toUpperCase()

    word += val

    if(val === answer.charAt(i)){
      box.style.backgroundColor = "#38bdf8"
      box.style.borderColor = "#38bdf8"
    }
    else if(answer.includes(val)){
      box.style.backgroundColor = "yellow"
    }
    else{
      box.style.backgroundColor = "gray"
    }

  }

  document.getElementById("out").innerText = word

}
/* INPUT HANDLING */
const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach((input, index) => {

  input.addEventListener('input', () => {
    input.value = input.value.toUpperCase();

    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {

    if (e.key === " ") {
      e.preventDefault();
      return;
    }

    if (e.key === 'Backspace' && input.value === '' && index > 0) {
      inputs[index - 1].focus();
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if(!firstGuessSubmitted && rowIsComplete(1)){
        submitGuess();
        return;
      }

      if(!secondGuessSubmitted && rowIsComplete(6)){
        submitSecondGuess();
        return;
      }

      if(!thirdGuessSubmitted && rowIsComplete(11)){
        submitThirdGuess();
        return;
      }

      if(!fourthGuessSubmitted && rowIsComplete(16)){
        submitFourthGuess();
        return;
      }

      if(!fifthGuessSubmitted && rowIsComplete(21)){
        submitFifthGuess();
        return;
      }

      if(!sixthGuessSubmitted && rowIsComplete(26)){
        submitSixthGuess();
        return;
      }

    }

  });

});