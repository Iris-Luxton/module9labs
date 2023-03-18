//import { getSum , getMultiply } from './myFunctions.js';

const myfunc = require('./myFunctions')

let a = 20;
let b = 30;

let sumresult = myfunc.getSum(a, b);
console.log('sum of '+ a +' and '+ b + ' is : '+sumresult);

let mulresult = myfunc.getMultiply(a, b);
console.log('Multiplication of '+ a +' and '+ b + ' is : '+mulresult);