var primeFactors = require('../../src/math_numbers/Primes/PrimeFactors/primefactors.js');

test('primeFactors', function () {
	test('returns an empty array for 1', function () {
		expect(primeFactors.for(1)).toEqual([]);
	});

	test('factors 2', function () {
		expect(primeFactors.for(2)).toEqual([2]);
	});

	test('factors 3', function () {
		expect(primeFactors.for(3)).toEqual([3]);
	});

	test('factors 4', function () {
		expect(primeFactors.for(4)).toEqual([2, 2]);
	});

	test('factors 6', function () {
		expect(primeFactors.for(6)).toEqual([2, 3]);
	});

	test('factors 8', function () {
		expect(primeFactors.for(8)).toEqual([2, 2, 2]);
	});

	test('factors 9', function () {
		expect(primeFactors.for(9)).toEqual([3, 3]);
	});

	test('factors 27', function () {
		expect(primeFactors.for(27)).toEqual([3, 3, 3]);
	});

	test('factors 625', function () {
		expect(primeFactors.for(625)).toEqual([5, 5, 5, 5]);
	});

	test('factors 901255', function () {
		expect(primeFactors.for(901255)).toEqual([5, 17, 23, 461]);
	});

	test('factors 93819012551', function () {
		expect(primeFactors.for(93819012551)).toEqual([11, 9539, 894119]);
	});
});
