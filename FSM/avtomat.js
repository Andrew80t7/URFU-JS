function processString(inputString) {
    const states = new Set(['q0', 'q1']);  // Состояния
    const alphabet = new Set(['0', '1']);  // Алфавит
    const transition = {
        'q0': {'0': 'q1', '1': 'q0'},
        'q1': {'0': 'q0', '1': 'q1'}
    };  // Функция переходов
    const startState = 'q0';  // Начальное состояние
    const acceptStates = new Set(['q0']);  // Конечные состояния

    let currentState = startState;

    for (let symbol of inputString) {
        if (!alphabet.has(symbol)) {
            console.log("Некорректный символ в строке.");
            return;
        }

        currentState = transition[currentState][symbol];
    }

    if (acceptStates.has(currentState)) {
        console.log("ОК");
    } else {
        console.log("Не ОК");
    }
}


processString('10001110');
