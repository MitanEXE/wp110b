let text = "Name:Binbin Age:18 Occupation:Student Email:s111010544@student.nqu.edu.tw";


let re1 = /[0-9]+/g;
let re2 = /[a-z]+/g;
let re3 = /:([0-9a-zA-Z])+/g;
let re4 = /:([0-9a-zA-Z])+/;
let re5 = /:([0-9a-zA-Z]+)/;
let re6 = /:\d+/g;
let re7 = /:\D+/g;
let re8 = /\w+@[\w\.]+/g;
let re9 = /\w+@[a-z]+\.[a-z.]+/g;

console.log("/[0-9]+/g >>> " + text.match(re1));
console.log("/[a-z]+/g >>> " + text.match(re2));
console.log("/:([0-9a-zA-Z])+/g >>> " + text.match(re3));
console.log("/:([0-9a-zA-Z])+/ >>> " + text.match(re4));
console.log("/:([0-9a-zA-Z]+)/ >>> " + text.match(re5));
console.log("/:\d+/g >>> " + text.match(re6));
console.log("/:\D+/g >>> " + text.match(re7));
console.log("/\w+@[\w\.]+/g >>> " + text.match(re8));
console.log("\w+@[a-z]+\.[a-z.]+/g >>> " + text.match(re9));
