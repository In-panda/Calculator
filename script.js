'use strict';

const btn1 = document.querySelector('.button-1');
const btn2 = document.querySelector('.button-2');
const btn3 = document.querySelector('.button-3');
const btn4 = document.querySelector('.button-4');
const btn5 = document.querySelector('.button-5');
const btn6 = document.querySelector('.button-6');
const btn7 = document.querySelector('.button-7');
const btn8 = document.querySelector('.button-8');
const btn9 = document.querySelector('.button-9');
const btn0 = document.querySelector('.button-0');

const inputField = document.querySelector('.Display-Calculaion');
const addButton = document.querySelector('.button-add');
const minusButton = document.querySelector('.button-subtract');
const multiplyButton = document.querySelector('.button-multiply');
const divideButton = document.querySelector('.button-divide');

const equalsTo = document.querySelector('.button-equals');
const deleteButton = document.querySelector('.button-deleteAll');
const clearButton = document.querySelector('.button-clear');

//button 1
btn1.addEventListener('click', function () {
  inputField.value += btn1.textContent;
});

//button 2
btn2.addEventListener('click', function () {
  inputField.value += btn2.textContent;
});

//button 3
btn3.addEventListener('click', function () {
  inputField.value += btn3.textContent;
});

//button 4
btn4.addEventListener('click', function () {
  inputField.value += btn4.textContent;
});

//button 5
btn5.addEventListener('click', function () {
  inputField.value += btn5.textContent;
});

//button 6
btn6.addEventListener('click', function () {
  inputField.value += btn6.textContent;
});

//button 7
btn7.addEventListener('click', function () {
  inputField.value += btn7.textContent;
});

//button 8
btn8.addEventListener('click', function () {
  inputField.value += btn8.textContent;
});

//button 9
btn9.addEventListener('click', function () {
  inputField.value += btn9.textContent;
});

//button 0
btn0.addEventListener('click', function () {
  inputField.value += btn0.textContent;
});

//ADD BUTTON
addButton.addEventListener('click', function () {
  inputField.value += addButton.textContent;
});

//Minus BUTTON
minusButton.addEventListener('click', function () {
  inputField.value += minusButton.textContent;
});

//Multiply BUTTON
multiplyButton.addEventListener('click', function () {
  inputField.value += multiplyButton.textContent;
});

//Divide BUTTON
divideButton.addEventListener('click', function () {
  inputField.value += divideButton.textContent;
});

//Clear Button
clearButton.addEventListener('click', function () {
  const arr = inputField.value.split('');
  arr.pop();
  inputField.value = arr.join('');
});

//CALCULATE BUTTON
equalsTo.addEventListener('click', function () {
  if (inputField.value.includes('+')) {
    inputField.value = inputField.value
      .split('+')
      .reduce((acc, num) => (acc += Number(num)), 0);
  } else if (inputField.value.includes('-')) {
    inputField.value = inputField.value
      .split('-')
      .reduce((acc, num, i, arr) => (acc -= Number(num)));
  } else if (inputField.value.includes('×')) {
    inputField.value = inputField.value
      .split('×')
      .reduce((acc, num) => (acc *= Number(num)), 1);
  } else if (inputField.value.includes('÷')) {
    inputField.value = inputField.value
      .split('÷')
      .reduce((acc, num) => (acc /= Number(num)));
  } else {
    inputField.value = 0;
  }
});

//Delete All Button
deleteButton.addEventListener('click', function () {
  inputField.value = '';
});
