$(document).ready(function(){
console.log("javascript is loaded")


function startGame() {
	console.log("the 'startGame' function was called")
	$('#gameBlock').show();
	$('#buttonBox').show();
	$('#initial').hide();
};

$('#startTimer').on('click', function() {
	console.log("the start button was clicked")
	startGame();
});

});