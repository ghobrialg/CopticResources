//Tryit Editor v3.6. (n.d.). W3Schools. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto


var slideIndex = 0; //setting the variable called slideIndex to 0
showSlides(); //calling a function created and was named showSlides, this is the JavaScript code for the automatic slideshow

function showSlides() { //setting the showSlides function which will be used to display the slides
	var i; //initializing a variable called i to be used for a forloop
	var slides = document.getElementsByClassName("mySlides"); //here the code finds out how many slides are in the slideshow
	//so the code can iterate over the number of slides
	var boxes = document.getElementsByClassName("box"); //here the code finds out how many boxes are listed in the slideshow code
	//so the code can iterate over the number of boxes
	for (i = 0; i < slides.length; i++) { //a forloop is initialized that iterates over the number of slides
		slides[i].style.display = "none"; //the slides are set to not be displayed by "none" through the iteration
		/*this is done so not all the slides are displayed at once*/
	}
	slideIndex++; //the slideIndex variable is incremented by 1
	if (slideIndex > slides.length) { //if statement that is executed depending on if the value of 
		//slideIndex is greater than the number of slides, this is done so that the slideshow can restart from the first position
		slideIndex = 1
	}
	for (i = 0; i < boxes.length; i++) { //a forloop is initialized that iterates over the number of boxes
	 boxes[i].className = boxes[i].className.replace(" active", ""); //just like the slides, the boxes are not activated after the forloop
	 /*so that not all the boxes are active at once */
	}
	/*The slides and box are both using SlideIndex-1 as reference so that they are always at the same number*/
	slides[slideIndex - 1].style.display = "block"; /*The slide is set to be displayed using "block"*/
	boxes[slideIndex - 1].className += " active"; /*The box is set to be displayed using "active" */
	setTimeout(showSlides, 8000); // calling the setTimeout function which executes a function after a certain time. Putting in the parameters
	//showSlides and Change image every 8 seconds
}