let post = JSON.parse(localStorage.getItem('post'));
let itemBlock = document.createElement('div');
itemBlock.setAttribute('class','itemBlockWrap');
let mainInfo = document.createElement('div');
mainInfo.setAttribute('id','mainInfo');
mainInfo.innerHTML = `
  UserID:${post.userId},
  ID:${post.id},
  Title:${post.title},
  Body:${post.body}
`
itemBlock.appendChild(mainInfo);
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(respond => respond.json())
    .then(comments => {
        for (const comment of comments) {
            let commentBlock = document.createElement('div');
            commentBlock.innerHTML = `
            PostID:${comment.postId},
            ID:${comment.id},
            Name:${comment.name},
            Email:${comment.email},
            Body:${comment.body}
            `
            itemBlock.appendChild(commentBlock);
        }
    })
document.body.appendChild(itemBlock);