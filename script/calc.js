// JAVASCRIPT AND THE DOM (building a percentage calculator)
let numField1 = document.getElementById('numField1');
let numField2 = document.getElementById('numField2');
let resultField = document.getElementById('resultField');
let form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener('submit', function() {
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
        let x = parseFloat(numField1.value);
        let y = parseFloat(numField2.value);
    }  
});