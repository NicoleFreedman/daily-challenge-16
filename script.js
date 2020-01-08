// Write a function called reverseArray which accepts an array and returns the array with all values reversed.
// See if you can do this without creating a new array!

let reverseArray = (arr) => arr.reverse();

///////////////////////////////////////////////////////OR

let reverseArray2 = (arr) => {
	let reversedArray =[];
	for (let i = arr.length-1; i >= 0; i--) {
		reversedArray.push(arr[i]);
	}
	return reversedArray;
}
  


   reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
   reverseArray([1,2]) // [2,1]
   reverseArray([]) // []
   reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1]
