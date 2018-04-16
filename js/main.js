
// Enter on keyup
document.getElementById("input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});

// Word Scrambler
function scramble() {
	var word = document.getElementById("input").value;
	var wordLength = word.length;
	var scrambled = "";

	for (var i = 0; i < wordLength; i++){
		var charIndex = Math.floor(Math.random() * word.length);
		scrambled += word.charAt(charIndex);
		word = word.substr(0, charIndex) + word.substr(charIndex + 1);
	}
	document.getElementById("test").innerHTML = scrambled;
}

// Takes a string and returns the longest word
function LongestWord(sen) { 
  var arr = sen.match(/[a-z0-9]+/gi);
   
   var sort = arr.sort(function(a,b) {
       return b.length - a.length;
   })
   
         return sort[0]
}
   
// keep this function call here 
LongestWord(readline());                            


