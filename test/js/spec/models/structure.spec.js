/* global describe, expect, Gso, it, gso */
describe('Gso.Models.Structure', function () {
  it('has default values', function () {
    // Create empty note model.
    var model = new Gso.Models.Structure()

    expect(model).to.be.ok
    expect(model.get('title')).to.equal('')
    expect(model.get('text')).to.equal('*Edit your note!*')
    expect(model.get('createdAt')).to.be.a('Date')
  })

  it('sets passed attributes', function () {
    var model = new Gso.Models.Structure({
      title: 'Grocery List',
      text: '* Milk\n* Eggs\n*Coffee'
    })

    expect(model.get('title')).to.equal('Grocery List')
    expect(model.get('text')).to.equal('* Milk\n* Eggs\n*Coffee')
  })
})
