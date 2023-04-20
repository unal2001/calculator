let num1 = '';
let num2 = '';
let operator = '';
let result = '';

const updateResult = () => {
  let res;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  switch (operator) {
    case '+':
      res = n1 + n2;
      break;
    case '-':
      res = n1 - n2;
      break;
    case '*':
      res = n1 * n2;
      break;
    case '/':
      res = n1 / n2;
      break;
  }
  result = res.toString();
  document.getElementById('result').value = result;
  num1 = result;
  num2 = '';
  operator = '';
};

const handleNumberClick = (event) => {
  const number = event.target.textContent;
  if (!operator) {
    num1 += number;
    document.getElementById('result').value = num1;
  } else {
    num2 += number;
    document.getElementById('result').value = num2;
  }
};

const handleOperatorClick = (event) => {
    if (!num1) {
      return;
    }
    operator = event.target.textContent;
    document.getElementById('result').value = operator;
  };
  

const handleClearClick = () => {
  num1 = '';
  num2 = '';
  operator = '';
  result = '';
  document.getElementById('result').value = '';
};

const handleEqualsClick = () => {
  if (num1 && num2 && operator) {
    updateResult();
  }
};

document.querySelectorAll('.number').forEach((button) => {
  button.addEventListener('click', handleNumberClick);
});

document.querySelectorAll('.operator').forEach((button) => {
  button.addEventListener('click', handleOperatorClick);
});

document.getElementById('clear').addEventListener('click', handleClearClick);

document.getElementById('equals').addEventListener('click', handleEqualsClick);


