//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
function min(num1,num2,num3){
    if (num1 < num2 && num1 < num3){
        console.log(num1);
    }else if(num2 < num1 && num2 < num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}
min(124,86,124);
//
function max(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        console.log(num1);
    }else if(num2 > num1 && num2 > num3){
        console.log(num2);
    }else{
        console.log(num3);
    }
}
max(79462,25,983);
//
function mathMax(...args){
    let max = Math.max(...args);
    console.log(max);
    return max;
}
mathMax(123,4352,7456346);
//
function avg (...args){
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    let avg = sum / args.length;
    console.log(avg);
    return avg;
}
avg(1,2,3,4,5,6,7,8,9);

function minMax(...args){
    let min = arguments[0];
    let max = arguments[0];
    for (const element of args){
        if (element > max){
            max = element;
        }else if (min < element){
            min = element;
        }
    }
    console.log(max);
    console.log(min);
    return min;
}
minMax(1,2,3,4,5,6,7,8,9);

let myArray = [];
function random(max,range){
    for (let i = 0; i < range; i++) {
        myArray[i] = Math.round(Math.random() * max);
    }
    return myArray;
}
random(100,10);
console.log(myArray);

let myArray1 = [];
function random1(min,max,range){
    for (let i = 0; i < range; i++) {
        myArray1[i] = Math.round(Math.random() * (max - min) + min);
    }
    return myArray1;
}
random1(23234,32565673,10);
console.log(myArray1);
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
function twoWays(...arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 2){
            console.log(arr[0] + arr[1]);
        }else if (arr.length === 1){
            console.log(arr[0]);
        }
    }
    return arr;
}
twoWays(5,5);
twoWays(13);

let mass  = [1,2,3];
let newMass = [];
function reverse(array) {
    for (let i = 0; i < array.length; i++) {
        newMass[i] = array[(array.length -1) - i];
    }
    return newMass;
}
reverse(mass);
console.log(newMass);
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
let array1 =  [1,2,3,4];
let array2 =   [2,3,4,5];
let sum = [];
function concat(arr1,arr2){
        for (let i = 0; i < arr1.length; i++) {
            sum[i] = arr1[i] + arr2[i];
        }
        return sum;
}
concat(array1,array2);
console.log(sum);
//   результат
//   [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]