describe("Gso.MathLib.BinaryVector", function () {
  it("has element values", function () {
    // Create new BinaryVector
    var bv = new Gso.MathLib.BinaryVector();
    var elements = [0,1,1,1,0];
    var elements_1 = [1,0,0,0,0];
    var bv_1 = Gso.MathLib.BinaryVector.newOne(elements_1);
    bv.setElements(elements);
    bv.setElement(1,1);

    expect(bv).to.be.ok;
    expect(bv.elements.length).to.equal(5);
    expect(bv.elements[0]).to.equal(1);
    expect(bv.element(5)).to.equal(0);
    expect(bv.indexOf(0)).to.equal(5);
    expect(bv_1).to.be.ok;
    expect(bv_1.elements.length).to.equal(5);
    expect(bv_1.elements[0]).to.equal(1);
    expect(bv_1.element(5)).to.equal(0);
    expect(bv_1.indexOf(1)).to.equal(1);

  });

  it("creates a zero filled vector", function () {
    // Create new BinaryVector
    var bv_z = new Gso.MathLib.BinaryVector.zero(6);
    expect(bv_z).to.be.ok;
    expect(bv_z.elements.length).to.equal(6);
    expect(bv_z.elements[0]).to.equal(0);
    expect(bv_z.element(5)).to.equal(0);
    expect(bv_z.indexOf(0)).to.equal(1);
  });

  it("creates a one filled vector", function () {
    // Create new BinaryVector
    var bv_o = new Gso.MathLib.BinaryVector.one(6);
    expect(bv_o).to.be.ok;
    expect(bv_o.elements.length).to.equal(6);
    expect(bv_o.elements[0]).to.equal(1);
    expect(bv_o.element(5)).to.equal(1);
    expect(bv_o.indexOf(1)).to.equal(1);
  });
});
