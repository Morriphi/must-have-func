var humanize = require("underscore.string/humanize");
var jspath = require('jspath');

function has(obj) {
  var properties = Array.prototype.slice.call(arguments, 1);
  properties.forEach(function(prop){
    var props = jspath.apply(`.${prop}`, obj);
    if(props.length === 0 || typeof props[0] !== 'function') {
      throw new Error(humanize(prop) + ' is a required function');
    }
  });
};

module.exports = has;
