var num = 100;
var  foo = function () {
	var num = num +1 ;//undefined + 1 = NaN
	return num;
}
console.log(foo());//NaN