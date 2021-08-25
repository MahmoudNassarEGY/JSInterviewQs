function areParenthesesBalanced(paranhesesStr){
	let stack=[];

	let map = {
		'(':')'
	}

	for (var i = 0; i <paranhesesStr.length; ; i++) {
		if(paranhesesStr[i]=='('){
			stack.push(paranhesesStr[i]);
		} 
		else 
			var StrReverse = stack.pop();

			if (paranhesesStr[i] !== map[StrReverse]){
				return false;
			} 
		}
		if (stack.length !== 0){
			return false;
		}
		return true;
	}
