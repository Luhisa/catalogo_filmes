//MINIMO DE PRODUTOS (1):
let modalQt = 1
//

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

// Listagem dos modelos

modeloJson.map((item, index) => {
    let modeloItem = c('.models .modelo-item').cloneNode(true);

    modeloItem.setAttribute('data-key', index);

    modeloItem.querySelector('.modelo-item-img img').src = item.img;
    modeloItem.querySelector('.modelo-item-name').innerHTML = item.name;
    modeloItem.querySelector('.modelo-item-desc').innerHTML = item.description;
    modeloItem.querySelector('.a-link').href = item.link;

        c('.modelo-area').append(modeloItem);
});