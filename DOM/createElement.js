const div = document.createElement('div');
div.className = 'root__element';
div.id = 'id__element';
div.setAttribute('title','div element');
const text = document.createTextNode('Hello Wolrld');
div.appendChild(text);
const parent = document.querySelector('.root');
parent.appendChild(div);