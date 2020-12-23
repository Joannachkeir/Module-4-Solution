
(function (window) {

	var ByeSpeaker = {};

	var speakWord = "Good Bye";
	
ByeSpeaker.speak = function(names) {
  console.log(speakWord + " " + names);
}

window.ByeSpeaker = ByeSpeaker;

})(window);
