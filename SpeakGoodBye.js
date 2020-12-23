
(function (window) {

	var ByeSpeaker = {};

	var speakWord = "Good Bye";
	
ByeSpeaker.speak = function() {
  console.log(speakWord + " " + name);
}

window.ByeSpeaker = ByeSpeaker;

})(window);
