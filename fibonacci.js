describe('getFibonacciUntil() function', (n) => {
if (n==1){
	return '0,1'
}
else {
var fibonacci = getFibonacciUntil(n-1);
fibonacci.push(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2] );
return fibonacci;
}
};