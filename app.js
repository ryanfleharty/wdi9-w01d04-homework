//Q1.1. A paramater is the variable that is declared in a function definition/expression. Arguments are passed when the function is called
//
//Q1.2. return is the value that the function will be evaluated to when it is invoked. A console.log() call simply prints out a value to the console/terminal
//
//Q1.3. When a function is called it will be evaluated and a value will be returned, so when you call the function it will evaluate to some value 
//

//Q2. Palindrome

	const isPal = (str) => {
		str = str.toLowerCase();
		return checkPal(str, 0, str.length-1);
	}	

	const checkPal = (str, forward, backward) =>{
		if ( forward === backward){
			console.log('true');
			return true;
		}
		if((str.charAt(forward)) !== (str.charAt(backward))){
			console.log('false');
			return false;
		}
		if(forward < backward + 1){
			console.log('checking');
			return checkPal(str,forward+1,backward-1);
		}
		console.log('true');
		return true;
	}

	isPal('radar')
	isPal('RAdar');
	isPal('Dog');

//Q3. Digit 
