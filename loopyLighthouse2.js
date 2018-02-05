function loopyLighthouse(range, searchNumbers, funWords) {
	var arr = [];
	for (var i = range[0]; i <= range[1]; i++) {
		arr.push(i);
	}

	for (var i = 0; i < arr.length; i++){
		if ((arr[i] % searchNumbers[0] == 0) && (arr[i] % searchNumbers[1] == 0)) {
			arr[i] = funWords[0] + funWords[1];
		} else if (arr[i] % searchNumbers[0] == 0){
			arr[i] = funWords[0];
		} else if (arr[i] % searchNumbers[1] == 0) {
			arr[i] = funWords[1];
		}
	}
	return arr;
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
