//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutString(str,n){
    let newStr = [];
    for (let i = 0; i < str.length; i += n) {
         newStr.push(str.slice(i, i + n));
    }
    return newStr;
}
document.write(cutString("насолода",3));
document.write('<br>');
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let deleter = (str,len) => str.substring(0,len);
document.write(deleter('Каждый охотник желает знать',5));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
document.write('<br>');
let insert = (str) => str.replaceAll(' ','-').toUpperCase();
document.write(insert(str));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
document.write('<br>');
let up = (text) => {
    let char = text[0].toUpperCase();
    return text.replace(text[0], char);
}
console.log(up('hello'));

// - Дано список імен.
     let n1 = 'Harry..Potter'
 let n2 = 'Ron---Whisley'
 let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
let validator = (txt) => {
    let replacer = txt.replaceAll('..',' ')
    .replaceAll('---',' ')
        .replaceAll('__',' ');
    return replacer;
}
console.log(validator(n1));
console.log(validator(n2));
console.log(validator(n3));
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let rand = () => {
    let newArr = [];
    for (let i = 0; i < 5; i++) {
         newArr.push(Math.round(Math.random()* 100));
    }
    return newArr;
}
console.log(rand());
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(rand().sort((a,b) => a - b));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
console.log(rand().filter(item => item !==0 && item % 2 ===0));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capatilize = (str) => str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
console.log(capatilize('dog cat meow something'));
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//Help me pls

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
 let coursesArray = [
    {
         title: 'JavaScript Complex',
         monthDuration: 5,
         hourDuration: 909,
         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
     },
     {
         title: 'Java Complex',
         monthDuration: 6,
         hourDuration: 909,
         modules: ['html',
             'css',
             'js',
             'mysql',
             'mongodb',
             'angular',
             'aws',
             'docker',
             'git',
             'java core',
             'java advanced']
     },
     {
         title: 'Python Complex',
         monthDuration: 6,
         modules: ['html',
             'css',
             'js',
             'mysql',
             'mongodb',
             'angular',
             'aws',
             'docker',
             'python core',
             'python advanced']
     },
     {
         title: 'QA Complex',
         monthDuration: 4,
         hourDuration: 909,
         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
     },
     {
         title: 'FullStack',
         monthDuration: 7,
         hourDuration: 909,
         modules: ['html',
             'css',
             'js',
             'mysql',
             'mongodb',
             'react',
             'angular',
             'aws',
             'docker',
             'git',
             'node.js',
             'python',
             'java']
     },
     {
         title: 'Frontend',
         monthDuration: 4,
         hourDuration: 909,
         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
     }
 ];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
console.log(coursesArray.sort((a,b) => b.modules.length - a.modules.length));
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
     let symb = "о", str1 = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
let count = (str,stringsearch) => {
    let j = 0;
    let mass = str.toLowerCase().split('');
    for (let i = 0; i < mass.length; i++) {
        if(mass[i] === stringsearch){
            j++;
        }
    }
    return j;
}
console.log(count(str1,symb));
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
     let str3 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
let spl = (str,n) => {
    let qwe = str.split(' ');
     return qwe.splice(0,n)};
console.log(spl(str3, 5));
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню
let books= [
    {
        name: 'dnwjndw',
        pages: 342,
        authors: ['cwbvcw','vnebhe','vebve'],
        genre: 'fantasy'
    },
    {
        name: 'wfwofjwo',
        pages: 426,
        authors: ['wconw','cwhb'],
        genre: 'drama'
    },
    {
        name: 'opvevo',
        pages: 231,
        authors: ['dwkjdwo','dwjndw','kdwmodmw','chuwon'],
        genre: 'comedy'
    },
    {
        name: 'fkwmk',
        pages: 879,
        authors: ['mcwnwjn'],
        genre: 'horror'
    }
]
let pages = books.sort((a,b) => b.pages - a.pages);
console.log(pages[0]);
let genre = books.sort((a,b)=> b.genre.length - a.genre.length);
console.log(genre[0]);
let name = books.sort((a,b)=> b.name.length - a.name.length);
console.log(name[0]);
let authors = books.filter(item => item.authors.length === 2);
console.log(authors);
let author = books.filter(item => item.authors.length === 1);
console.log(author);
let grow = books.sort((a,b)=> a.pages - b.pages);
console.log(grow);



