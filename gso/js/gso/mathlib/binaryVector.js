(function () {
  'use strict';

  Gso.MathLib.BinaryVector = function BinaryVector(){

    this.setElements = function(newElements) {
      this.elements = (newElements.elements || newElements).slice();

      return this;
    },

     this.setElement = function(position, value) {
      /* Think about adding a value check 0 or 1 only */
      if(position < 1|| position > this.elements.length) {
      /* eslint-disable */
      console.log('Element out of range, please enter valid element.');
      alert('Element out of range, please enter valid element.');
      /* eslint-enable */
      } else {
        this.elements[position-1] = value;
      }
    },

    this.element = function(position) {
      return (position < 1 || position > this.elements.length) ? null :
      this.elements[position-1];
    },

    this.indexOf = function(valueWanted) {
      var index = null;
      var n = this.elements.length;
      for (var i = 0; i < n; i++) {
        /* eslint-disable */
        if (index === null && this.elements[i] == valueWanted) {
        /* eslint-enable */
          index = i + 1;
        }
      }

      return index;
    },

    this.view = function() {
      return '[' + this.elements.join(', ') + ']';
    }


  },

  Gso.MathLib.BinaryVector.newOne = function(elements) {
    var bv = new Gso.MathLib.BinaryVector();

    return bv.setElements(elements);
  };

}());
