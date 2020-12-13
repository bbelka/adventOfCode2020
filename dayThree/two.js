const fs = require("fs");
const text = fs.readFileSync("input.txt").toString('utf-8');
const arr = text.split("\n");
const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];


const countTreeInstances = async (horizChange, vert) => {

    let horizIndex = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i += vert) {

        const line = arr[i];

        let index = horizIndex <= line.length ? horizIndex : horizIndex % line.length;

        if (line[index] === "#") count++;

        horizIndex += horizChange;
    }
    return count;
};

const multiplyTreeInstances = async (slopes) => {

    let output = 1;

    await slopes.forEach(async (slope) => {

        const horiz = slope[0];
        const vert = slope[1];

        const count = await countTreeInstances(horiz, vert);

        output *= count;
    });

    console.log(output);
};

multiplyTreeInstances(slopes);