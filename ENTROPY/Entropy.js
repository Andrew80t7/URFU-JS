
let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let str = "";

rl.question('Ввод ', (str) => {
    rl.close();
    const e = 2.71828;
    let n = 0;
    let alpha = [];
    for(let i= 0; i < str.length; i++)
        if (alpha[str.charAt(i)])
        {

            alpha[str.charAt(i)]++;
        }
        else
        {
            alpha[str.charAt(i)]=1;
            n++;
        }
    let sum = 0;

    let zn = str.length;
    for (let a in alpha)
    {
        console.log(a, alpha[a]);
        let p = alpha[a]/zn;
        sum+=p*(Math.log2(p)/Math.log2(n));

    }

    console.log(-sum);
});

