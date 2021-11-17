let list = document.getElementById('liste-commissions');
let text = document.getElementById('button');
let submit = document.getElementById('button');
let supprimer = document.getElementById('delete');

submit.addEventListener("click", function (){
    let create = document.createElement('li');
    create.innerHTML = text.value;
    list.appendChild(create);
});

supprimer.addEventListener('click', function (){
    list.lastChild.remove();
})