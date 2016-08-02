/* global describe, expect, Gso, it */
describe('Gso.MathLib.BinaryVector', function () {
  it('has element values', function () {
    // Create new BinaryVector
    var bv = new Gso.MathLib.BinaryVector()
    var elements = [0, 1, 1, 1, 0]
    var elementsOne = [1, 0, 0, 0, 0]
    var bvOne = Gso.MathLib.BinaryVector.newOne(elementsOne)
    bv.setElements(elements)
    bv.setElement(1, 1)

    expect(bv).to.be.ok
    expect(bv.elements.length).to.equal(5)
    expect(bv.elements[0]).to.equal(1)
    expect(bv.element(5)).to.equal(0)
    expect(bv.indexOf(0)).to.equal(5)
    expect(bvOne).to.be.ok
    expect(bvOne.elements.length).to.equal(5)
    expect(bvOne.elements[0]).to.equal(1)
    expect(bvOne.element(5)).to.equal(0)
    expect(bvOne.indexOf(1)).to.equal(1)
  })

  it('creates a zero filled vector', function () {
    // Create new BinaryVector
    var bvZ = new Gso.MathLib.BinaryVector.zero(6)
    expect(bvZ).to.be.ok
    expect(bvZ.elements.length).to.equal(6)
    expect(bvZ.elements[0]).to.equal(0)
    expect(bvZ.element(5)).to.equal(0)
    expect(bvZ.indexOf(0)).to.equal(1)
  })

  it('creates a one filled vector', function () {
    // Create new BinaryVector
    var bvO = new Gso.MathLib.BinaryVector.one(6)
    expect(bvO).to.be.ok
    expect(bvO.elements.length).to.equal(6)
    expect(bvO.elements[0]).to.equal(1)
    expect(bvO.element(5)).to.equal(1)
    expect(bvO.indexOf(1)).to.equal(1)
  })
})
