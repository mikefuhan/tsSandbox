let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

/*
or array can be declare in this fotmat as well
*/
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strnumTuple: [string, number];  /* this is tuple type */


myString = 'this is cool'.slice(0,3);
myNum = 22;
myBool = true;
myVar = false;
strnumTuple = ['foobar', 199, 222, 333, 'string'];


// console.log('myString is ' + myString + '. myNum is ' + myNum + '. myBool is ' + myBool + '. myVar is ' + myVar);

console.log(strnumTuple);
