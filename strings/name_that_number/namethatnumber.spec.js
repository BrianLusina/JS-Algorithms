const NameNumber = require('./namethatnumber')

test('test 1, Zero', () => {
  const name = new NameNumber()
  expect(name.nameThatNumber(0)).toEqual('zero')
})

test('test 2, Four', () => {
  const name = new NameNumber()
  expect(name.nameThatNumber(4)).toEqual('four')
})

test('test 3, Nine', () => {
  const name = new NameNumber()
  expect(name.nameThatNumber(9)).toEqual('nine')
})

test('test 23', () => {
  const name = new NameNumber()
  expect(name.nameThatNumber(23)).toEqual('twenty three')
})

test('test 40', () => {
  const name = new NameNumber()
  expect(name.nameThatNumber(40)).toEqual('forty')
})
