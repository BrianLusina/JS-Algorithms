const SumArray = require('./sumArray')

test('Test 1', () => {
  const s = new SumArray()
  expect(s.sumArray([6, 2, 1, 8, 10])).toEqual(16)
})

test('Test 2', () => {
  const s = new SumArray()
  expect(s.sumArray([6])).toEqual(0)
})

test('Test 3', () => {
  const s = new SumArray()
  expect(s.sumArray(null)).toEqual(0)
})

test('Test 4', () => {
  const s = new SumArray()
  expect(s.sumArray([])).toEqual(0)
})
