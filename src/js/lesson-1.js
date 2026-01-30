'use strict';
//task-1
let number = prompt('Enter a number', 0);
let verifiedNumber = Number(number);

if(isNaN(verifiedNumber)){
  alert('введено не число');
}
else if(verifiedNumber === 10)
  {alert('Вірно!')
}
else
  {alert('Невірно!')}

//task-2
const min = Math.floor(Math.random() * 60);
let quarter = '';
if (min >=0 && min <=14){
 quarter = 'Перша чверть години';
}
else if(min >=15 && min <=29){
 quarter = 'Друга чверть години';
}
else if(min >=30 && min <=44){
  quarter = 'Третя чверть години';
}
else{
  quarter = 'Четверта чверть години';
}
alert(`${min} входить в ${quarter}`);

//task-3
let num = prompt("Яке число ви обрали?"); // 1-4
let result = '';
switch(num) {
  case '1':
    result = "Зима";
    break;
  case '2':
    result = "Весна";
    break;
  case '3':
    result = "Літо";
    break;
  case '4':
    result = "Осінь";
   break;
   default:
  result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
}
 console.log(`num: ${num}, result: ${ result}`);

 //tack-4
 const totalMinutes = prompt("Введіть кількість хвилин:");

const hours = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
const minutes = (totalMinutes % 60).toString().padStart(2, '0');

console.log(`${hours}:${minutes}`);