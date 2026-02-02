//task=1
let styles = ['jazz', 'blues'];
styles.push('rock-n-roll');//  Додаю 'rock-n-roll' у кінець
console.log(styles);//

// 3. Знаходжу 'blues' та заміняє на 'classic'
// const index = styles.indexOf('blues');// Знаходжу номер (1)
// if (index !== -1) {
//   styles[index] = 'classic';
// }

//спосіб 2
//  if(styles.includes('blues')){
//   styles[styles.indexOf('blues')]='classic';
//  }
// console.log(styles);

//спосіб 3
const index = styles.indexOf('blues');
 if (index !== -1) {
   styles.splice(index,1,'classic');
 }
 console.log(styles);


function logItems(array){
  for(let i = 0; i < array.length; i++ ){
    // Додаю 1 до індексу, щоб нумерація була з одиниці по умові
   console.log(`${i + 1} - ${array[i]}`);
}}
 logItems(styles);

 //task-2
 