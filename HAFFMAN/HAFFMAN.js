
let readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tree;
rl.question('Введите текст: ', (message) => {
    rl.close()
    function createHuffmanTable(input) {

        let tree1 = [];
        function coding(node, code, table) {
            node.code = code;
            tree1.push({
                name: node.letter,
                code: node.code
            });
            if (node.letter.length === 1){
                table[node.letter] = node.code;
            }
            if (node.leftSon){
                node.leftSon = coding(node.leftSon, node.code+'0', table);
            }
            if (node.rightSon){
                node.rightSon = coding(node.rightSon, node.code+'1', table);
            }
            return node;
        }


        function writeTree(tree){
            let str = "\n";
            let len = 0;
            let flags = [];
            for(let i in tree){
                const node = tree[i];
                if (node.code.length === 0){
                    str+=node.name+"  ("+node.code+")\n";
                    continue;
                }
                if (node.code.length > len) {
                    len = node.code.length;
                }
                else if (node.code.length < len){
                    len = node.code.length;
                }

                if(!flags[len]){
                    str+=" ".repeat((len-1)*3)+"├──"+node.name+"  ("+node.code+")\n";
                    flags[len]=!flags[len];
                }
                else{
                    str+=" ".repeat((len-1)*3)+"└──"+node.name+"  ("+node.code+")\n";
                    flags[len]=!flags[len];
                }
            }
            str+="\n"
            console.log(str);

        }


        const nodes = getNodes(input);
        tree = createHuffmanTree(nodes);
        const table = [];
        coding(tree, '', table);
        writeTree(tree1);
        return table;
    }

    function createHuffmanTree(nodes) {
        let main;
        while (nodes.length > 1) {
            nodes.sort((a, b) => {
                if (a.weight < b.weight) {
                    return 1;
                }
                if (a.weight > b.weight) {
                    return -1;
                }
                return 0;
            });
            const a = nodes.pop();
            const b = nodes.pop();
            const parent = {
                letter: a.letter + b.letter,
                leftSon: a,
                rightSon: b,
                code: '',
                weight: a.weight + b.weight
            }
            nodes.push(parent);
            main = parent.letter;
        }
        return nodes.shift();
    }

    function getNodes(input) {
        const table = [];
        for (let i = 0; i < input.length; i++) {
            const letter = input[i];
            if (table[letter] === undefined) {
                table[letter] = 0;
            }
            table[letter]++;
        }
        console.log(table);

        const result = [];
        for (let letter in table) {
            const node = {
                letter: letter,
                leftSon: undefined,
                rightSon: undefined,
                code: '',
                weight: table[letter]
            };
            result.push(node);
        }
        return result;
    }

    let tableOfNodes;

    function encode(message){
        tableOfNodes = createHuffmanTable(message);
        let result = '';
        let i = 0;
        for (let node in tableOfNodes){
            if (i++===0)
                result+='\n'+node+':'+tableOfNodes[node]+'\n';
            else
                result+=node+':'+tableOfNodes[node]+'\n';
        }
        for (let i = 0;i<message.length; i++){
            let letter = message[i];
            result+=tableOfNodes[letter];
        }

        return result;
    }

    const encoding = encode(message);
    console.log("Закодированный текст: ", encoding);

    //декодирование
    let readlineNew = require('readline')
    const rp = readlineNew.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    rp.question('Введите кодировку: ', (dec) => {
        rp.close()

        function decode(message) {
            let work = tree;
            let result = '';
            for (let i = 0; i < message.length; i++) {
                if (message[i] === '1') {
                    work = work.rightSon;
                } else {
                    work = work.leftSon;
                }
                if (work.letter.length === 1) {
                    result += work.letter;
                    work = tree;
                }

            } return result;
        }
        const decoding = decode(dec);
        console.log("Раскодированное сообщение: ", decoding);

    });
});