function getFizzBuzzUntil (n){
	var FizzedBuzzed = "";
	for (var i = 1; i<=n; i++){
		if (i % 3 == 0 && i % 5 == 0){
			FizzedBuzzed += 'FizzBuzz' ;
		} 
		else if (i % 3 == 0){
			FizzedBuzzed += 'Fizz' ;
		}

		else if (i % 5 == 0){
			FizzedBuzzed += 'Buzz' ; 
		}

		else{
			FizzedBuzzed += i + ' ';
		}
	}
	return FizzedBuzzed;
}
