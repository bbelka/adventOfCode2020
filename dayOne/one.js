const fs = require("fs");

const text = fs.readFileSync("input.txt").toString('utf-8');

const arr = text.split("\n");

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (parseInt(arr[i]) + parseInt(arr[j]) === 2020) {
            console.log(parseInt(arr[i]) * parseInt(arr[j]))
        }
    }
}
