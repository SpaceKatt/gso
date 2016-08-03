/* global suite, expect, Gso, test, assert */
suite('Gso.MathLib.BinaryVector Factory methods', function () {
  test('Create new vector', function () {
    var elements = [1, 0, 0, 1, 1]
    var vector = Gso.MathLib.BinaryVector.newOne(elements)
    var elementsExpected = [1, 0, 0, 1, 1]
    assert.deepEqual(vector.elements, elementsExpected)
  })

  test('Create zero vector', function () {
    var zeroVector = Gso.MathLib.BinaryVector.zero(4)
    var expectedElements = [0, 0, 0, 0]
    assert.deepEqual(zeroVector.elements, expectedElements)
  })

  test('Create vector with all ones', function () {
    var onesVector = Gso.MathLib.BinaryVector.one(5)
    var expectedElements = [1, 1, 1, 1, 1]
    assert.deepEqual(onesVector.elements, expectedElements)
  })
})

suite('Gso.MathLib.BinaryVector Operation methods', function () {
  test('Elements set correctly', function () {
    assert(false)
  })

  test('Element set correctly', function () {
    assert(false)
  })

  test('Element returned correctly', function () {
    assert(false)
  })

  test('Index of element returned correctly', function () {
    assert(false)
  })

  test('Vector view valid', function () {
    assert(false)
  })
})
