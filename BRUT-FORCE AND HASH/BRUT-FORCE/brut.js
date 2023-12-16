

let fs = require('fs')
let data = fs.readFileSync("input.txt", "utf8")
let line = data.split('\n')

let S = line[0]
let n = S.length;
console.log(S)
let T = line[1]
console.log(T)
let m = T.length;

i = 0;
while (i <= n-m)
{
    j = 0;
    while (S[i+j] === T[j] && j<m) {
        j++;
    } if (j === m) {
        console.log(`Найдено вхождение: ${i}`)
    }
    i++;
}
