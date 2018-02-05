function range (start,end, step){
	var arr = [];

	if (start > end || start == undefined || end == undefined || step == undefined || step < 1) {
		return arr;
	} else {
		for (var i = start; i <= end; i+= step){
			arr.push (i);
		}
	}
	return arr;
}



console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));