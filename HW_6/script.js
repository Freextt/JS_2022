//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
let bigStr = 'HELLO WORLD';
let bigStr2 = 'LOREM IPSUM';
let bigStr3 = 'JAVASCRIPT IS COOL';
console.log(str.length, str2.length, str3.length);
console.log(str.toUpperCase(), str2.toUpperCase(), str3.toUpperCase());
console.log(bigStr.toLowerCase(), bigStr2.toLowerCase(), bigStr3.toLowerCase());
let newStr = " dirty string ";
console.log(newStr.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {
    return str.split();
}

console.log(stringToArray('Ревуть воли як ясла повні'));
//
//
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let newArr = array.map((item) => item.toString());
console.log(newArr);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortAsc = nums.sort((item1, item2) => item1 - item2);
console.log(sortAsc);
let sortDesc = nums.sort((num1, num2) => num2 - num1);
console.log(sortDesc);
//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let sorter = coursesAndDurationArray.sort(function(a, b) {
    return b.monthDuration - a.monthDuration;
});
console.log(sorter);
let filtr = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
console.log(filtr);
// описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let deck = [];
function deckCreator(deck)
{
    let colors = ['black', 'red'];
    let valueCards = ['6','7','8','9','10','jack','queen','king','ace'];

    for(const color of colors)
    {
        let suits  =[];
        if(color === 'black')
        {
            suits.push('spades');
            suits.push('clubs');
        }
        else
        {
            suits.push('diamonds');
            suits.push('hearts');
        }
        for(const suit of suits)
        {
            for(const valueCard of valueCards)
            {
                let card =  { cardSuit: suit, color: color, value: valueCard};
                deck.push(card);
            }
        }
        let jocker = { cardSuit: 'none', color: color, value: 'jocker'};
        deck.push(jocker);
    }
    return deck;
}
deckCreator(deck);
console.log(deck);
console.log(deck.filter((item) => {
    if (item.cardSuit === 'spades' && item.value === 'ace'){
        return item;
    }
}))
console.log(deck.filter(card => card.value === '6'));
console.log(deck.filter(card => card.color === 'red'));
console.log(deck.filter(card => card.cardSuit === 'diamonds'));
console.log(deck.filter(card => card.cardSuit === 'clubs' && (card.value >= '9'||card.value === '10')));
//let hightCards = ['9','10','jack','queen','king','ace'];
//let clubs = deck.filter( card => card.cardSuit ==='clubs'&& hightCards.includes(card.value));
//console.log(clubs);


