'use strict';
let initialValue = '';
let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let newArray = input.split(' ');
let decode = function(accumulator, currentValue) {
  if (currentValue.length === 3) {
    return accumulator + ' ';
  } else {
    return (accumulator + currentValue[currentValue.length - 1]).toUpperCase();
  }
};
let decoder = newArray.reduce(decode ,initialValue);
  
console.log(decoder);