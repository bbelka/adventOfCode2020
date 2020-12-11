const fs = require("fs");
const text = fs.readFileSync("input.txt").toString('utf-8');
const arr = text.split("\n");
let counter = 0;

for (let i = 0; i < arr.length; i++) {

    const setup = arr[i].split(" ");
    const posSmall = setup[0].split("-")[0] - 1;
    const posBig = setup[0].split("-")[1] - 1;
    const letter = setup[1].split("")[0];
    const password = setup[2]

    if (((password[posSmall] === letter) || (password[posBig] === letter)) && !((password[posSmall] === letter) && (password[posBig] === letter))) counter++;
}
console.log(counter);