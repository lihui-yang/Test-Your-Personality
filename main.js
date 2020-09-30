
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;

	if (question1 == "Agree") {
		correct++;
	}else if (question1 == "Disagree"){
		correct+=2;
	}else{
		correct+=0;
	}
	
	if (question2 == "Agree") {
		correct+=2;
	}else if (question2 == "Disagree"){
		correct++;
	}else{
		correct+=0;
	}
	
	if (question3 == "Agree") {
		correct+=2;
	}else if (question3 == "Disagree"){
		correct++;
	}else{
		correct+=0;
	}

	if (question4 == "Agree") {
		correct++;
	}else if (question4 == "Disagree"){
		correct+=2;
	}else{
		correct+=0;
	}

	if (question5 == "Agree") {
		correct++;
	}else if (question5 == "Disagree"){
		correct+=2;
	}else{
		correct+=0;
	}

	if (question6 == "Agree") {
		correct+=2;
	}else if (question6 == "Disagree"){
		correct++;
	}else{
		correct+=0;
	}

	if (question7 == "Agree") {
		correct+=2;
	}else if (question7 == "Disagree"){
		correct++;
	}else{
		correct+=0;
	}

	if (question8 == "Agree") {
		correct+=2;
	}else if (question8 == "Disagree"){
		correct++;
	}else{
		correct+=0;
	}

	if (question9 == "Agree") {
		correct+=2;
	}else if (question9 == "Disagree"){
		correct++;
	}else{
		correct+=0;
	}

	if (question10 == "Agree") {
		correct+=2;
	}else if (question10 == "Disagree"){
		correct++;
	}else{
		correct+=0;
	}
	
	var pictures = ["img/Extroversion.jpg", "img/Agreeableness.jpg", "img/Conscientiousness.jpg","img/openess.png","img/Neuroticism.jpeg"];
	var messages = ["Extroversion (E) is the personality trait of seeking fulfillment from sources outside the self or in community. High scorers tend to be very social while low scorers prefer to work on their projects alone.", 
					"Agreeableness (A) reflects much individuals adjust their behavior to suit others. High scorers are typically polite and like people. Low scorers tend to 'tell it like it is'.", 
					"Conscientiousness (C) is the personality trait of being honest and hardworking. High scorers tend to follow rules and prefer clean homes. Low scorers may be messy and cheat others.",
					"Openness to Experience (O) is the personality trait of seeking new experience and intellectual pursuits. High scores may day dream a lot. Low scorers may be very down to earth.",
					"Neuroticism (N) is the personality trait of being emotional."
					];
	var name = ["Extroversion","Agreeableness","Conscientiousness","Openness","Neuroticism"];
	var score;
	
	if (correct >= 0 && correct <= 3) {
		score = 4;
	}

	if (correct >= 4 && correct <= 8 ) {
		score = 3;
	}

	if (correct >= 9 && correct <= 13 ) {
		score = 2;
	}
	
	if (correct >= 14 && correct < 18 ) {
		score = 1;
	}

	if (correct >= 18 ) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("Personality").innerHTML = "You are " + name[score] + " personality!";
	document.getElementById("picture").src = pictures[score];
}

function link(){
	window.location.replace("https://en.wikipedia.org/wiki/Big_Five_personality_traits");
}
	
