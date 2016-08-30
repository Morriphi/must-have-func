var expect = require('chai').expect;
var has = require ('../index.js');

describe('has', function(){
  it('ignores no mandated functions', function(){
    has({});
  });

  it('ignores provided mandated functions', function(){
    has({'propertyOne': () => {},
        'propertyTwo': () => {}},
        'propertyOne', 'propertyTwo');
  });

  it('mandates functions', function(){
    expect(function(){
      has({}, "func");
    }).to.throw(Error, "Func is a required function");

    expect(function(){
      has({func: ""}, "func");
    }).to.throw(Error, "Func is a required function");
  });

  it('mandates first function only', function(){
    expect(function(){
      has({}, "funcOne", "funcTwo");
    }).to.throw(Error, "Func one is a required function");
  });

  it('humaizes function name', function() {
    expect(function(){
      has({}, "functionName");
    }).to.throw(Error, "Function name is a required function");

    expect(function(){
      has({}, "function_name");
    }).to.throw(Error, "Function name is a required function");
  });

  describe('nested functions', function() {
    it('are mandated', function() {
      expect(function(){
        has({}, "obj.property.function");
      }).to.throw("Obj.property.function is a required function");

      expect(function(){
        has({}, "obj.property.item.function");
      }).to.throw("Obj.property.item.function is a required function");

      expect(function(){
        has({}, "obj.this.is.a.deeply.nested.function");
      }).to.throw("Obj.this.is.a.deeply.nested.function is a required function");
    });

    it('are ignored if provided', function() {
      has({obj: {
        property: {
          item: {
            func: () => {}
          }
        }
      }}, "obj.property.item.func");
    });
  });
});
