
function encode(input){
    let result = '';
    let i = 0;

    while (i < input.length) {
        let currentSymbol = input[i];
        let length = 1;

        while (currentSymbol === input[length+i]){
            length++;
        }

        if (length <= 2){
            result += currentSymbol.repeat(length);
        }

        else{
            result += length + currentSymbol;
        }
        i += length;

    }
    return result;
}

let fs = require('fs');

let inText = fs.readFileSync('input.txt');
let a = inText.toString()

encode_str = encode(a);
fs.writeFileSync('code.txt', encode_str);

console.log("Коэффициент сжатия = ", a.length/encode_str.length); // вывели степень сжатия