//Citations are in References&Citations sheet

var htmlLocation = window.location.pathname; //finds the HTML file path of the current page that imported this JavaScript file
if(htmlLocation.includes("Hymns")){ //checks if path includes name of specific HTML file to set videoIDs
  var videoID = '9vBLvjOs-ww';
  var list = 'PLfqaVRCiguCujqk3o9HRvGdX-VHqUjoAV';
}
else if(htmlLocation.includes("History")){
  var videoID = 'Fpgb0uekhtQ';
  var list = 'PLjrNkr-jFAnVsQunor7B1x8gQ_xFa8D0e';
}
else if(htmlLocation.includes("Spiritual")){
  var videoID = 'hdt53p1g-nQ';
  var list = 'PLy-UfSvNIomRhVviq_h5jiawrmcjyT5uC';
}

// code loads the IFrame Player API code asynchronously - meaning YouTube IFrame player gets loaded as the site is loading.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      //function creates an <iframe> (and YouTube player) after the API code downloads with a set height/width.
      var player;
      function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
	      height: '450',
	      width: '640',
	      videoId: videoID, //videoID depends on HTML page calling this function and is set in the previous if statements
	      playerVars: {
          //integrates playlist into the same IFrame YouTube Player so videos will autoplay
          	list: list //list depends on HTML page calling this function and is set in the previous if statements 
      	  }
        });
      }

    

