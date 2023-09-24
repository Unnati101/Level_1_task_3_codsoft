
function clearDisplay() {
   document.getElementById('result').value = '';
}

function appendToDisplay(value) {
   document.getElementById('result').value += value;
}

function calculateResult() {
   const result = eval(document.getElementById('result').value);
   document.getElementById('result').value = result;
}
