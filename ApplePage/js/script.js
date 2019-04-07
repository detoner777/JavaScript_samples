//let li = document.getElementsByClassName("menu-item");
let menu = document.querySelector(".menu");
let li = document.createElement('li');
    text = document.createTextNode('Пятый елемент');
    li.classList.add('menu-item');
    menu.appendChild(li);
    li.appendChild(text);

let column = document.querySelectorAll('.column');  
let title = document.querySelector('.title');
let div = document.createElement('div');
textDab = document.createTextNode('Мы продаем только подлинную технику Apple');
div.classList.add("title"); 
div.appendChild(textDab);
column[1].replaceChild(div, title);

let adv = document.querySelector('.adv');
column[1].removeChild(adv);

/*let prompt = document.querySelector('.prompt');
let userUsk = prompt("Как вы относитесь к Яблочной технике?");
let 
