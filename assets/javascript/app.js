$(document).ready(function(){
console.log("javascript is loaded")

// Game questions
var trivia = [{ //qestion 0
	question: "Historic Route 66 goes through many states, except which of these?",
	choices: ["Illinois" ,"Kansas", "Colorado", "California"],
	images: ["assets/images/route66.jpg"],
	validAnswer: "Colorado"
}, { //question 1
	question: "Which is the longest river in the United States?",
	choices: ["Colorado River", "Missouri River", "Mississippi River", "Ohio River"],
	images: ["assets/images/missouriRiver.jpg"],
	validAnswer: "Missouri River"
}, { //question 2
	question: "Where are the headwaters of the Missouri River?",
	choices: ["Missouri", "Montana", "Iowa", "Minnesota"],
	images: ["assets/images/montana.jpg"],
	validAnswer: "Montana"
}, { //question 3
	question: "The Hoover Dam is on which river?",
	choices: ["Colorado River", "Missouri River", "Nevada River", "Hoover River"],
	images: ["assets/images/hooverDam.png"],
	validAnswer: "Colorado River"
}, { //question 4
	question: "Interstate 40 ends in which east coast state?",
	choices: ["Virgina", "North Carolina", "South Carolina", "Maryland"],
	images: ["assets/images/northCarolina.jpg"],
	validAnswer: "North Carolina"
}, { //question 5
	question: "Which is the western-most state in the U.S.?",
	choices: ["Alaska", "Hawaii", "Washington", "Florida"],
	images: ["assets/images/alaska.jpg"],
	validAnswer: "Alaska"
}, { //question 6
	question: "Which is the eastern-most state in the U.S.?",
	choices: ["Maine", "Florida", "Alaska", "Hawaii"],
	images: ["assets/images/alaska2.jpg"],
	validAnswer: "Alaska"
}, { //question 7
	question: "Which is the southern-most state in the U.S.?",
	choices: ["Florida", "Texas", "California", "Hawaii"],
	images: ["assets/images/hawaii.jpg"],
	validAnswer: "Hawaii"
}, { //question 8
	question: "How many states, or portions of states, are further north than the southernmost point of Canada?",
	choices: ["4", "16", "22", "27"],
	images: ["assets/images/canada.jpg"],
	validAnswer: "27"
}, { //question 9
	question: "Which of the following cities is the furthest west?",
	choices: ["San Diego, CA", "Los Angeles, CA", "Reno, NV", "Spokane, WA"],
	images: ["assets/images/reno.jpg"],
	validAnswer: "Reno, NV"
}, { //question 10
	question: "Which of the following states borders the most other states?",
	choices: ["West Virginia", "Kentucky", "Tennessee", "Oklahoma"],
	images: ["assets/images/tennessee.jpg"],
	validAnswer: "Tennessee"
},
];

var correctScore = 0;
var incorrectScore = 0;
var userGuess = "";
var choiceA = "";
var choiceB = "";
var choiceC = "";
var choiceD = "";
var correctAnswer = "";
var answerImg = "";
var questionsUsed = [];
var m = 0;
var countDown = 0;

$('#playButton').on('click', function() {
	console.log("the start button was clicked");
	startGame();
});

$('#resetButton').on('click', function() {
	console.log("the reset button was clicked");
	startGame();
});

function startGame() {
	console.log("the 'startGame' function was called");
	$('#initial').hide();
	$('#resultBox').hide();
	$('#scoreBox').hide();
	$('#gameBlock').show();
	$('#buttonBox').show();
	questionsUsed = [];
	correctScore = 0;
	incorrectScore = 0;	
	getQuestion();	
};

function nextRound() {
	console.log("the nextRound function was called");
	$('#buttonBox').show();
	$('#resultBox').hide();
	$("#time").show();
	getQuestion();	
}

//this function gets a random question and passes in the answer choices from the object array
function getQuestion() {
	console.log("the getQuestion function was called");
	m = Math.floor((Math.random() * 10) + 0); //figure out how to set this var to min = 0, max = trivia.length so that I can add more questions without having to change this
	console.log("Question #" + m);
	questionsUsed.push(m);
	choiceA = trivia[m].choices[0];
	choiceB = trivia[m].choices[1];
	choiceC = trivia[m].choices[2];
	choiceD = trivia[m].choices[3];
	correctAnswer = trivia[m].validAnswer;
	answerImg = trivia[m].images;
	$('#spanQuestion').text(trivia[m].question); 
	$('#guess0').text(choiceA);
	$('#guess1').text(choiceB);
	$('#guess2').text(choiceC);
	$('#guess3').text(choiceD);
	console.log("The correct answer is " + correctAnswer);
	timer();
};

//this starts the timer
function timer() {
	console.log("the timer function was called");
	countDown = 5;

	//this will listen for an answer click
	$(".btn-guess").on('click', function() {
	clearInterval(interval);
	console.log("the user clicked an answer button");
	userGuess = event.target.id;
		if (userGuess == "guess0") {
			userGuess = choiceA;
		} else if (userGuess == "guess1") {
			userGuess = choiceB;
		} else if (userGuess == "guess2") {
			userGuess = choiceC;
		} else {
			userGuess = choiceD;
		};
	checkAnswer();
	});

	// this will count down the time until time's up, if there is no click event
	var interval = setInterval(function() {
		$('#spanTimer').text(countDown);
		countDown -=1;
			// this will stop the timer when it gets to 0
			if (countDown == 0) {
				clearInterval(interval);				
				$('#spanTimer').text("Time's up!");
				incorrectScore ++;
				$('#spanResult').text("The answer is: " + correctAnswer);
				endRound();
			};
		}, 1000);
};

// this function validates the user's answer
function checkAnswer() {
	console.log("The checkAnswer function was called");
	$("#spanGuess").text("You guessed: " + userGuess)
	if (userGuess == correctAnswer) {
		$("#spanResult").text("That's correct!");
		correctScore ++;
	} else {
		$("#spanResult").text("Sorry, that's incorrect.  The correct answer is " + correctAnswer + ".");
		incorrectScore ++;
	};
	endRound();	
};

//this function ends the round when the timer runs out ... need to fix scope of m to persist after getQuestion
function endRound() {
	console.log("the endRound function was called");
	$('#buttonBox').hide();
	$("#time").hide();	
	$('#resultBox').show();
	$('#imageId').attr('src', answerImg);
	setTimeout(checkRound, 5000);
};

// this function decides whether or not to ask another question
function checkRound() {
	console.log("the checkRound function was called");
	console.log(questionsUsed.length);
	if (questionsUsed.length < 5) {
		nextRound();
	} else {
		gameOver();
	};
};

//this function ends the game after 5 questions
function gameOver() {
	console.log("the gameOver function was called");
	$('#buttonBox').hide();
	$('#resultBox').hide();
	$("#time").hide();
	$("#scoreBox").show();
	$("#spanQuestion").text("Game Over!")
	$("#spanCorrect").text(correctScore);
	$("#spanIncorrect").text(incorrectScore);
};




// this closes the document.ready function. Do not delete! 
});