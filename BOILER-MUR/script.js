//Код выводит индексы вхождения подстроки Т в строку S


let fs = require('fs')
let data = fs.readFileSync("input", "utf8")
let line = data.split('\n')
S = line[0]
T = line[1]
console.log(S)
console.log(T)

n = S.length
m = T.length

N = []
StopTable = []

let j;
for(j = 0; j < T.length - 1; j++)
	N[T.charAt(j)] = j + 1

suffshift = []
z = []
for (j = 0; j <=m; j++) {
	z[j] = 0
	suffshift[j] = m
}


let maxindex;
let maxZ;
for (j = 1; j < m; j++) {
    if (j <= maxZ)
        z[j] = Math.min(maxZ - j + 1, z[j - maxindex])
    while (j + z[j] < m && T.charAt(m - 1 - z[j]) === T.charAt(m - 1 - (j + z[j])))
        z[j]++;
    if (j + z[j] - 1 > maxZ) {
        maxindex = j;
        maxZ = j + z[j] - 1;
    }
}

for (j = m - 1; j > 0; j--)
	suffshift[m - z[j]] = j;

r = 0;
 for (j = 1; j <= m - 1; j++)
  if ((j + z[j]) === m)
     for( ; r <= j; r++)
       if (suffshift[r] === m) suffshift[r] = j;


i = 0
boundary = 0

while(i <= n - m) {
	j = m - 1
	while(j >= boundary && S.charAt(i+j) === T.charAt(j))
		j--
	if (j < boundary) {
		console.log(i + 1)
        console.log(T)
		boundary = m - suffshift[0]
		j = -1
		i += suffshift[0];
	} else {
		boundary = 0
		if (!N[S.charAt(i + m - 1)])
			StopTable[S.charAt(i + j)] = 0
		else
			StopTable[S.charAt(i + j)] = N[S.charAt(i + m - 1)]
		i = Math.max((i + suffshift[j+1]), (i + j + 1 - StopTable[S.charAt(i+j)]))
	}
}