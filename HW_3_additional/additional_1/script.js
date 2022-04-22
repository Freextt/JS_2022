//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
let myMass = [1,2,3,4,5];
console.log(myMass);
let myMass1 = ['cwe','pce','docn','dwjdhw','cbhsb'];
console.log(myMass1);
let myMass2 = ['wcw','cwcw',55,true,false];
console.log(myMass2);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty = [];
empty[0] = true;
empty[1] = {};
empty[2] = undefined;
empty[3] = 15;
empty[4] = 'hello';
console.log(empty);
//
//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
let numMass = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while(i < numMass.length){
    console.log(numMass[i]);
    i++;
}
for (let i = 0;i < numMass.length;i++){
    console.log(numMass[i]);
}
let x = 0;
while (x < numMass.length){
    if((numMass[x] % 3) === 0){
        console.log(numMass[x]);
    }
    x++;
}
for (let j = 0; j < numMass.length; j++) {
    if((numMass[j] % 3) === 0){
        console.log(numMass[j]);
    }
}
let f = 0;
while (f < numMass.length){
    if((numMass[f] % 2) === 0){
        console.log(numMass[f]);
    }
    f++;
}
for (let j = 0; j < numMass.length; j++) {
    if((numMass[j] % 2) === 0){
        console.log(numMass[j]);
    }
}
for (let i = 0; i < numMass.length; i++) {
    if((numMass[i] % 3) === 0){
        numMass[i] = 'okten';
    }
}
console.log(numMass);
for (let j = numMass.length - 1; j >= 0; j--) {
    console.log(numMass[j]);
}
//всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let p = numMass.length;
while (p >= 0){
    console.log(numMass[p]);
    p--;
}

for (let j = numMass.length - 1; j >= 0; j--) {
    console.log(numMass[j]);
}

let numMass1 = [2,17,13,6,22,31,45,66,100,-18];
let n = numMass1.length;
while (n >= 0){
    if ((numMass1[n] % 3) === 0){
        console.log(numMass1[n]);
    }
    n--;
}

for (let j = numMass1.length - 1; j >= 0; j--) {
    if ((numMass1[j] % 3) === 0) {
        console.log(numMass1[j]);
    }
}

let u = numMass1.length
while (u >= 0){
    if((numMass1[u] % 2) === 0){
        console.log(numMass1[u]);
    }
    u--;
}

for (let j = numMass1.length - 1; j >= 0; j--) {
    if ((numMass1[j] % 2) === 0) {
        console.log(numMass1[j]);
    }
}
for (let j = numMass1.length - 1; j >= 0; j--) {
    if((numMass1[j] % 3) === 0){
        numMass1[j] = 'okten';
    }
}
console.log(numMass1);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
let numbers = [1,2,3,4,5,6,7,8,9,10];
for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j]);
}
let strings = ['evev','fefe','ihwi','cniecn','bcuwcw','cniwhcbwu','nevie','ojqiq','cwbdknc','ciwicown'];
for (let j = 0; j < strings.length; j++) {
    console.log(strings[j]);
}
let mix = [true,false,235,{},undefined,null,'cwio',[],6857,{}];
for (let j = 0; j < mix.length; j++) {
    console.log(mix[j]);
}
let mixed = [true,false,58347,324,83487,'vhruvr','vrnruvjrn',0,1,'ncecn'];
for (let j = 0; j < mixed.length; j++) {
    if(typeof mixed[j] === "boolean"){
        console.log(mixed[j]);
    }
}

for (let j = 0; j < mixed.length; j++) {
    if(typeof mixed[j] === "number"){
        console.log(mixed[j]);
    }
}

for (let j = 0; j < mixed.length; j++) {
    if(typeof mixed[j] === "string"){
        console.log(mixed[j]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
let empty2 = [];
empty2[0] = 1;
empty2[1] = true;
empty2[2] = [];
empty2[3] = {};
empty2[4] = 'fiecnei';
empty2[5] = 427934;
empty2[6] = 'fejnce';
empty2[7] = undefined;
empty2[8] = 42783;
empty2[9] = null;
console.log(empty2);
for (let j = 0; j < 10; j++) {
    document.write(` ${[j]}`);
    console.log([j]);
}
for (let a = 0; a < 100; a++) {
    document.write(` ${[a]}`);
    console.log([a]);
}
for (let q = 0; q < 100; q+=2) {
    document.write(` ${[q]}`);
    console.log([q]);
}
for (let w = 0; w < empty2.length; w++) {
    if(([w] % 2) === 0){
        document.write(` ${[w]}`);
        console.log([w]);
    }
}
for (let e = 0; e < 100; e++) {
    if (([e] % 3) === 0) {
        document.write(` ${[e]}`);
        console.log([e]);
    }
}