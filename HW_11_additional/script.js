//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let favourites = [];
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `${user.name},
    ${user.age},
    ${user.status}
    `
    let usrBtn = document.createElement('button');
    usrBtn.innerHTML = 'Додати до улюблених';
    usrBtn.onclick = () => {
         favourites.push(user);
         localStorage.setItem('fav',JSON.stringify(favourites));
    }
    userDiv.appendChild(usrBtn);
    document.body.appendChild(userDiv);
}
let btn = document.createElement('button');
btn.innerHTML = '<a href="favourites.html">Перейти на сторінку з улюбленими людішками.</a>';
document.body.appendChild(btn);