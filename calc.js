function create_numbers() {
    const number_div = document.querySelector('.numbers');

    for (let i = 1; i < 10; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        number_div.appendChild(button);
    }

    const zero_button = document.createElement('button');
    zero_button.style.columnSpan = 3;
    zero_button.textContent = "0"
    number_div.appendChild(zero_button);
}

create_numbers()