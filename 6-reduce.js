export function Reduce(array, reducer, initialValue) {
var Reduced = "";
for(var i = 0; i< array.length; i++){
	If (i.isNaN()==true){
		Reduced += i;
	}
	else {
		Reduced = array.join(' ');
	}
	return Reduced;
}
}
