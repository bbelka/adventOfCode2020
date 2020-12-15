const fs = require("fs");

const text = fs.readFileSync("input.txt").toString('utf-8');
const arr = text.split("\n");
let horizontal = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {

    const line = arr[i];

    let index = horizontal <= line.length ? horizontal : horizontal % line.length;

    if (line[index] === "#") count++;

    horizontal += 3;
}

console.log(count);