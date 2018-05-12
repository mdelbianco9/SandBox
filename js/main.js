
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

// Checks if number is a credit card number
function credCheck(n) {
var num = n;
var arry = num.toString().split('')
  if(arry.length == 16) {
  return true
  }else{
  return false
  console.log(arry.length);
  }
}

console.log(credCheck(3627272890897652));

function is_creditCard(str)
{
 regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_creditCard("378282246310006"));

console.log(is_creditCard("37828224630006"));


// Test if First letter of string is UpperCase
function upper_case(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("String's first character is uppercase");
    } 
    else
    {
      console.log("String's first character is not uppercase");
    }
}
upper_case('Abcd');
upper_case('abcd');

// Email Validation
function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
console.log("Valid email address!");  
}  
else  
{  
console.log("You have entered an invalid email address!");  
}
}

valid_email('me-info@example.com');

// Counts number of words in a string
function getNum(str){
  let splt = str.split(' ');
  console.log(splt.length);
};

getNum("hello this is a word")

function count_words()
{
str1= document.getElementById("InputText").value;
//exclude  start and end white-space
str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
//convert 2 or more spaces to 1  
str1 = str1.replace(/[ ]{2,}/gi," ");
// exclude newline with a start spacing  
str1 = str1.replace(/\n /,"\n");
document.getElementById("noofwords").value = str1.split(' ').length;
}


// Get Property from an object
function _keys(obj) 
 {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));













