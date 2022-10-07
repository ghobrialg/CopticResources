//Citations are in References&Citations sheet

getRandomVerse(); //when script is accessed call getRandomVerse to display the verse of the day using the API
function getRandomVerse() {
	var url = "https://beta.ourmanna.com/api/v1/get/?format=json&order=votd";
  	var xhttp = new XMLHttpRequest();
  
  	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) { //if page request is succesful	
	    	//parse the request response to be able to access the data in the JSON
	    	var parsedJSON = JSON.parse(this.response);
		    
		    //the IDs verseText and versePassage are found and the text is set to results from the parsed API.
		    document.getElementById("verseText").innerHTML = parsedJSON["verse"]["details"]["text"];
	    	document.getElementById("versePassage").innerHTML = parsedJSON["verse"]["details"]["reference"];
	    }
	  };
	  
  	//GET request is made to the previously set URL for the API
	xhttp.open("GET", url, true);
	xhttp.send();
}

