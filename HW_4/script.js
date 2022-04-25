//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleS(a,b){
    let s = a * b;
    console.log(s);
    return s;
}
rectangleS(5,5);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleS(r){
    let s = Math.PI * Math.pow(r,2);
    console.log(s);
    return s;
}
circleS(23);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderS (r,h){
    let s = 2 * Math.PI * r * h;
    console.log(s);
    return s;
}
cylinderS(20,40);

// - створити функцію яка приймає масив та виводить кожен його елемент
function arr(arguments){
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
arr([1,2,3,4,5]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function  par(text){
    document.write(`<p>${text}</p>`);
}
par('cnwjnwjcwnwncj');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function uList(arg){
    document.write('<ul>');
    document.write(`
    <li>${arg}</li>
    <li>${arg}</li>
    <li>${arg}</li>`);
    document.write('</ul>');
}
uList(65468253);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function qwr(txt,num){
    document.write('<ul>');
    for (let i = 0; i < num;i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write('</ul>');
}
qwr('pow',5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function mixer(...args){
    document.write('<ul>');
    for (let i = 0; i < args.length; i++) {
        document.write(`<li>${args[i]}</li>`);
    }
    document.write('</ul>');
}
mixer(true,false,12,'ruvur');
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1,name: 'Tolya',age: 15},
    {id: 2,name: 'Andriy',age: 23},
    {id: 3,name: 'Roma', age: 17}
]
function info(array){
    for (const arrayElement of array) {
             document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`);
    }
}
info(users);
// - створити функцію яка повертає найменьше число з масиву
function minNum(num){
    let min = arguments[0];
    for (const element of arguments) {
        if (element < min){
            min = element;
        }
    }
    console.log(min);
    return min;
}
minNum(1,2,3,4,5,6,7);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum(...args){
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    console.log(sum);
}
sum(25,1947);
