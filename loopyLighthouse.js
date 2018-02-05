function loopyLighthouse() {
	var arr = [];
	for (var i = 100; i <= 200; i++) {
		arr.push(i);
	}

	for (var i = 0; i < arr.length; i++){
		if ((arr[i] % 3 == 0) && (arr[i] % 4 == 0)) {
			arr[i] = "LoopyLighthouse";
		} else if (arr[i] % 3 == 0){
			arr[i] = "Loopy";
		} else if (arr[i] % 4 == 0) {
			arr[i] = "Lighthouse";
		}
	}
	return arr;
}

console.log(loopyLighthouse());
