console.log("javascript is working");
//Part 1
//1. A parameter is a variable declared as one of the inputs of the function,
//an argument is the actual value the function recieves.

//2. A return will return the value specified to whatever called the function,
//and terminate the function. A console log just logs something to the console and nothing else.

//3. You can call a function where a value should go and the expression will evaluate
//with the value the function returns in that place. This can even be inside a call to another function.

//Part 2
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

 //Part 3

const sum_digits = (number) => {
	let sum_of_digits = 0;
	const digits = (number.toString()).split('');
	for (i = 0; i < digits.length;i++){
		sum_of_digits += Number(digits[i]);
	}
	return sum_of_digits;
}
console.log(sum_digits(123));
//Part 4
const calculate_side = (side_a,side_b) => {
	return Math.sqrt(side_a*side_a + side_b*side_b);
}
console.log(calculate_side(3,4))

//Part 5
const sum_array = (array) => {
	sum = 0;
	for(i=0;i<array.length;i++){
		sum += array[i];
	}
	return sum;
}
console.log(sum_array([1,2,3]));

//Part 6
const check_prime = (number) => {
	for(i = 2; i <= Math.sqrt(number); i++){
		if (number%i == 0){
			return false;
		}
	}
	return true;
}
console.log(check_prime(7));
console.log(check_prime(8));
