//task=1
// let styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');//  Додаю 'rock-n-roll' у кінець
// console.log(styles);//

 // 3. Знаходжу 'blues' та заміняє на 'classic'
//  const index = styles.indexOf('blues');// Знаходжу номер (1)
//  if (index !== -1) {
//    styles[index] = 'classic';
//  }

 //спосіб 2
//  if(styles.includes('blues')){
//   styles[styles.indexOf('blues')]='classic';
//  }
// console.log(styles);

 //спосіб 3
// const index = styles.indexOf('blues');
//  if (index !== -1) {
//    styles.splice(index,1,'classic');
//  }
//  console.log(styles);


// function logItems(array){
//   for(let i = 0; i < array.length; i++ ){
//     // Додаю 1 до індексу, щоб нумерація була з одиниці по умові
//    console.log(`${i + 1} - ${array[i]}`);
// }}
//  logItems(styles);

//  //task-2
//   const logins = ["Peter", "John", "Igor", "Sasha"];
//  function checkLogin(loginsy){
//   const userName = prompt('Напишить як вас звать');

//     console.groupCollapsed('Дані користувачів'); // Відкривю групу
//     console.log('Кількість:', loginsy.length);
//     console.table(loginsy); // виводжу таблицю внутрі групи
//     console.groupEnd(); //Закриваю групу 

//    if (loginsy.includes(userName))
//   {
//     alert(`welcome: ${userName}`);
//   }
//   else {alert('User not found');}

//   }
//   checkLogin(logins)


// //task-3
// function calculateAverage(...args) {
//   let sum = 0;
//   let count = 0;

//   for (const value of args) {
//     if (typeof value === 'number' && !Number.isNaN(value)) {
//       sum += value;
//       count++;
//     }
//   }

//   if (count === 0) {
//     return 0;
//   }

//   return sum / count;
// }
// console.log(calculateAverage(1, 2, 3)); //2
// console.log(calculateAverage(10, '5', 20, true));//15
// console.log(calculateAverage('a', null));//0

//task-4
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumAdjacentNumber(someArr){
//   const result = [];
//   for(let i = 0;i < someArr.length - 1; i++){
//     result.push(someArr[i]+someArr[i+1]);
//   }
//   return result
// }
// console.log(sumAdjacentNumber(someArr));

//task-5

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallestNumber(numbers){
//   if (!Array.isArray(numbers)) {
//     return 'Sory, it is not an array!';
//   }
//   let min = numbers[0];
//   for( const elem of numbers ){
//     if(elem < min){
//       min = elem
//     }
//     }
//     return min}
// console.log(findSmallestNumber(numbers));//2
// console.log(findSmallestNumber('test'));
// Sory, it is not an array!

//task-6
//"London is the capital of Great Britain"
//'capital'


// function findLongestWord(string){
//   const words = string.split(' ');//розделітель пробел
//    let longestWord = words[0];
//     for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
// }
//   return longestWord;}
//   console.log(findLongestWord("London is the capital of Great Britain"));//'capital'

  //tak-7

//    const user = {
//             name: "John",
//             age: 20,
//             hobby: "tenis",
//             premium: true,
//           };
//    user.mood = 'happy';
//    user.hobby = 'skydiving';
//    user.premium = false;

// //    for (const key of Object.keys(user)) {
// //   console.log(key + ":" + user[key]);
// // }
//  const keys = Object.keys(user);//const повертає масив ключів.Отримую масив keys["name", "age", "hobby", "premium", "mood"]
 
//  //працюю з масивом ключей
//   for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

//task-8

// const salaries = {
//   Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };
//   function totalSalary(salaries){
//      let sum = 0;
//     const values = Object.values(salaries);
//      for (const value of values) {
//     sum += value;
//   }
//     return sum;
//   }
//   console.log(totalSalary(salaries));//1730
//   console.log(totalSalary({})); // 0
// //спосіб 2
//   const sum = Object.values(salaries).reduce((total, salary) => total + salary, 0);
//    console.log(totalSalary(salaries));
//   console.log(totalSalary({}));

//task-9

const calculator = {
  // Метод збереження значень
  read(a, b) {
    this.a = a;
    this.b = b;
     debugger;
  },
  

  // Метод перевірки наявності властивостей
  exist() {
    return this.a !== undefined && this.b !== undefined;
  },

  // Метод додавання
  sum() {
    // Спочатку перевіряємо
    if (!this.exist()) {
      return 'No such propeties';
    }

    return this.a + this.b;
  },

  // Метод множення
  mult() {
    // Та сама перевірка
    if (!this.exist()) {
      return 'No such propeties';
    }

    return this.a * this.b;
  },
};

console.log(calculator);
console.log(calculator.sum(3, 4));
calculator.read(5, 7);

console.log(calculator.sum()); // 12
console.log(calculator.mult()); // 35


//task-10
   const fruits = [
            { name: "Яблуко", price: 45, quantity: 7 },
          { name: "Апельсин", price: 60, quantity: 4 },
          { name: "Банан", price: 125, quantity: 8 },
            { name: "Груша", price: 350, quantity: 2 },
            { name: "Виноград", price: 440, quantity: 3 },
          { name: "Банан", price: 125, quantity: 3 },
          ];

function  calcTotalPrice(fruits, fruitName){
 let totalPrice = 0;//змінна акумулятор
  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      totalPrice += fruit.price * fruit.quantity;
    }
  }

  return totalPrice;
}          
console.log(calcTotalPrice(fruits, "Банан")); // Виведе: 1375 (125*8 + 125*3)
console.log(calcTotalPrice(fruits, "Яблуко")); // Виведе: 315 (45*7)