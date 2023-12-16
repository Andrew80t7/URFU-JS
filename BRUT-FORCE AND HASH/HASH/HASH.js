//хэш-функции

let fs = require('fs')
let data = fs.readFileSync("input.txt", "utf8")
let line = data.split('\n')

let S = line[0]
const n = S.length;
let T = line[1]
const m = T.length;
k1 = 0;
let hashS = 0;
let hashT = 0;
while (k1 <= m - 1) {
    hashT += T.charCodeAt(k1);
    hashS += S.charCodeAt(k1);
    k1++;
}
console.log(hashT,hashS);
i = 0;
while (i <= n - m) {
    console.log(hashS+" "+ hashT)
    if (hashS === hashT) {
        j = 0
        while (S[i + j] === T[j] && j < m) {
            j++
        }
        if (j === m) {
            console.log(`Найдено вхождение: ${i}`)
        }
    }
    i++
    if (i <= n - m) {
        hashS = hashS + S.charCodeAt(i + m - 1) - S.charCodeAt(i - 1) //добавляем код следующего и минусуем код предыдущего
    }
}

