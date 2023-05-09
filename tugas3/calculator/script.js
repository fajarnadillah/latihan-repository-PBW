let calculation = "";

function display(number) {
    calculation += number;
    document.getElementById("result").value = calculation;
}

function clearResult() {
    calculation = "";
    document.getElementById("result").value = calculation;
}

function operate(operator) {
    if (calculation === "") {
        return;
    } else {
        const lastChar = calculation[calculation.length - 1];
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "%") {
            calculation = calculation.slice(0, -1) + operator;
            document.getElementById("result").value = calculation;
        } else {
            calculation += operator;
            document.getElementById("result").value = calculation;
        }
    }
}

function backspace() {
    calculation = calculation.slice(0, -1);
    document.getElementById("result").value = calculation;
}

function calculate() {
    let result = eval(calculation);
    calculation = result.toString();
    document.getElementById("result").value = calculation;
}
