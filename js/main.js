
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

// Sorts 3 numbers
function sorter(a,b,c) {
  var arr = [a,b,c];
  arr.sort(function(a,b) {
    return b-a
  })
  return arr
};
console.log(sorter(13,-40,9));


// Checks if [i] is even or odd
function sorter() {
  for(i=0; i<=15; i++) {
   if([i]%2){
    console.log([i] + " is " + "even");
   }else{
     console.log([i] + " is " + "odd");
   }
  }
};


console.log(sorter());


// Assigns grades to scores
var names = [
  {
    name: "David",
    mark: 80
  },
  {
    name: "Vinoth",
    mark: 77
  },
  {
    name: "Divya",
    mark: 88
  },
  {
    name: "Ishitha",
    mark: 95
  },
  {
    name: "Thomas",
    mark: 68
  }
]; 

function computeGrades() {
  for(i=0; i<=names.length; i++){
    if(names[i].mark < 60) {
      console.log(names[i].name + "Gets an F");
    }else if(names[i].mark < 70 && names[i].mark > 59){
      console.log(names[i].name + "gets a D");
    }else if(names[i].mark < 80 && names[i].mark > 69 ){
      console.log(names[i].name + "gets a C");
    }else if(names[i].mark < 90 && names[i].mark > 79){
      console.log(names[i].name + "gets a B");
    }else if(names[i].mark < 100 && names[i].mark > 89){
      console.log(names[i].name + "gets an A");
    }
      
      }
    
};

console.log(computeGrades());


// Adds words for numbers if condition is met

function fizbuz() {
  for(i=0; i<=100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
    console.log(i+"FizzBuzz");
    }else if(i % 3 === 0) {
      console.log('Fizz');
    }else if(i % 5 === 0) {
      console.log("Buzz");
    }else{
    console.log(i);
    }
  
  }
};

// Calculates an Armstrong Number
/* if the number is an armstrong number, Print "Its an A num" */

/* If its not an arm sum then print "not arm num" */

/* Take the number, separate each number, then run the calculation */

function armNum(a) {
  var b = a;
  var num = a.toString().split("");
  var digits = num.map(Number);
  
  var one = Math.pow(digits[0], 3);
  var two = Math.pow(digits[1], 3);
  var three = Math.pow(digits[2], 3);
  
  if(one + two + three === b) {
    console.log(b + " is an Armstrong Number")
  }else{
  console.log(b + " Is NOT an Armstrong Number")
  }
  
};

armNum(371);


