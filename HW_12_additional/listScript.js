let block = document.createElement('div');
let txt = JSON.parse(localStorage.getItem('products'));
for (const element of txt) {
    let par = document.createElement('div');
    par.innerHTML = `Name: ${element.name},
    Quantity: ${element.quantity},
    Price: ${element.price},
    Image: <img src="${element.image}" alt="">
    `;
    let btn = document.createElement('button');
    btn.setAttribute('id','deleteOneProduct');
    btn.innerText = 'Delete';
    btn.addEventListener('click', function (){
        par.remove();
        txt.splice(element, 1);
        localStorage.setItem('products',JSON.stringify(txt));
    })
    par.appendChild(btn);
    block.appendChild(par);
}
let deleter = document.getElementById('delete_all');
deleter.addEventListener('click',function (){
    localStorage.removeItem('products');
    document.body.remove();
})
document.body.appendChild(block);