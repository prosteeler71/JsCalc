function display(value) {
    var display = document.getElementById('display');
    display.textContent += value;
  }
  
  function calculate() {
    var display = document.getElementById('display');
    var value = display.textContent;
    var result
  