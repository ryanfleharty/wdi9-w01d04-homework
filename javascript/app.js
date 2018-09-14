console.log("javascript is working");

//1. A parameter is a variable declared as one of the inputs of the function, 
//an argument is the actual value the function recieves.

//2. A return will return the value specified to whatever called the function,
//and terminate the function. A console log just logs something to the console and nothing else.

//3. You can call a function where a value should go and the expression will evaluate
//with the value the function returns in that place. This can even be inside a call to another function.
const check_palindrome = (word) => {
	if (word === word.split("").reverse().join("")) { 
		return true;
	}
	return false
}
//So there's no reverse string, but you can split it into 
//an array of its constituent characters and reverse that, then join them together.
//Since that's what I was about to do manually I don't feel too bad about looking up the
//methods to do that in one line, even if it *looks* like I'm using magic (to me) code.
console.log(check_palindrome("ada"))