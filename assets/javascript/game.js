//Define array of words for computer to select one
var words = ["cowboys", "eagles", "quarterback", "runningback", "chargers", "holding", "penalty", "interception", "fumble", "touchdown", "fieldgoal"];

//Get computer to select one of the words from the array at random
var word = words[Math.floor(Math.random() * words.length)];

//Number of guesses user starts with
var guesses = 10; 
document.getElementById("remaining").textContent = guesses;

//Loop through the word and add underscores to equal how many spaces need to be added
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = " _ ";
}
document.getElementById("current-word").textContent = answerArray;

//For each keyup decrese the number of guesses by 1 if guess is incorrect or add guessed letter to answer array if correct

