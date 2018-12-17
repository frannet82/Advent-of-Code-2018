const fs = require('fs');

const contents = () => {
    let frequency = 0;
    const change = fs.readFileSync('./input.txt', 'utf8').split('\n');
    change.pop();
    for (element of change){
        console.log(`Current frequency ${frequency}, change of ${element}; resulting frequency ${(Number(element)+ frequency)}` );
        frequency = (Number(element)+ frequency);
    }
console.log(`The result is ${frequency}`)
};
contents();
