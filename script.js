function calculate() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Result: Please enter both numbers.";
        return;
    }

    let result;

    switch(operator){

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if(num2 == 0){
                result = "Cannot divide by zero";
            }else{
                result = num1 / num2;
            }
            break;

        default:
            result = "Invalid Operation";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}
