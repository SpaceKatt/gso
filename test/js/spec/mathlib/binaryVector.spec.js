//binaryVector spec..
describe("Gso.MathLib.BinaryVector", function () {
  it("has element values", function () {
    // Create new BinaryVector
    var bv = new Gso.MathLib.BinaryVector();
    var elements = [0,1,1,1,0];
    bv.setElements(elements);
    bv.setElement(1,1);

    expect(bv).to.be.ok;
    expect(bv.elements.length).to.equal(5);
    expect(bv.elements[0]).to.equal(1);
    expect(bv.element(5)).to.equal(0);
    expect(bv.indexOf(0)).to.equal(5);

  });
});
