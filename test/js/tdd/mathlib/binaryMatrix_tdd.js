/* global describe, expect, Gso, it */
suite('Gso.MathLib.BinaryMatrix', function () {
  test('Creates the Identity Matrix', function() {
    var idMatrix = new Gso.MathLib.BinaryMatrix.id(3)
    var expectedElements = [[1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]]
    expect(idMatrix.elements).to.deep.equal(expectedElements)
  })

  test('Creates a zero Matrix', function () {
    var zeroMatrix = new Gso.MathLib.BinaryMatrix.zero(3)
    var expectedElements = [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]
        expect(zeroMatrix.elements).to.deep.equal(expectedElements)
  })
})
