function sum(arr, target) {
    let map = new Map();
    for (var i = 0; i < arr.length-1; i++) {
    	let index = arr.indexOf(target-arr[i],i+1);
    	if (index != -1) {
    		return [i,index];
    	}
    }
}
console.log(sum([2, 7, 11, 15], 9))