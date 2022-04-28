//Все стірлочними!!!!!!!!!
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let mass = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(mass([1,2,3,4,5]));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let minMax = (...args) => {
    let min = args[0];
    let max = args[0];
    for (const element of args) {
        if (element > max){
            max = element;
        }else if ( element < min){
            min = element;
        }
    }
    console.log(max);
    return min;
}
console.log(minMax(123,3123,43,7854,-12));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let random = (range) => {
    let array = [];
    for (let i = 0; i < range; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}
console.log(random(10));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let random1 = (range,limit) => {
    let array = [];
    for (let i = 0; i < range; i++) {
        array.push(Math.floor(Math.random() * limit));
    }
    return array;
}
console.log(random1(10,50));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
let mass12  = [1,2,3];
let newMass = [];
let reverse = (array) => {
    for (let i = 0; i < array.length; i++) {
        newMass.push(array[(array.length -1) - i]);
    }
    return newMass;
}
console.log(reverse(mass12));

//
// Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangleS = (a,b) => a * b;
console.log(rectangleS(23,76));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleS = (r) => Math.PI * Math.pow(r,2);
console.log(circleS(10));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderS = (r,h) => 2 * Math.PI * r * h;
console.log(cylinderS(3,7));
// - створити функцію яка приймає масив та виводить кожен його елемент
let take = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
take([1,2,3,4,5]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let par = (txt) => document.write(`<p>${txt}</p>`);
par('Hi');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (txt) => document.write(`<ul>
   <li>${txt}</li>
   <li>${txt}</li>
   <li>${txt}</li>
   </ul>`);
list('Hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list2 = (text,li) => {
    document.write(`<ul>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
list2('cece',5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primitive = (array) => {
    document.write('<ul>');
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write('</ul>');
}
primitive([1,true,'fnicj']);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let someMass = (array) => {
    for (const element of array) {
        document.write(`<div>${element.id} ${element.name} ${element.age}</div>`);
    }
}
someMass([{id: 1,name: 'cdcnje',age: 324},{id: 2,name: 'ncjej',age: 123}]);
// - створити функцію яка повертає найменьше число з масиву
let min = (...array) => {
    let min = array[0];
    for (const element of array) {
        if ( element < min){
            min = element;
        }
    }
    console.log(min)
    return min;
}
min(1,2,3,4,5);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
let sum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
    return sum;
};
sum([1,2,3,4,5])
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let rever = (array) => array.reverse();
console.log(rever([{id:1},{id:2}]));
