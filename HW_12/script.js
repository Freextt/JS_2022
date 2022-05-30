//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//         for (const post of posts) {
//             let main = document.createElement('div');
//             let usrId = document.createElement('p');
//             usrId.innerText = `${post.userId}`;
//             let iD = document.createElement('p');
//             iD.innerText = `${post.id}`;
//             let ttl = document.createElement('p');
//             ttl.innerText = `${post.title}`;
//             let bd = document.createElement('p');
//             bd.innerText = `${post.body}`;
//             main.append(usrId,iD,ttl,bd);
//             main.classList.add('post');
//             document.body.appendChild(main);
//         }
//     })
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(comments => {
    for (const comment of comments) {
        let divMain  = document.createElement('div');
        let iD = document.createElement('h4');
        iD.innerText = `${comment.id}`;
        let comName = document.createElement('p')
        comName.innerText = `${comment.name}`;
        let mail = document.createElement('p');
        mail.innerText = `${comment.email}`;
        let bod = document.createElement('p');
        bod.innerText = `${comment.body}`;
        divMain.append(iD,comName,mail,bod);
        document.body.appendChild(divMain);
    }
})