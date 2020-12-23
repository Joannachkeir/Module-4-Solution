

 (function (window) {

	var HelloSpeaker = {};


var speakWord = "Hello";

HelloSpeaker.speak = function() {
  console.log(speakWord + " " + name);
}

window.HelloSpeaker = HelloSpeaker;

})(window);


