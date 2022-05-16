//Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
let someDIv = document.createElement('div');
someDIv.classList.add('wrap','collapse','alpha','beta');
document.body.appendChild(someDIv);
someDIv.innerText = 'Okten';
someDIv.style.color = 'green';
let cloneDiv = someDIv.cloneNode(true);
document.body.appendChild(cloneDiv);
// - Є масив:
let menu = ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
let list = document.getElementsByClassName('menu')[0];
for (const item of menu) {
    let li = document.createElement('li');
    li.innerText = `${item}`;
    list.appendChild(li);
}

// - Є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const element of coursesAndDurationArray) {
    let item = document.createElement('div');
    item.classList.add('item');
    let hea = document.createElement('h1');
    hea.classList.add('heading');
    item.appendChild(hea);
    let par = document.createElement('p');
    par.classList.add('description');
    hea.appendChild(par);
    par.innerText = `${element.title} duration: ${element.monthDuration}`;
    document.body.appendChild(item);
}