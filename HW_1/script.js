//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write
let greetings = "Hello";
console.log(greetings);
alert(greetings);
document.write(greetings);
let okten = "owu";
console.log(okten);
alert(okten);
document.write(okten);
let str = "com";
console.log(str);
alert(str);
document.write(str);
let str1 = "ua";
console.log(str1);
alert(str1);
document.write(str1);
let num = 1;
console.log(num);
alert(num);
document.write(`${num}`);
let num1 = 10;
console.log(num1);
alert(num1);
document.write(`${num1}`);
let num2 = -999;
console.log(num2);
alert(num2);
document.write(`${num2}`);
let num3 = 123;
console.log(num3);
alert(num3);
document.write(`${num3}`);
let num4 = 3.14;
console.log(num4);
alert(num4);
document.write(`${num4}`);
let num5 = 2.7;
console.log(num5);
alert(num5);
document.write(`${num5}`);
let num6 = 16;
console.log(num6);
alert(num6);
document.write(`${num6}`);
let bool = true;
console.log(bool);
alert(bool);
document.write(`${bool}`);
let bool1 = false;
console.log(bool1);
alert(bool1);
document.write(`${bool1}`);
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
let book = {
    name: "Safari for orcs",
    pages: 1000,
    genre: "Adventure"
}
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)
let book1 = {
    name: "Polter",
    pages: 1500,
    genre: "Fantasy",
    authors: ["Paul Dickson", "Marge Simpson", "Bob"]
}
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Kolya';
let middleName = 'Vasilyovich';
let lastName = 'Strange';
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let name = prompt('Enter your name');
let midName = prompt('Enter your middle name');
let lastNAme = prompt('Enter your last name');
console.log(`${name} ${midName} ${lastNAme}`);
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
    {name:"fjcnew",page: 1487,genre:"Fantasy",authors: ['poldnc','chwbcwhb','cwnjcwjnc']},
    {name:"dej",page: 51561,genre:"Adventure",authors: ['veeve','chwbvevecwhb','vever']},
    {name:"okciwo",page: 1655515,genre:"Drama",authors: ['cwcewcw','cecer','kvimm']}
]
console.log(books);


