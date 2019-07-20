let input_arr = [];
let input_field = document.getElementById('input');
let output_field = document.getElementById('output');
let operations = ["*", "/", "+", "-"];

function create_numbers() {
    const number_div = document.querySelector('.numbers');

    for (let i = 1; i < 10; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = function() {
            update_input(i)
        }
        number_div.appendChild(button);
    }

    const zero_button = document.createElement('button');
    zero_button.style.columnSpan = 2;
    zero_button.textContent = "0";
    zero_button.onclick = function() {
        update_input(0);
    }
    number_div.appendChild(zero_button);

    let operand_buttons = []

    for (let i = 0; i < operations.length; i++){
        let button = document.getElementById(operations[i])
        button.onclick = function() {
            update_input(operations[i])
        }
    }

    equals_button = document.getElementById('=');
    equals_button.onclick = equals;

    clear_button = document.getElementById('C');
    clear_button.onclick = clear;
}

function clear() {
    input_arr = [];
    out_arr = [];
    input_field.textContent = "0"
    output_field.textContent = "0"
}

function equals() {
    pemdas(input_arr);
}

function update_input(input) {
    input_arr[input_arr.length] = input;
    input_field.textContent = input_arr.join('');
}

function pemdas(in_arr) {
    let out_arr;

    for (let i = 0; i < operations.length; i++) {
        out_arr = operate(in_arr, operations[i]);
    }

    output_field.textContent = String(out_arr[0]);
}

function operate(arr, operand) {
    let indOper;
    while (true){
        indOper = arr.indexOf(operand);
        if (indOper === -1) {
            return arr
        } else {
            switch (operand) {
                case "*":
                    arr.splice(indOper - 1, 3, parseInt(arr[indOper - 1]) * parseInt(arr[indOper + 1]));
                    break;

                case "/":
                    if (arr[indOper + 1] === "0") {
                        divide_by_zero()
                        arr[0] = "YOU DONE FUCKED UP!"
                        return arr;
                    } else {
                        arr.splice(indOper - 1, 3, parseInt(arr[indOper - 1]) / parseInt(arr[indOper + 1]));
                        break;
                    }

                case "+":
                    arr.splice(indOper - 1, 3, parseInt(arr[indOper - 1]) + parseInt(arr[indOper + 1]));
                    break;

                case "-":
                    arr.splice(indOper - 1, 3, parseInt(arr[indOper - 1]) - parseInt(arr[indOper + 1]));
                    break;
            }
        }
    }
}

function divide_by_zero() {
    console.log("DIVIDED BY ZERO! APOCALYPSE IMMANENT!")
}

create_numbers()