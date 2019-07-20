function create_numbers() {
    const number_div = document.querySelector('.numbers');

    for (let i = 1; i < 10; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        number_div.appendChild(button);
    }

    const zero_button = document.createElement('button');
    zero_button.style.columnSpan = 2;
    zero_button.textContent = "0";
    number_div.appendChild(zero_button);

    const decimal_button = document.createElement('button');
    decimal_button.textContent = ".";
    number_div.appendChild(decimal_button);
}

function pemdas(in_string) {
    let in_arr = in_string.split(' ');
    let operations = ["*", "/", "+", "-"];
    let out_arr;

    for (i = 0; i < operations.length; i++) {
        out_arr = operate(in_arr, operations[i]);
    }

    return out_arr[0];
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