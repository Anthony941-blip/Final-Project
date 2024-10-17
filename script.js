function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = 'Please enter valid numbers!';
    } else {
        const sum = num1 + num2;
        resultElement.innerText = 'The sum is: ' + sum;
    }
}
