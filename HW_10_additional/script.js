//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
//
// let badWords = ['fuck u','bitch','sucker',
//     'motherfucker','shut the fuck up','dick',
//     'dickhead','moron','retard','idiot','minger',
//     'arse','git','son of a bitch','asshole','shit',
//     'whore','bint','bullshit','bastard','fuckface'
// ];
// let btn = document.getElementsByTagName('button')[0];
// btn.addEventListener('click',function (){
//     let wrd = document.getElementById('censorShip').value;
//     for (const word of badWords) {
//        if(wrd === word){
//            alert('Be nice!');
//        }
//     }
// })

//
// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
//
// let badWords = ['fuck u','bitch','sucker',
//     'motherfucker','shut the fuck up','dick',
//     'dickhead','moron','retard','idiot','minger',
//     'arse','git','son of a bitch','asshole','shit',
//     'whore','bint','bullshit','bastard','fuckface'
// ];
//
// let btn1 = document.getElementsByTagName('button')[0];
// btn1.addEventListener('click' , function (){
//     let getFromInp = document.getElementById('censorString').value;
//     for (const badWord of badWords) {
//         if(getFromInp.includes(badWord)){
//             alert('Be nice!');
//         }else{
//             alert('Kk,pass');
//             break;   //кастиль мабуть.Якщо так плз покажіть як би мало бути правильно
//         }
//     }
// });
//
//
//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let menu = document.createElement('div');
// menu.innerText = 'MENU';
// menu.style.width = '100%';
// menu.style.background = 'green';
// menu.style.height = '200px';
// let btn = document.createElement('button');
// btn.innerText = 'Click';
// document.body.append(menu,btn);
// btn.onclick = function (){
//     menu.classList.toggle('menu');
// }
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
// for (const comment of comments) {
//    let com = document.createElement('div');
//    let tit = document.createElement('div');
//    tit.innerText = `${comment.title}`;
//    let bod = document.createElement('div');
//    bod.innerText = `${comment.body}`;
//    let btn = document.createElement('button');
//    btn.innerText = 'Hide';
//    com.append(tit,bod,btn);
//    com.style.display = 'flex';
//    document.body.appendChild(com);
//    btn.onclick = function (){
//        bod.classList.toggle('bd');
//    }
// }
//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let btn2 = document.createElement('button');
// btn2.innerText = 'Click';
// document.body.appendChild(btn2);
// btn2.addEventListener('click',function (){
//     btn2.style.display = 'none';
// })

//
//
//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//  Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
//  *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан