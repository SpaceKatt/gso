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
    var elements = [1, 0, 1, 0, 1]
    var vector = new Gso.MathLib.BinaryVector()
    vector.setElements(elements)
    var expectedElements = [1, 0, 1, 0, 1]
    assert.deepEqual(vector.elements, expectedElements)
  })

  test('Element set correctly', function () {
    var elements = [1, 1, 1, 1, 1]
    var vector = Gso.MathLib.BinaryVector.newOne(elements)
    vector.setElement(3, 0)
    var expectedElement = 0
    assert.deepEqual(vector.elements[2], expectedElement)
  })

  test('Element returned correctly', function () {
    var elements = [0, 0, 1, 0, 0]
    var vector = Gso.MathLib.BinaryVector.newOne(elements)
    var returnElem = vector.element(3)
    var expectedElement = 1
    assert.deepEqual(returnElem, expectedElement)
  })

  test('Index of element returned correctly', function () {
    var elements = [0, 0, 1, 0, 0]
    var vector = Gso.MathLib.BinaryVector.newOne(elements)
    var expectedIndex = 3
    assert.deepEqual(vector.indexOf(1), expectedIndex)
  })

  test('Vector view valid', function () {
    var elements = [0, 1, 0, 1]
    var vector = Gso.MathLib.BinaryVector.newOne(elements)
    var vectorView = "[0, 1, 0, 1]"
    assert.deepEqual(vector.view(), vectorView)
  })
})
