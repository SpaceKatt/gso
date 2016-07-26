describe("Gso.MathLib.BinaryMatrix", function () {
  it("has elements values", function () {
    // Create new BinaryMatrix
    var bm = new Gso.MathLib.BinaryMatrix();
    var bm_1 = new Gso.MathLib.BinaryMatrix();
    var elements = [[0,1,1],[1,0,0],[1,1,1]];
    var row = [0,0,0];
    var column = [1,1,1];
    bm.setElements(elements);
    bm_1.setElements(elements);
    bm.setElement(3,3,0);
    bm.setRow(3, row);
    var row_1 = bm.getRow(3);
    bm.setColumn(1, column);
    var column_1 = bm.getColumn(3);
    var dup = bm.duplicateMatrix();


    expect(bm).to.be.ok;
    expect(bm.elements.length).to.equal(3);
    expect(bm.elements[0][0]).to.equal(1);
    expect(bm.elements[2][2]).to.equal(0);
    expect(bm.getElement(1,1)).to.equal(1);
    expect(bm.getElement(1,2)).to.equal(1);
    expect(bm.elements[2][0]).to.equal(1);
    expect(row_1[0]).to.equal(1);
    expect(column_1[2]).to.equal(0);
    expect(bm.numberOfRows()).to.equal(3);
    expect(bm.numberOfColumns()).to.equal(3);
    expect(bm.isSameSizeAs(bm_1)).to.be.ok;
    expect(dup).to.be.ok;
    expect(dup.elements.length).to.equal(3);
    expect(dup.elements[0][0]).to.equal(1);
    expect(dup.elements[2][2]).to.equal(0);
    expect(dup.getElement(1,1)).to.equal(1);
    expect(dup.getElement(1,2)).to.equal(1);
  });

  it("can map functions", function () {
    var bm_a = new Gso.MathLib.BinaryMatrix();
    var bm_a1 = new Gso.MathLib.BinaryMatrix();
    var elements = [[0,1,1,1],[1,0,0,0],[1,1,1,0],[0,0,0,0]];
    bm_a.setElements(elements);
    var result = bm_a.mapProcess(function(x)
    {
      return x;
    });
    expect(result).to.be.ok;
    expect(result.elements.length).to.equal(4);
    expect(result.elements[0][0]).to.equal(0);
    expect(result.elements[2][2]).to.equal(1);
    bm_a1.setElements(elements);
    var result_1 = bm_a1.mapProcess(function(x)
    {
      return x * 2;
    });
    expect(result_1).to.be.ok;
    expect(result_1.elements.length).to.equal(4);
    expect(result_1.elements[0][0]).to.equal(0);
    expect(result_1.elements[2][2]).to.equal(2);
  });

  it("can add matrices", function () {
    var bm_b = new Gso.MathLib.BinaryMatrix();
    var bm_b1 = new Gso.MathLib.BinaryMatrix();
    var elements = [[0,1,1,1],[1,0,0,0],[1,1,1,0],[1,0,0,0]];
    var elements_1 = [[0,1,0,1],[1,0,1,0],[1,0,1,0],[0,0,1,0]];
    bm_b.setElements(elements);
    bm_b1.setElements(elements_1);
    var result_2 = bm_b.add(bm_b1);
    expect(result_2).to.be.ok;
    expect(result_2.elements.length).to.equal(4);
    expect(result_2.elements[0][1]).to.equal(2);
    expect(result_2.elements[2][2]).to.equal(2);
  });

  it("can subtract matrices", function () {
    var bm_c = new Gso.MathLib.BinaryMatrix();
    var bm_c1 = new Gso.MathLib.BinaryMatrix();
    var elements = [[0,1,1,1],[1,0,0,0],[1,1,1,0],[1,0,0,0]];
    var elements_1 = [[0,1,0,1],[1,0,1,0],[1,0,1,0],[0,0,1,0]];
    bm_c.setElements(elements);
    bm_c1.setElements(elements_1);
    var result_3 = bm_c.subtract(bm_c1);
    expect(result_3).to.be.ok;
    expect(result_3.elements.length).to.equal(4);
    expect(result_3.elements[0][1]).to.equal(0);
    expect(result_3.elements[2][2]).to.equal(0);
  });

  it("can leftMultiply matrices", function () {
    var bm_d = new Gso.MathLib.BinaryMatrix();
    var bm_d1 = new Gso.MathLib.BinaryMatrix();
    var bm_d2 = new Gso.MathLib.BinaryMatrix();
    var elements = [[0,1,1,1],[1,0,0,0],[1,1,1,0],[1,0,0,0]];
    var elements_1 = [[0,1,0,1],[1,0,1,0],[1,0,1,0],[0,0,1,0]];
    var elements_2 = [[0,1,0],[1,0,1],[1,0,1]];
    bm_d.setElements(elements);
    bm_d1.setElements(elements_1);
    bm_d2.setElements(elements_2);
    var result_4 = bm_d.leftMultiply(bm_d1);
    expect(result_4).to.be.ok;
    var result_5 = bm_d2.leftMultiply(bm_d1);
    expect(result_5).to.not.be.ok;
  });

  it("can boolMultiply matrices", function () {
    var bm_e = new Gso.MathLib.BinaryMatrix();
    var bm_e1 = new Gso.MathLib.BinaryMatrix();
    var bm_e2 = new Gso.MathLib.BinaryMatrix();
    var elements = [[0,1,1,1],[1,0,0,0],[1,1,1,0],[1,0,0,0]];
    var elements_1 = [[0,1,0,1],[1,0,1,0],[1,0,1,0],[0,0,1,0]];
    var elements_2 = [[0,1,0],[1,0,1],[1,0,1]];
    bm_e.setElements(elements);
    bm_e1.setElements(elements_1);
    bm_e2.setElements(elements_2);
    var result_6 = bm_e.boolMultiply(bm_e1);
    expect(result_6).to.be.ok;
    var result_7 = bm_e2.boolMultiply(bm_e1);
    expect(result_7).to.not.be.ok;
  });

  it("can display matrices for viewing", function () {
    var bm_f = new Gso.MathLib.BinaryMatrix();
    var bm_f1 = new Gso.MathLib.BinaryMatrix();
    var bm_f2 = new Gso.MathLib.BinaryMatrix();
    var elements = [[0,1,1,1],[1,0,0,0],[1,1,1,0],[1,0,0,0]];
    var elements_1 = [[0,1,0,1],[1,0,1,0],[1,0,1,0],[0,0,1,0]];
    var elements_2 = [[0,1,0],[1,0,1],[1,0,1]];
    bm_f.setElements(elements);
    bm_f1.setElements(elements_1);
    bm_f2.setElements(elements_2);
    var result_8 = bm_f.matrixView();
    expect(result_8).to.be.ok;
    expect(result_8).to.equal('[0, 1, 1, 1]<br>[1, 0, 0, 0]<br>[1, 1, 1, 0]<br>[1, 0, 0, 0]');
    var result_9 = bm_f1.matrixView();
    expect(result_9).to.be.ok;
    expect(result_9).to.equal('[0, 1, 0, 1]<br>[1, 0, 1, 0]<br>[1, 0, 1, 0]<br>[0, 0, 1, 0]');
  });

  it("can generate zero filled matrices", function () {
    var bm_z = new Gso.MathLib.BinaryMatrix.zero(6);
    expect(bm_z).to.be.ok;
    expect(bm_z.elements.length).to.equal(6);
    expect(bm_z.elements[0].length).to.equal(6);
    expect(bm_z.elements[0][1]).to.equal(0);
    expect(bm_z.elements[2][2]).to.equal(0);
    expect(bm_z.elements[5][1]).to.equal(0);
    expect(bm_z.elements[5][5]).to.equal(0);
    expect(bm_z.elements[4][3]).to.equal(0);
    expect(bm_z.elements[0][0]).to.equal(0);
  });

  it("can generate one filled matrices", function () {
    var bm_o = new Gso.MathLib.BinaryMatrix.one(6);
    expect(bm_o).to.be.ok;
    expect(bm_o.elements.length).to.equal(6);
    expect(bm_o.elements[0].length).to.equal(6);
    expect(bm_o.elements[0][1]).to.equal(1);
    expect(bm_o.elements[2][2]).to.equal(1);
    expect(bm_o.elements[5][1]).to.equal(1);
    expect(bm_o.elements[5][5]).to.equal(1);
    expect(bm_o.elements[4][3]).to.equal(1);
    expect(bm_o.elements[0][0]).to.equal(1);
  });

  it("can generate an id matrix", function () {
    var bm_i = new Gso.MathLib.BinaryMatrix.id(6);
    expect(bm_i).to.be.ok;
    expect(bm_i.elements.length).to.equal(6);
    expect(bm_i.elements[0].length).to.equal(6);
    expect(bm_i.elements[0][1]).to.equal(0);
    expect(bm_i.elements[2][2]).to.equal(1);
    expect(bm_i.elements[5][1]).to.equal(0);
    expect(bm_i.elements[5][5]).to.equal(1);
    expect(bm_i.elements[4][3]).to.equal(0);
    expect(bm_i.elements[0][0]).to.equal(1);
  });
});
