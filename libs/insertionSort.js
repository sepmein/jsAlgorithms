module.exports = function insertionSort(A, cb) {
	for (var j = 1; j < A.length ; j++) {
		var key = A[j];
		//Insert A[j] into the sorted sequence A[1..j-1].
		var i = j - 1;
		while (i >= 0 && A[i] > key) {
			A[i + 1] = A[i];
			i --;
		}
		A[i + 1] = key;
	}
	cb(A);
}