function code() {
                let input = document.getElementById('inputData').value;
                let string = '';
                for (let i = 0; i < 3; i++) {
                    let temp = input.charCodeAt(i).toString(2);
                    string += '0'.repeat(8 - temp.length) + temp;
                }
                string = `${string.slice(0, 13)}*${string.slice(13, 20)}*${string.slice(20, 23)}*${string[23]}**`;
                let count = [0, 0, 0, 0, 0];
                for (let i = 0; i < 29; i++) {
                    if (string[i] === '1') {
                        let bin = (29 - i).toString(2);
                        bin = '0'.repeat(5 - bin.length) + bin;
                        for (let j = 0; j < 5; j++) {
                            if (bin[j] === '1') count[j]++;
                        }
                    }
                }
                for (let i = 0; i < 5; i++) {
                    let index = string.indexOf("*");
                    string = string.slice(0, index) + String(count[i] % 2) + string.slice(index + 1, 29);
                }
                document.getElementById('codedData').value = string;
            }

            function decode() {
                let code = document.getElementById('codedData').value;
                let meter = [0, 0, 0, 0, 0]
                for (let i = 0; i < 29; i++) {
                    if (code[i] === '1') {
                        let bin = (29 - i).toString(2);
                        bin = '0'.repeat(5 - bin.length) + bin;
                        for (let j = 0; j < 5; j++) {
                            if (bin[j] === '1') meter[j]++;
                        }
                    }
                }
                let line = '';
                for (let i = 0; i < 5; i++) {
                    line += meter[i] % 2;
                }
                let corrected = code;
                let conversion = 0;
                if (line !== '00000') {
                    conversion = 29 - parseInt(Number(line), 2);
                    let symbol = (code[conversion] === '1') ? '0' : '1';
                    corrected = code.slice(0, conversion) + symbol + code.slice(conversion+1, 29);
                    console.log(corrected)
                }
                corrected = corrected.slice(0, 13) + corrected.slice(14, 21) + corrected.slice(22, 25) + corrected[26];

                let result = '';
                for (let i = 0; i < 24; i += 8) {
                    let index = parseInt(Number(corrected.slice(i, i+8)), 2);
                    result += String.fromCharCode(index);
                }
                document.getElementById('decodeData').value = result;
            }