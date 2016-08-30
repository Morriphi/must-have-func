must-have-func
===

## what?
A little module to mandate functions on an object. <br />
Will throw error if listed function is not present or is not a function.

## install

<code>npm install must-have-func --save</code>

## use

<code>var mustHave = require('must-have-func');</code><br />
<code>mustHave(myObject, "getName", "getEmail");</code><br />
<code>mustHave(myObject, "works.with.nested.functions.doSomething");</code>
