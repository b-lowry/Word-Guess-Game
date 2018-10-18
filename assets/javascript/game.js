//Define array of words for computer to select one
var words = ["cowboys", "eagles", "quarterback", "runningback", "chargers", "holding", "penalty", "interception", "fumble", "touchdown", "fieldgoal"];

//Get computer to select one of the words from the array at random
var word = words[Math.floor(Math.random() * words.length)];

//Loop through the word and add underscores to equal how many spaces need to be added
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = " _ ";
}

var wrongAnswerArray = [];

//Display the spaces on page
document.getElementById("current-word").textContent = answerArray;

//Number of guesses user starts with
var guesses = 10; 
document.getElementById("remaining").textContent = guesses;

//create function on keyup "function(event)"
//store keyup value in var
//make conditional if letter exists in word or else 
  //if in word then push to array and display on document
  //if not in word than push to other array and subtract one of the guesses remaining

document.onkeyup = function(event) {                              
  var userInput = event.key;
  if(word.indexOf(userInput) > -1) {
   //push correct word into the correct place in the answer array
   answerArray.forEach(function() {
     //what goes here to update the answer array at the correct location with the correct letter
           
   }); 
   document.getElementById("current-word").textContent = answerArray;
  } else {
    wrongAnswerArray.push(userInput);
    document.getElementById("guessed").textContent = wrongAnswerArray;
    guesses --; 
    document.getElementById("remaining").textContent = guesses; 
  }                    
};  
