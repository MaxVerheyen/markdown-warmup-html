let body = document.querySelector('body');
body.removeAttribute('class');
body.setAttribute('class','bg-olive');
console.log(body);

let p = document.getElementById('first-paragraph')
p.removeAttribute('class');
p.setAttribute('class', 'aqua');
console.log(p);

let silver = document.getElementsByClassName('bg-silver')[0];
silver.setAttribute('class', 'bg-teal');
console.log(silver);

let blockquote = document.querySelector('blockquote');
blockquote.setAttribute('class', 'bg-white');
console.log(blockquote);

let table = document.querySelector('table');
table.setAttribute('class', 'bg-purple');
console.log(table);

let container = document.querySelector('main');
console.log(container);
let p_in_c = container.querySelectorAll('p');
console.log(p_in_c);

p_in_c.forEach(function(e) {
    e.setAttribute('class', 'shadow');
});
console.log(p_in_c);

let pre = document.querySelector('pre');
pre.setAttribute('style','color:red;background-color:white;border-top:3px solid red;border-bottom:3px solid red;');
console.log(pre);

let h3 = document.querySelector('h3');
h3.innerHTML = '<em>Italic title ! yeah !</em>';
console.log(h3);

let h2 = document.querySelector('h2');
h2.innerHTML = "<strong>HTML doesn't work !</strong>";
console.log(h2);

let li = document.createElement("li");
li.innerHTML = "My best friend is <a href='http://www.google.com'>Google</a>";
let ul = document.querySelector('ul');
ul.appendChild(li);
li.querySelector('a').setAttribute('style','color:red');
console.log(ul);

let ol = document.querySelector('ol');
let children = Array.from(ol.children);

for (let i = 0; i < children.length; i++){
    ol.removeChild(children[i]);
};

let arr1 = ["Silent Teacher","Code Monkey", "CodeCombat"];

for (let i = 0; i < arr1.length; i++){
    let li = document.createElement('li');
    li.innerHTML = arr1[i];
    ol.appendChild(li);
};

console.log(ol);