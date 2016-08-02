/* global describe, expect, Gso, it */
describe('Gso.MathLib.BinaryMatrix', function () {
  it('has elements values', function () {
    // Create new BinaryMatrix
    var bm = new Gso.MathLib.BinaryMatrix()
    var bmOne = new Gso.MathLib.BinaryMatrix()
    var elements = [[0, 1, 1], [1, 0, 0], [1, 1, 1]]
    var row = [0, 0, 0]
    var column = [1, 1, 1]
    bm.setElements(elements)
    bmOne.setElements(elements)
    bm.setElement(3, 3, 0)
    bm.setRow(3, row)
    var rowOne = bm.getRow(3)
    bm.setColumn(1, column)
    var columnOne = bm.getColumn(3)
    var dup = bm.duplicateMatrix()

    expect(bm).to.be.ok
    expect(bm.elements.length).to.equal(3)
    expect(bm.elements[0][0]).to.equal(1)
    expect(bm.elements[2][2]).to.equal(0)
    expect(bm.getElement(1, 1)).to.equal(1)
    expect(bm.getElement(1, 2)).to.equal(1)
    expect(bm.elements[2][0]).to.equal(1)
    expect(rowOne[0]).to.equal(1)
    expect(columnOne[2]).to.equal(0)
    expect(bm.numberOfRows()).to.equal(3)
    expect(bm.numberOfColumns()).to.equal(3)
    expect(bm.isSameSizeAs(bmOne)).to.be.ok
    expect(dup).to.be.ok
    expect(dup.elements.length).to.equal(3)
    expect(dup.elements[0][0]).to.equal(1)
    expect(dup.elements[2][2]).to.equal(0)
    expect(dup.getElement(1, 1)).to.equal(1)
    expect(dup.getElement(1, 2)).to.equal(1)
  })

  it('can map functions', function () {
    var bmA = new Gso.MathLib.BinaryMatrix()
    var bmA1 = new Gso.MathLib.BinaryMatrix()
    var elements = [[0, 1, 1, 1], [1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0]]
    bmA.setElements(elements)
    var result = bmA.mapProcess(function (x) {
      return x
    })
    expect(result).to.be.ok
    expect(result.elements.length).to.equal(4)
    expect(result.elements[0][0]).to.equal(0)
    expect(result.elements[2][2]).to.equal(1)
    bmA1.setElements(elements)
    var resultOne = bmA1.mapProcess(function (x) {
      return x * 2
    })
    expect(resultOne).to.be.ok
    expect(resultOne.elements.length).to.equal(4)
    expect(resultOne.elements[0][0]).to.equal(0)
    expect(resultOne.elements[2][2]).to.equal(2)
  })

  it('can add matrices', function () {
    var bmB = new Gso.MathLib.BinaryMatrix()
    var bmB1 = new Gso.MathLib.BinaryMatrix()
    var elements = [[0, 1, 1, 1], [1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0]]
    var elementsOne = [[0, 1, 0, 1], [1, 0, 1, 0], [1, 0, 1, 0], [0, 0, 1, 0]]
    bmB.setElements(elements)
    bmB1.setElements(elementsOne)
    var resultTwo = bmB.add(bmB1)
    expect(resultTwo).to.be.ok
    expect(resultTwo.elements.length).to.equal(4)
    expect(resultTwo.elements[0][1]).to.equal(2)
    expect(resultTwo.elements[2][2]).to.equal(2)
  })

  it('can subtract matrices', function () {
    var bmC = new Gso.MathLib.BinaryMatrix()
    var bmC1 = new Gso.MathLib.BinaryMatrix()
    var elements = [[0, 1, 1, 1], [1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0]]
    var elementsOne = [[0, 1, 0, 1], [1, 0, 1, 0], [1, 0, 1, 0], [0, 0, 1, 0]]
    bmC.setElements(elements)
    bmC1.setElements(elementsOne)
    var resultThree = bmC.subtract(bmC1)
    expect(resultThree).to.be.ok
    expect(resultThree.elements.length).to.equal(4)
    expect(resultThree.elements[0][1]).to.equal(0)
    expect(resultThree.elements[2][2]).to.equal(0)
  })

  it('can leftMultiply matrices', function () {
    var bmD = new Gso.MathLib.BinaryMatrix()
    var bmD1 = new Gso.MathLib.BinaryMatrix()
    var bmD2 = new Gso.MathLib.BinaryMatrix()
    var elements = [[0, 1, 1, 1], [1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0]]
    var elementsOne = [[0, 1, 0, 1], [1, 0, 1, 0], [1, 0, 1, 0], [0, 0, 1, 0]]
    var elementsTwo = [[0, 1, 0], [1, 0, 1], [1, 0, 1]]
    bmD.setElements(elements)
    bmD1.setElements(elementsOne)
    bmD2.setElements(elementsTwo)
    var resultFour = bmD.leftMultiply(bmD1)
    expect(resultFour).to.be.ok
    var resultFive = bmD2.leftMultiply(bmD1)
    expect(resultFive).to.not.be.ok
  })

  it('can boolMultiply matrices', function () {
    var bmE = new Gso.MathLib.BinaryMatrix()
    var bmE1 = new Gso.MathLib.BinaryMatrix()
    var bmE2 = new Gso.MathLib.BinaryMatrix()
    var elements = [[0, 1, 1, 1], [1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0]]
    var elementsOne = [[0, 1, 0, 1], [1, 0, 1, 0], [1, 0, 1, 0], [0, 0, 1, 0]]
    var elementsTwo = [[0, 1, 0], [1, 0, 1], [1, 0, 1]]
    bmE.setElements(elements)
    bmE1.setElements(elementsOne)
    bmE2.setElements(elementsTwo)
    var resultSix = bmE.boolMultiply(bmE1)
    expect(resultSix).to.be.ok
    var resultSeven = bmE2.boolMultiply(bmE1)
    expect(resultSeven).to.not.be.ok
  })

  it('can display matrices for viewing', function () {
    var bmF = new Gso.MathLib.BinaryMatrix()
    var bmF1 = new Gso.MathLib.BinaryMatrix()
    var bmF2 = new Gso.MathLib.BinaryMatrix()
    var elements = [[0, 1, 1, 1], [1, 0, 0, 0], [1, 1, 1, 0], [1, 0, 0, 0]]
    var elementsOne = [[0, 1, 0, 1], [1, 0, 1, 0], [1, 0, 1, 0], [0, 0, 1, 0]]
    var elementsTwo = [[0, 1, 0], [1, 0, 1], [1, 0, 1]]
    bmF.setElements(elements)
    bmF1.setElements(elementsOne)
    bmF2.setElements(elementsTwo)
    var resultEight = bmF.matrixView()
    expect(resultEight).to.be.ok
    expect(resultEight).to.equal('[0, 1, 1, 1]<br>[1, 0, 0, 0]<br>[1, 1, 1, 0]<br>[1, 0, 0, 0]')
    var resultNine = bmF1.matrixView()
    expect(resultNine).to.be.ok
    expect(resultNine).to.equal('[0, 1, 0, 1]<br>[1, 0, 1, 0]<br>[1, 0, 1, 0]<br>[0, 0, 1, 0]')
  })

  it('can generate zero filled matrices', function () {
    var bmZ = new Gso.MathLib.BinaryMatrix.zero(6)
    expect(bmZ).to.be.ok
    expect(bmZ.elements.length).to.equal(6)
    expect(bmZ.elements[0].length).to.equal(6)
    expect(bmZ.elements[0][1]).to.equal(0)
    expect(bmZ.elements[2][2]).to.equal(0)
    expect(bmZ.elements[5][1]).to.equal(0)
    expect(bmZ.elements[5][5]).to.equal(0)
    expect(bmZ.elements[4][3]).to.equal(0)
    expect(bmZ.elements[0][0]).to.equal(0)
  })

  it('can generate one filled matrices', function () {
    var bmO = new Gso.MathLib.BinaryMatrix.one(6)
    expect(bmO).to.be.ok
    expect(bmO.elements.length).to.equal(6)
    expect(bmO.elements[0].length).to.equal(6)
    expect(bmO.elements[0][1]).to.equal(1)
    expect(bmO.elements[2][2]).to.equal(1)
    expect(bmO.elements[5][1]).to.equal(1)
    expect(bmO.elements[5][5]).to.equal(1)
    expect(bmO.elements[4][3]).to.equal(1)
    expect(bmO.elements[0][0]).to.equal(1)
  })

  it('can generate an id matrix', function () {
    var bmI = new Gso.MathLib.BinaryMatrix.id(6)
    expect(bmI).to.be.ok
    expect(bmI.elements.length).to.equal(6)
    expect(bmI.elements[0].length).to.equal(6)
    expect(bmI.elements[0][1]).to.equal(0)
    expect(bmI.elements[2][2]).to.equal(1)
    expect(bmI.elements[5][1]).to.equal(0)
    expect(bmI.elements[5][5]).to.equal(1)
    expect(bmI.elements[4][3]).to.equal(0)
    expect(bmI.elements[0][0]).to.equal(1)
  })
})
