//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
//
// let frm = document.getElementsByTagName('form')[0];
// let name = document.getElementsByName('nameInp')[0];
// let age = document.getElementsByName('ageInp')[0];
// frm.onsubmit = function (){
//     localStorage.setItem('name', JSON.stringify(name.value));
//     localStorage.setItem('age',JSON.stringify(age.value));
// }
// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let frm2 = document.getElementsByTagName('form')[0];
let mdl = document.getElementsByName('model')[0];
let tpe = document.getElementsByName('type')[0];
let vlm = document.getElementsByName('volume')[0];
frm2.onsubmit = function (){
    let myARR = [mdl.value,tpe.value,vlm.value];
    localStorage.setItem('myARR',JSON.stringify(myARR));
}
