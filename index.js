function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;

} function multiply(num1, num2) {
  return num1 * num2;

} function devide(num1, num2) {
  return num1 / num2;
}
function operate(num1, num2, operator) {
  if (operator === '+') {
    return add(num1, num2);
  }
  else if (operator === '-') {
    return subtract(num1, num2);
  }
  else if (operator === '*') {
    return multiply(num1, num2);
  }
  else if (operator === '/') {
    return devide(num1, num2);
  }
}
function displayresult(operator) {
  if (operationDisplay.textContent.charAt(operationDisplay.textContent.length - 1) === operator) {
    result = operate(result, parseFloat(display.textContent), operator);
    operationDisplay.textContent = `${result}` + operator;
  }
  else {
    result = parseFloat(display.textContent);
    operationDisplay.textContent = display.textContent + operator;
  }
  display.textContent = "";
}
function disapleButtons(){
  plusButton.disabled=true;
  minusButton.disabled=true;
  multiplyButton.disabled=true;
  devideButton.disabled=true;
  
}
function enableButtons(){
  plusButton.disabled=false;
  minusButton.disabled=false;
  multiplyButton.disabled=false;
  devideButton.disabled=false;
}
const plusButton=document.getElementById("plus")
const minusButton=document.getElementById("minus")
const multiplyButton=document.getElementById("multiply")
const devideButton=document.getElementById("devide");
let result;
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operationDisplay = document.querySelector(".opeDisplay")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    if (buttonText === 'Clear') {
      document.getElementById("dot").disabled=false;
      display.textContent = "";
      operationDisplay.textContent = "";
      enableButtons();
    }
    else if (buttonText === 'Delete') {
      display.textContent = display.textContent.slice(0, display.textContent.length - 1)

    }
    else if(buttonText==="."){
      display.textContent += buttonText;
      document.getElementById("dot").disabled=true;
    }
    else if (buttonText === "+") {
      document.getElementById("dot").disabled=false;
      disapleButtons();
      displayresult("+")
    }
    else if (buttonText === "-") {
      document.getElementById("dot").disabled=false;
      disapleButtons();
      displayresult("-");
    }
    else if (buttonText === "*") {
      document.getElementById("dot").disabled=false;
      disapleButtons();
      displayresult("*")
    }
    else if (buttonText === "/") {
      document.getElementById("dot").disabled=false;
      disapleButtons();
      displayresult("/")
    }
    else if (buttonText === "=") {
      enableButtons();
      if(display.textContent!==""){
        result = operate(result, parseFloat(display.textContent), operationDisplay.textContent.charAt(operationDisplay.textContent.length - 1))
      }
      operationDisplay.textContent = "";
      display.textContent = `${result}`
    }
    else {
      display.textContent += buttonText;
    }
  });
});


