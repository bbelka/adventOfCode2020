const fs = require("fs");
const text = fs.readFileSync("input.txt").toString('utf-8');
const arr = text.split("\n");
let counter = 0;

for (let i = 0; i < arr.length; i++) {

    const setup = arr[i].split(" ");
    const range = setup[0].split("-");
    const letter = setup[1].split("")[0];
    const password = setup[2]
    let charCounter = 0;

    for (let j = 0; j < password.length; j++) {

        if (password[j] === letter) charCounter++;
    }

    if ((charCounter >= range[0]) && (charCounter <= range[1])) {
        counter++;
    }
}
console.log(counter);