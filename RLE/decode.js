let fs = require('fs'); //подключили библиотеку
let inCode = fs.readFileSync('code.txt');
let b = inCode.toString()


function decode(input){
    let result = '';
    let i = 0;
    let numbers = "1234567890";

    while (i<input.length) {
        let count = '';
        while(numbers.indexOf(input[i]) !== -1){
            count+=input[i];
            i++;
        }
        if(count.length>0){
            count = Number(count)
            result += input[i].repeat(count-1);
        }
        else{
            result += input[i]
            i++;
        }



    }

    return result;
}

decode_str = decode(b);
fs.writeFileSync('decode.txt', decode_str);

console.log("Коэффициент сжатия = ", decode_str.length/b.length);