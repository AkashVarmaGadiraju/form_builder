export function swapElements(arr: any[], index1: number, index2: number) {
	// Check if the indices are valid
	if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
		console.error("Invalid indices");
		return;
	}

	// Swap the elements
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
