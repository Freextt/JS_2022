//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let min = (num1,num2,num3) => {
    if (num1 < num2 && num1 < num3){
        console.log(num1);
    }else if (num2 < num1 && num2 < num3){
        console.log(num3);
    }else{
        console.log(num3);
    }
}
min(123,321,-4347);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max = (num1,num2,num3) => {
    if (num1 > num2 && num1 > num3){
        console.log(num1);
    }else if (num2 > num1 && num2 > num3){
        console.log(num3);
    }else{
        console.log(num3);
    }
}
max(12,3,42);
// - створити функцію яка повертає найбільше число з масиву
let maximum = (array) => console.log(Math.max(...array));
maximum([1,2,3,4,5]);
// - створити функцію яка повертає найменьше число з масиву
let minimum = (array) => console.log(Math.min(...array));
minimum([1,2,3,4,5]);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
let sum = (array) => array.reduce((a,b) => a + b);
console.log(sum([1,2,10]));
//
//
//
// - Дано натуральное число n. Выведите все числа от 1 до n.
let loger = (n) => {
   for (let i = 1; i <= n; i++) {
       console.log(i);
    }
};
loger(10);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
let outer = (a,b) =>{
    if (a > b) {
        for (let i = b; i <= a; i++) {
            console.log(i);
        }
    }else if (a < b){
        for (let i = b; i >= a; i--) {
            console.log(i);
        }
    }
}
outer(10,5);
outer(5,10);
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
let foo = (array, i) => {
      let t = array[i];
      array[i] = array[i + 1];
      array[i + 1] = t;
      console.log(array);
      return array;
}
foo([9,8,0,4],0);
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let foo2 = (array) => {
    let newArr = [];
    let i = 0;
    let j = array.length - 1;
    for (const element of array) {
       if (element !== 0){
           newArr[i] = element;
           i++;
       }
    }
    for (const element of array) {
        if (element === 0){
            newArr[j] = element;
            j--;
        }
    }
    console.log(newArr);
    return newArr;
}
foo2([1,0,6,0,3]);




////

