/* global suite, expect, Gso, test, assert */
suite('Gso.MathLib.BinaryMatrix Factory methods', function () {
  test('Creates the Identity Matrix', function() {
    var idMatrix = new Gso.MathLib.BinaryMatrix.id(3)
    var expectedElements = [[1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]]
    expect(idMatrix.elements).to.deep.equal(expectedElements)

    var idMatrixTwo = Gso.MathLib.BinaryMatrix.id(3)
    expect(idMatrixTwo.elements).to.deep.equal(expectedElements)
  })

  test('Creates the Zero Matrix', function () {
    var zeroMatrix = new Gso.MathLib.BinaryMatrix.zero(3)
    var expectedElements = [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]
    expect(zeroMatrix.elements).to.deep.equal(expectedElements)

    var zeroMatrixTwo = Gso.MathLib.BinaryMatrix.zero(3)
    expect(zeroMatrixTwo.elements).to.deep.equal(expectedElements)
  })

  test('Creates the Universal Matrix', function () {
    var uniMatrix = new Gso.MathLib.BinaryMatrix.one(3)
    var expectedElements = [[1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]]
    expect(uniMatrix.elements).to.deep.equal(expectedElements)

    var uniMatrixTwo = Gso.MathLib.BinaryMatrix.one(3)
    expect(uniMatrixTwo.elements).to.deep.equal(expectedElements)
  })

  test('Creates a new matrix', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var expectedElements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var newMatrix = new Gso.MathLib.BinaryMatrix.newOne(elements)
    var newMatrixTwo = Gso.MathLib.BinaryMatrix.newOne(elements)

    expect(newMatrix.elements).to.deep.equal(expectedElements)
    expect(newMatrixTwo.elements).to.deep.equal(expectedElements)
  })
})

suite('Gso.MathLib.BinaryMatrix Operation methods', function () {
  test('Elements set correctly', function () {
    var matrix = new Gso.MathLib.BinaryMatrix()
    assert.strictEqual(matrix.elements, undefined, 'Elements do not exist yet')

    var newElements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    matrix.setElements(newElements)
    assert.deepEqual(matrix.elements, newElements, 'Elements set properly')
  })

  test('Row set correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    var newRow = [1, 1, 1]
    matrix.setRow(2, newRow)
    var expectedElements = [[1, 0, 1],
        [1, 1, 1],
        [1, 0, 1]]

    assert.deepEqual(matrix.elements, expectedElements)
  })

  test('Row retrieved correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    var expectedRow = [1, 0, 1]
    var actualRow = matrix.getRow(1)
    assert.deepEqual(actualRow, expectedRow)
  })

  test('Element set correctly', function () {
    var elements = [[0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    assert(matrix.elements[1][1] === 1)
    matrix.setElement(2, 2, 0)
    assert(matrix.elements[1][1] === 0)
  })

  test('Element retrieved correctly', function () {
    var elements = [[0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    var returnedElement = matrix.getElement(2, 2)
    assert(returnedElement === 1)
    assert(matrix.elements[1][1] === returnedElement)
  })

  test('Column set correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    var newCol = [1, 1, 1]
    matrix.setColumn(2, newCol)
    var expectedElements = [[1, 1, 1],
        [0, 1, 0],
        [1, 1, 1]]
    assert.deepEqual(matrix.elements, expectedElements)
  })

  test('Column retrieved correctly', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    var returnedCol = matrix.getColumn(2, 2)
    var expectedCol = [0, 1, 0]
    assert.deepEqual(returnedCol, expectedCol)
  })

  test('Number of rows correctly returned', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    var numOfRows = matrix.numberOfRows()
    assert.strictEqual(numOfRows, 3)
  })

  test('Number of Columns correctly returned', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    var numOfCols = matrix.numberOfColumns()
    assert.strictEqual(numOfCols, 3)
  })

  test('Duplicate matrix valid', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    var dupeMatrix = matrix.duplicateMatrix()
    assert.deepEqual(dupeMatrix.elements, matrix.elements)
  })

  test('Same size matrix detection valid', function () {
    var elements = [[1, 0, 1],
        [0, 1, 0],
        [1, 0, 1]]
    var matrix = Gso.MathLib.BinaryMatrix.newOne(elements)
    var idMatrix = Gso.MathLib.BinaryMatrix.id(3)
    assert.isOk(matrix.isSameSizeAs(idMatrix))
  })

  test('Functions Map properly', function () {
    assert(false)
  })

  test('Matrices add correctly', function () {
    assert(false)
  })

  test('Matrices subtract correctly', function () {
    assert(false)
  })

  test('Left Multiply valid', function () {
    assert(false)
  })

  test('Boolean multiplication valid', function () {
    assert(false)
  })

  test('Matrix view valid', function () {
    assert(false)
  })
})
