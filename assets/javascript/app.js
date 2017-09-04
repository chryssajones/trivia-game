$(document).ready(function(){
console.log("javascript is loaded")

// Game questions
var trivia = [{ //qestion 0
	question: "Historic Route 66 goes through many states, except which of these?",
	choices: ["Illinois" ,"Kansas", "Colorado", "California"],
	images: ["../images/route66.jpg"],
	validAnswer: 2
}, { //question 1
	question: "Which is the longest river in the United States?",
	choices: ["Colorado River", "Missouri River", "Mississippi River", "Ohio River"],
	images: ["../images/missouriRiver.jpg"],
	validAnswer: 1
}, { //question 2
	question: "Where are the headwaters of the Missouri River?",
	choices: ["Missouri", "Montana", "Iowa", "Minnesota"],
	images: ["../images/montana.jpg"],
	validAnswer: 1
}, { //question 3
	question: "The Hoover Dam is on which river?",
	choices: ["Colorado River", "Missouri River", "Nevada River", "Hoover River"],
	images: ["../images/hooverDam.png"],
	validAnswer: 0
}, { //question 4
	question: "Interstate 40 ends in which east coast state?",
	choices: ["Virgina", "North Carolina", "South Carolina", "Maryland"],
	images: ["../images/northCarolina"],
	validAnswer: 1
}, { //question 5
	question: "Which is the western-most state in the U.S.?",
	choices: ["Alaska", "Hawaii", "Washington", "Florida"],
	images: ["../images/alaska.jpg"],
	validAnswer: 0
}, { //question 6
	question: "Which is the eastern-most state in the U.S.?",
	choices: ["Maine", "Florida", "Alaska", "Hawaii"],
	images: ["../images/alaska2.jpg"],
	validAnswer: 2
}, { //question 7
	question: "Which is the southern-most state in the U.S.?",
	choices: ["Florida", "Texas", "California", "Hawaii"],
	images: ["../images/hawaii.jpg"],
	validAnswer: 3
}, { //question 8
	question: "How many states, or portions of states, are further north than the southernmost point of Canada?",
	choices: ["4", "16", "22", "27"],
	images: ["../images/canada.jpg"],
	validAnswer: 3
}, { //question 9
	question: "Which of the following cities is the furthest west?",
	choices: ["San Diego, CA", "Los Angeles, CA", "Reno, NV", "Spokane, WA"],
	images: ["../images/reno.jpg"],
	validAnswer: 2
}, { //question 10
	question: "Which of the following states borders the most other states?",
	choices: ["West Virginia", "Kentucky", "Tennessee", "Oklahoma"],
	images: ["../images/tennessee.jpg"],
	validAnswer: 2
},
];

var correctScore = 0;
var incorrectScore = 0;

function startGame() {
	console.log("the 'startGame' function was called")
	$('#gameBlock').show();
	$('#buttonBox').show();
	$('#initial').hide();
	questionsUsed = [];
	correctScore = 0;
	incorrectScore = 0;	
	getQuestion();	
	timer();
};

//this sets the timer
function timer() {
	var countDown = 5;
	var interval = setInterval(function() {
		$('#spanTimer').text(countDown);
		countDown -=1;
		if (countDown == -1) {
			console.log("time's up!")
			clearInterval(interval);
			timesUp();
			};
		}, 1000);

};

//this function gets a random question and posts the choices
var questionsUsed = [];
var m = 0;
function getQuestion() {
	m = Math.floor((Math.random() * 10) + 0); //figure out how to set this var to min = 0, max = trivia.length so that I can add more questions without having to change this
	console.log(m);
	questionsUsed.push(m);
	$('#spanQuestion').text(trivia[m].question); 
	$('#guess0').text(trivia[m].choices[0]);
	$('#guess1').text(trivia[m].choices[1]);
	$('#guess2').text(trivia[m].choices[2]);
	$('#guess3').text(trivia[m].choices[3]);
};

//this function checks the user's answer
function checkAnswer() {
	// create an event listener for clicks on an answer button
	// check the answer against the validAnswer in the array table
	// show the image from the array table
	// if correct, print "that's correct!" and increment the correct score
	// else, print "sorry, the correct answer is" + the correct answer and increment the incorrect score
	// call the checkRound() function
};

//this function ends the round when the timer runs out ... need to fix scope of m to persist after getQuestion
function timesUp() {
	console.log("time's up!");
	$('#buttonBox').hide();
	$('#spanTimer').text("Time's Up!")
	$('#resultBox').show();
	// $('#spanResult').text("The correct answer is: " + trivia[m].choices[m]);
	// $('#spanImage').append(img = trivia[m].image);
	// print "time's up!"
	// show the image from the array table
	// print "the correct answer is" + the answer
	// call the checkRound() function
};

// this function decides whether or not to ask another question
function checkRound() {
	// check the questionsUsed array.length to find out how many questions have been asked.
	// if <5, call the getQuestion() function again
	// if == 5, call the gameOver() function
};

//this function ends the game after 5 questions
function gameOver() {
	console.log("game over!")
};


//this calls the function to start the game when the "let's play!" button is clicked
$('#playButton').on('click', function() {
	console.log("the start button was clicked")
	startGame();
});





// this closes the document.ready function. Do not delete! 
});