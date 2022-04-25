//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let empty = [];
for (let i = 0; i < 50; i++) {
    empty[i] = 2 * i;
}
console.log(empty);
let empty1 = [];
for (let i = 0; i < 50; i++) {
    empty1[i] = 2 * i + 1;
}
console.log(empty1);
let empty2 = [];
for (let i = 0; i < 20; i++) {
    empty2[i] = Math.round(Math.random() * 20);
}
console.log(empty2);
let empty3 = [];
for (let i = 0; i < 20; i++) {
    empty3[i] = Math.round(Math.random() * (732 - 8) + 8);
}
console.log(empty3);
//  2. Вивести за допомогою console.log кожен третій елемен
//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let newArray = [1, 2, 4, 5, 7, 10, 56, 8, 68];
for (let i = 0; i < newArray.length; i++) {
    if ((i + 1) % 3 === 0) {
        console.log(newArray[i]);
    }
}
for (let i = 0; i < newArray.length; i++) {
    if ((i + 1) % 3 === 0) {
        if (newArray[i] % 2 === 0) {
            let myArray = newArray[i];
            console.log(myArray);
        }
    }
}
let outArray = [];
let index = 0;
for (let i = 0; i < newArray.length; i++) {
    if ((i + 1) % 3 === 0) {
        if (newArray[i] % 2 === 0) {
            console.log(newArray[i]);
            outArray[index] = newArray[i];
            index++;
        }
    }
}
console.log(outArray);


//
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (const userKey of usersWithId) {
    for (const citiesWithIdKey of citiesWithId) {
        if (userKey.id === citiesWithIdKey.user_id) {
            userKey.adress = citiesWithIdKey;
        }
    }
}
console.log(usersWithId);

//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]


//
//
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
let newArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < newArray1.length; i++) {
    if ((newArray1[i] % 2) === 0) {
        console.log(newArray1[i]);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
let newArray3 = [];
let ind = 0;
for (let i = 0; i < newArray1.length; i++) {
    newArray3[ind] = newArray1[i];
    ind++;
}
console.log(newArray3);
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let letters = ['a','b','c'];
let word = '';
for (let i = 0; i < letters.length; i++) {
   word += letters[i];
}
console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let word2 = '';
let i = 0;
while (i < letters.length){
    word2 += letters[i];
    i++;
}
console.log(word2);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let word3 = '';
for (const element of letters) {
    word3 += element;
}
console.log(word3);