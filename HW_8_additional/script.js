//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let select = document.querySelector('*');
let newARR = [];
function recurs(ar){
    let item = ar.children;
    for (const element of item) {
        if(element.classList.value){
            for (let i = 0; i < element.classList.length; i++) {
                if (!newARR.includes(element.classList[i])) {
                    newARR.push(element.classList[i]);
                }
            }
        }
     recurs(element);
    }
}
recurs(select);
console.log(newARR);
//
let numArr = [1231,452537,253475,[517534163],246684526,[4628746,[4264528]],42678426];
let newArr = [];
function numBack(arr){
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number'){
            newArr.push(arr[i]);
        }
        else {
            numBack(arr[i]);
        }
    }
}
numBack(numArr);
console.log(newArr);



