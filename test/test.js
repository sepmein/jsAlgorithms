var jsAlgorithms = require('../');
var assert = require('assert');

describe('sort', function() {
	describe('#insertion sort', function() {
		var unsortedArray = [6, 3, 5, 1, 2, 4, 12, 0, 3.14];
		var sortedArray = [0, 1, 2, 3, 3.14, 4, 5, 6, 12];
		it('numeric array should be sorted properly', function() {
			jsAlgorithms.insertionSort(unsortedArray, function(sa) {
				assert.deepEqual(sortedArray[1], sa[1]);
				assert.deepEqual(sortedArray[4], sa[4]);
				assert.deepEqual(sortedArray[3], sa[3]);
				assert.deepEqual(sortedArray[5], sa[5]);
				assert.deepEqual(sortedArray[0], sa[0]);
				assert.deepEqual(sortedArray[2], sa[2]);
			});
		});
	});
});