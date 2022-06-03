//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(respond => respond.json())
//     .then(users => {
//         for (const user of users) {
//             let usrDiv = document.createElement('p');
//             usrDiv.innerHTML = `
//             ID : ${user.id},
//             NAME: ${user.name},
//             USERNAME: ${user.username},
//             EMAIL: ${user.email},
//             ADDRESS: ${user.address.street},
//              ${user.address.suite},
//              ${user.address.city},
//              ${user.address.zipcode},
//              ${user.address.geo.lat},
//              ${user.address.geo.lng},
//              PHONE: ${user.phone},
//              WEBSITE: ${user.website},
//              COMPANY: ${user.company.name},
//              ${user.company.catchPhrase},
//              ${user.company.bs}
//             `;
//             let usrBtn = document.createElement('button');
//             usrBtn.innerText = 'Click';
//             usrBtn.onclick = function (){
//                 fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
//                     .then(response =>  response.json())
//                     .then(posts => {
//                         for (const post of posts) {
//                             let userId = document.createElement('p');
//                             userId.innerText = `User ID: ${post.userId}`;
//                             let id = document.createElement('p');
//                             id.innerText = `ID: ${post.id}`;
//                             let ttle = document.createElement('p');
//                             ttle.innerText = `Title: ${post.title}`;
//                             let main = document.createElement('p');
//                             main.innerText = `Body: ${post.body}`;
//                             let postBtn = document.createElement('button');
//                             postBtn.innerText = 'Click';
//                             postBtn.onclick = function (){
//                                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                                     .then(response => response.json())
//                                     .then(comments => {
//                                         for (const comment of comments) {
//                                             let pstId = document.createElement('p');
//                                             pstId.innerText = `${comment.postId}`;
//                                             let id = document.createElement('p');
//                                             id.innerText = `${comment.id}`;
//                                             let name = document.createElement('p');
//                                             name.innerText = `${comment.name}`
//                                             let email = document.createElement('p');
//                                             email.innerText = `${comment.email}`;
//                                             let body = document.createElement('p');
//                                             body.innerText = `${comment.body}`;
//                                             main.append(pstId,id,name,email,body);
//                                         }
//                                     })
//                             }
//                             usrDiv.append(userId,id,ttle,main,postBtn);
//                         }
//                     })
//             }
//             usrDiv.appendChild(usrBtn);
//             document.body.appendChild(usrDiv);
//         }
//     })
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (const post of posts) {
//             let innerDiv = document.createElement('div');
//             innerDiv.innerHTML = `
//             ${post.userId},
//             ${post.id},
//             ${post.title},
//             ${post.body}
//             `
//             let btn3 = document.createElement('button');
//             btn3.innerText = 'Click';
//             btn3.onclick = function (){
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                     .then(response => response.json())
//                     .then(comments => {
//                         for (const comment of comments) {
//                             let comDiv = document.createElement('div');
//                             comDiv.innerHTML = `
//                             ${comment.postId},
//                             ${comment.id},
//                             ${comment.name},
//                             ${comment.email},
//                             ${comment.body}
//                             `
//                             innerDiv.appendChild(comDiv);
//                         }
//                     })
//             }
//             document.body.append(innerDiv,btn3);
//         }
//     })
//
// - Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let form = document.getElementsByName('product')[0];
let arr = [];
form.onsubmit = (e) => {
    e.preventDefault();
    let product_name = document.getElementsByName('product_name')[0];
    let product_quantity = document.getElementsByName('product_quantity')[0];
    let product_price = document.getElementsByName('product_price')[0];
    let product_image = document.getElementsByName('product_image')[0];
    let product = {
        name : product_name.value,
        quantity : product_quantity.value,
        price : product_price.value,
        image : product_image.value
    }
    arr.push(product);
    localStorage.setItem('products',JSON.stringify(arr));
}