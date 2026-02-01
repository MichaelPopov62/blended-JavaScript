//  'use strict';
// //task-1
// let number = prompt('Enter a number', 0);
// let verifiedNumber = Number(number);

// if(isNaN(verifiedNumber)){
//   alert('введено не число');
// }
// else if(verifiedNumber === 10)
//   {alert('Вірно!')
// }
// else
//   {alert('Невірно!')}

// //task-2
// const min = Math.floor(Math.random() * 60);
// let quarter = '';
// if (min >=0 && min <=14){
//  quarter = 'Перша чверть години';
// }
// else if(min >=15 && min <=29){
//  quarter = 'Друга чверть години';
// }
// else if(min >=30 && min <=44){
//   quarter = 'Третя чверть години';
// }
// else{
//   quarter = 'Четверта чверть години';
// }
// alert(`${min} входить в ${quarter}`);

// //task-3
// let num = prompt("Яке число ви обрали?"); // 1-4
// let result = '';
// switch(num) {
//   case '1':
//     result = "Зима";
//     break;
//   case '2':
//     result = "Весна";
//     break;
//   case '3':
//     result = "Літо";
//     break;
//   case '4':
//     result = "Осінь";
//    break;
//    default:
//   result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }
//  console.log(`num: ${num}, result: ${ result}`);

//  //tack-4
//  const totalMinutes = prompt("Введіть кількість хвилин:");

// const hours = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
// const minutes = (totalMinutes % 60).toString().padStart(2, '0');

// console.log(`${hours}:${minutes}`);

// task-5
// let login = prompt('Введить логін');
  
// if(login ==='Адмін'){
//     let password = prompt('Введіть пароль');
  
// }
// if(password === 'Я головний'){alert('Добрий день');}
//     else if(password === '' || password === null){alert('Невірний пароль');}
    
//  else if(login === '' || login === null){alert('Скасовано');}
//   else{alert('Я вас не знаю');}

//   task-6
//   let count = 0;
//   while(count <=20){
//     console.log(count);
//     count++;
//   } 
  
//   task-7
//   function getNumbers(min, max) {
//      let sum = 0;
//     for(let i = max; i >= min; i--){
//       console.log(i);
//       if(i%2 == 0){sum += i;}
      
//     }
//     return sum;
//   }

//   console.log(`Сума парних чисел: ${getNumbers(1, 5)}`);

// task-8
// function min(a, b){
//   if (!Number.isFinite(a) || !Number.isFinite(b)){ 
//     return "Not a number"
    
// }
//   return a < b ? a : b;}

// console.log(min(3, 5));
// console.log(min(-3, -5));
// console.log(min('3', 5));
// console.log(min(3, 'five'));

// task-9
// function isAdult(age){
//   if(age >= 18){
//     return true;
//   }
//   return confirm('Можно лише з дозволу батьків');
  
// }
// console.log(isAdult(20));
// console.log(isAdult(10));

// task-10
// function fizzBuzz (num){
//   if(!Number.isFinite(num)){
//     return "Not a number";
    
//   }
 
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(3);
// fizzBuzz(5);
// fizzBuzz(15);
// fizzBuzz(7);
// fizzBuzz('hello');
// console.log(fizzBuzz('hello'));
