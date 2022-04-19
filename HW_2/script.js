//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +prompt('Enter your number');
a = x;
if (a !== 0){
    console.log('Вірно');
}else{
    console.log('Не вірно');
}
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.round(Math.random() * 59);
if (time >= 0 && time <= 15){
    console.log('1 part');
}else if(time > 15 && time <= 30){
    console.log('2 part');
}else if(time > 30 && time <= 45){
    console.log('3 part');
}else{
    console.log('4 part');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = Math.round(Math.random() * (31 - 1) + 1);
if (day > 0 && day <= 10){
    console.log(day);
}else if (day > 10 && day <= 20){
    console.log(day);
}else if (day > 20 && day <= 31){
    console.log(day);
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let schedule = +prompt('Введіть порядковий номер дня тижня');
switch (schedule){
    case 1:
        console.log('Swimming');
        break;
    case 2:
        console.log('Learn');
        break;
    case 3:
        console.log('Ride a bike');
        break;
    case 4:
        console.log('Buy new car');
        break;
    case 5:
        console.log('Cleaning');
        break;
    case 6:
        console.log('Hang out with gf');
        break;
    case 7:
        console.log('Meditation');
        break;
    default:
        console.log('There is no day with this number in week');
}
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let num1 = +prompt('Введіть перше число');
let num2 = +prompt('Введіть друге число');
if (num1 > num2 || num1 < num2) {
    console.log(Math.max(num1, num2));
}else if (num1 === num2){
    console.log('Equal');
}