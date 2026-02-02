//task=1
// let styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');//  Додаю 'rock-n-roll' у кінець
// console.log(styles);//

 // 3. Знаходжу 'blues' та заміняє на 'classic'
 const index = styles.indexOf('blues');// Знаходжу номер (1)
 if (index !== -1) {
   styles[index] = 'classic';
 }

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


function logItems(array){
  for(let i = 0; i < array.length; i++ ){
    // Додаю 1 до індексу, щоб нумерація була з одиниці по умові
   console.log(`${i + 1} - ${array[i]}`);
}}
 logItems(styles);

 //task-2
  const logins = ["Peter", "John", "Igor", "Sasha"];
 function checkLogin(loginsy){
  const userName = prompt('Напишить як вас звать');

    console.groupCollapsed('Дані користувачів'); // Відкривю групу
    console.log('Кількість:', loginsy.length);
    console.table(loginsy); // виводжу таблицю внутрі групи
    console.groupEnd(); //Закриваю групу 

   if (loginsy.includes(userName))
  {
    alert(`welcome: ${userName}`);
  }
  else {alert('User not found');}

  }
  checkLogin(logins)


//task-3
function calculateAverage(...args) {
  let sum = 0;
  let count = 0;

  for (const value of args) {
    if (typeof value === 'number' && !Number.isNaN(value)) {
      sum += value;
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  return sum / count;
}
console.log(calculateAverage(1, 2, 3)); //2
console.log(calculateAverage(10, '5', 20, true));//15
console.log(calculateAverage('a', null));//0