//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//   let element = document.createElement('div');
//    element.setAttribute('id', 'text');
//    element.style.height = '200px';
//    element.style.width = '200px';
//    element.style.background = 'red';
//     document.body.appendChild(element);
//       element.onclick = function (e){
//      let idElement = document.getElementById('text');
//      idElement.remove();
//  }
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//  let btn = document.getElementsByTagName('form')[0];
//  btn.addEventListener("click", function (){
//     let inp = document.getElementsByClassName('dif')[0].value;
//     if (inp < 18 ){
//         alert('Stop,u r to young');
//     }else{
//         alert('Pass');
//     }
//  })

//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let anotherBtn = document.getElementsByTagName('button')[0];
// anotherBtn.addEventListener('click',function (){
//     console.log(document.f1.name.value);
//     console.log(document.f1.surname.value);
//     console.log(document.f2.age.value);
//     console.log(document.f2.sex.value);
// });
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let btn = document.getElementsByTagName('button')[0];
      btn.addEventListener('click',function (){
          let rows = document.getElementById('rows').value;
          let cells = document.getElementById('cells').value;
          let inText = document.getElementById('inTxt').value;
          for (let i = 0; i < rows; i++) {
             let block = document.createElement('div');
             document.body.appendChild(block);
             block.style.width = '100%';
             block.style.height = '100px';
             block.style.display = 'flex';
             block.style.justifyContent = 'space-around';
             block.style.alignItems = 'center';
              for (let j = 0; j < cells; j++) {
                  let cell = document.createElement('div');
                  cell.innerText = inText;
                  block.appendChild(cell);
                  cell.style.backgroundColor = 'green';
                  cell.style.height = '90px';
                  cell.style.width = '200px';
                  cell.style.textAlign = 'center';
                  cell.style.display = 'flex';
                  cell.style.alignItems = 'center';
                  cell.style.justifyContent = 'center';
              }
          }
      })
