// run `node index.js` in the terminal
'use strict';

const testVar = require('./testVariable.js');
const testFun = require('./testFunc.js');
const testArray = require('./testArray.js');

testVar.Test_Var();
//testVar.TestTypes();

let value1 = testFun.multiply3(40, 50);
console.log('mutiply = ' + value1);
