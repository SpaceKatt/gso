// binaryMatrix.spec...
describe("Gso.MathLib.BinaryMatrix", function () {
  it("has elements values", function () {
    // Create new BinaryMatrix
    var bm = new Gso.MathLib.BinaryMatrix();
    var elements = [[0,1,1],[1,0,0],[1,1,1]];
    bm.setElements(elements);
    bm.setElement(3,3,0);

    expect(bm).to.be.ok;
    expect(bm.elements.length).to.equal(3);
    expect(bm.elements[0][0]).to.equal(0);
    expect(bm.elements[2][2]).to.equal(0);
    expect(bm.getElement(1,1)).to.equal(0);
    expect(bm.getElement(1,2)).to.equal(1);

  });
});
