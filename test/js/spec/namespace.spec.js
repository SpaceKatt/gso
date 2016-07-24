describe("Namespace", function () {
  it("provides the 'Gso' object", function () {
    // Expect exists and is an object.
    expect(Gso).to.be.an("object");

    // Expect all namespace properties are present.
    expect(Gso).to.include.keys(
      "Config", "Collections", "Models",
      "Routers", "Templates", "Views", "MathLib"
    );
  });

  it("provides the 'gso' object", function () {
    expect(gso).to.be.an("object");
  });
});
