//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :
//     -- отримує текст з параграфа з id "content"
//     -- отримує текст з блоку з id "rules"
//     -- замініть текст параграфа з id 'content' на будь-який інший
//     -- замініть текст параграфа з id 'rules' на будь-який інший
//     -- змініть кожному елементу колір фону на червоний
//     -- змініть кожному елементу колір тексту на синій
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
//
let par = document.getElementById('content');
console.log(par.innerText);
par.innerText= 'HELLO';
console.log(par.innerText);
par.style.color = 'blue';
par.style.background = 'red;'
let block = document.getElementById('rules');
console.log(block.innerText);
block.innerText = 'Red car';
console.log(block.innerText);
block.style.color = 'blue';
block.style.background = 'red';
const rules = document.getElementsByClassName('fc_rules');
for (const rule of rules) {
    rule.style.color ='blue';
    rule.style.background = 'red';
    console.log(rule);
}



