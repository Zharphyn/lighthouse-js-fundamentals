function range(start,finish, step){
  var arr = [];
  
  if (step == undefined) {
    step = 1
  }
  
  if (step > 0) {
  	for (var i = start; i <= finish; i += step) {
    	arr.push(i);
  	}
  } else if (step < 0) {
    for (var i = start; i >= finish; i += step) {
    	arr.push(i);
    }
  } else {
    arr.push(start);
    arr.push(finish);
  }
  return arr;
}

function sum(numbers){
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55