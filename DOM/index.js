
// document.getElementById()
let output;

output = document.getElementById('id-form');
output = document.getElementById('id-form').id;

document.getElementById('id-form').className = 'form';
output = document.getElementsByClassName('form');
output = document.getElementsByTagName('form');

let setAttribute = document.getElementById('id-form');
output = setAttribute.setAttribute('method','POST');
// console.log(output);

const showPassword = document.querySelector('#password');
document.querySelector('#submit').addEventListener('click',() => {
    if(showPassword.type === "password")
        showPassword.type = 'text';
    else
        showPassword.type = 'password';
});

const firstItem = document.querySelector('li');
firstItem.style.backgroundColor = 'darkcyan';

const thirdItem = document.querySelector('li:nth-child(3)');

thirdItem.style.backgroundColor = 'deepskyblue';
// console.log(thirdItem)
thirdItem.innerText = 'Lemon';
thirdItem.style.color = 'white';
thirdItem.style.fontSize = '2rem';
thirdItem.style.paddingLeft = '3rem';

const list = document.querySelector('ul');

// list.style.background = 'radial-gradient(dodgerblue,darkcyan,deeppink)';
// console.log(list);

const firstListItem = list.querySelector('li');
firstListItem.style.color = 'blue';
firstListItem.style.background = 'white';

const listItems = document.querySelectorAll('.list__item');

// console.log(listItems);

// listItems[0].style.color = 'red';

// listItems.forEach((item,index) => {
//     item.style.color = 'red';
//     if(index === 0)
//         item.remove();
// });

// const listItems2 = document.getElementsByClassName('list__item');

// console.log(listItems2);
// const listItemArray = Array.from(listItems2);
// listItemArray.forEach(item => {
//     console.log(item);
// });

// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3);
// const  listItemsArray2 = Array.from(listItems3);
// listItemsArray2.forEach(item => {
//     console.log(item);
// });

// Element Node
let domOutput;
let parent = document.querySelector('.parent');
domOutput = parent.children;

domOutput = parent.children[1].innerText = 'Child Two';

parent.style.backgroundColor = 'dodgerblue';
parent.style.fontSize = '2rem';
parent.children[1].style.color = 'white';

domOutput = parent.firstElementChild;
domOutput = parent.firstElementChild.textContent = 'First Child';

domOutput = parent.lastElementChild;
domOutput = parent.lastElementChild.textContent = 'Child Three';

domOutput = parent.children[0].nextElementSibling;
domOutput = parent.children[1].nextElementSibling;
domOutput = parent.children[2].nextElementSibling; // null

domOutput = parent.children[2].previousElementSibling;
domOutput = parent.children[1].previousElementSibling.innerText = 'Child One';

domOutput = parent.children[1].parentElement;

const child  = document.querySelector('.child');
domOutput = child;
child.parentElement.style.borderRadius = '10px'
child.parentElement.style.border = '2px solid #ccd';
child.parentElement.style.textAlign = 'center';

// Text Nodes

domOutput = parent.childNodes;

console.log(domOutput);
