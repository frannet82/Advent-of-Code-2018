const fs = require('fs');

const contents = () => {
    let twiceValue = '';
    let frequency = 0;
    let list = [0];
    const change = fs.readFileSync('./input.txt', 'utf8').split('\n');
    change.pop();
    console.log('Loading');
    while (true)
    {
        if (twiceValue != ''){
            break;
        }
        else{
            for (element of change){
                frequency = (Number(element) + frequency);
                if (list.find((element) => {return element == frequency;})!= null){ 
                    twiceValue = frequency;
                    break;
                }
                else{
                    list.push(frequency);
                }
            }
        }
    }
console.log(`First reaches ${twiceValue} twice`)
};

contents();
