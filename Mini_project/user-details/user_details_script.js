let usr = JSON.parse(localStorage.getItem('user'));
let itemBlock = document.createElement('div');
itemBlock.setAttribute('id','user_details');
itemBlock.innerHTML = `
            ID:${usr.id},
            NAME:${usr.name},
            UserName:${usr.username},
            Email:${usr.email},
          Address:
            Street:${usr.address.street},
            Suite:${usr.address.suite},
            City:${usr.address.city},
            ZipCode:${usr.address.zipcode},
          Geo:
            lat:${usr.address.geo.lat},
            lng:${usr.address.geo.lng}
            `
let btn = document.createElement('button');
btn.innerText = 'Post of current user';
btn.setAttribute('id','user_details_button');
let wrapper = document.createElement('div');
wrapper.setAttribute('id','wrap');
btn.addEventListener('click',function (){
    fetch(`https://jsonplaceholder.typicode.com/users/${usr.id}/posts`)
        .then(respond => respond.json())
        .then(posts => {
            for (const post of posts) {
             let postBlock = document.createElement('div');
             postBlock.innerText = `${post.title}`;
             let btn = document.createElement('button');
             btn.innerHTML = '<a style="text-decoration: none" href="../post-details/post_details.html">Click</a>';
             btn.onclick = () => {
                 localStorage.setItem('post',JSON.stringify(post));
             }
             postBlock.appendChild(btn);
             wrapper.appendChild(postBlock)
             document.body.append(wrapper);
            }
        })
})
document.body.append(itemBlock,btn);


