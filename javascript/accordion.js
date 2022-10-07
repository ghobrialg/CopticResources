//Citations are in References&Citations sheet

dropdown();

function dropdown(){ //function that sets accordion_information to display maxHeight or not, depending on state before user's click
var sections = document.getElementsByClassName("accordion_dropdown"); //number of sections that will have a drop down is being stored
var x = 0;
while (x < sections.length) { //a while loop that iterates over the number of sections
  sections[x].addEventListener("click", function() { //function activates on click depending on the section selected
    this.classList.toggle("active"); 
    var accordion_information = this.nextElementSibling; //stores the next element to see if the accordion is dropped down or not
    if (accordion_information.style.maxHeight){ //Checking if accordion_information has a maxHeight set or not
      accordion_information.style.maxHeight = null; //closes if at maxHeight
    } else {
     accordion_information.style.maxHeight = accordion_information.scrollHeight + "px" ; //the maxHeight is equated to the content
     //of the accordion plus a pixel unit, i.e accordion_information fully displayed
    }
  });
  x++;
}
}