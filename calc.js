function create_numbers() {
    const number_div = document.querySelector('.numbers');

    for (let i = 1; i < 10; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        number_div.appendChild(button);
    }

    const zero_button = document.createElement('button');
    zero_button.style.columnSpan = 3;
    zero_button.textContent = "0";
    number_div.appendChild(zero_button);
}

function pemdas(in_string) {
    let in_arr = in_string.split(' ');
    let operations = ["*", "/", "+", "-"];

    for (i = 0; i < operations.length; i++) {
        operate(in_arr, operations[i]);
    }

    return in_arr[0];
}

function operate(arr, operand) {
    let indOper;
    while (true){
        indOper = arr.indexOf(operand);
        if (indOper === -1) {
            return arr
        }
        switch (operand) {
            case "*":
                arr.splice(indOper - 1, 3, parseInt(arr[indOper - 1]) * parseInt(arr[indOper + 1]));
                break;

            case "/":
                arr.splice(indOper - 1, 3, parseInt(arr[indOper - 1]) / parseInt(arr[indOper + 1]));
                break;

            case "+":
                arr.splice(indOper - 1, 3, parseInt(arr[indOper - 1]) + parseInt(arr[indOper + 1]));
                break;

            case "-":
                arr.splice(indOper - 1, 3, parseInt(arr[indOper - 1]) - parseInt(arr[indOper + 1]));
        }
    }
}

console.log(pemdas("5 * 2 + 4 / 2 - 1"))

// create_numbers()