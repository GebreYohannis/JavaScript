
// Model --> manage the data

let todos = [
    {title:'Make dinner',dueDate:'2024-12-04',id:'ets17'}
];
render();

function createTodo(title,dueDate) {
    const id = String(new Date().getTime());
    todos.push({
        title:title,
        dueDate:dueDate,
        id:id
    });
}

function createTodoName(todoItem) {
    let todoName = document.createElement('p');
    todoName.classList.add('todo-name');
    todoName.innerText = todoItem.title;
    return todoName;
}

function createTodoDate(todoItem) {
    let todoDate = document.createElement('p');
    todoDate.classList.add('todo-date');
    todoDate.innerText = todoItem.dueDate;
    return todoDate;
}

function createElement() {
    let element = document.createElement('div');
    element.classList.add('container');
    return element;
}

function createDeleteBtn(todoItem) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'btn-delete';
    deleteButton.id = todoItem.id;
    return deleteButton;
}

function removeTodo(idToDelete) {
    todos = todos.filter(todo => {
        if(todo.id !== idToDelete)  
          return true;    
        else
            document.querySelectorAll('.container')[todos.indexOf(todo)].remove();
      });
}

// Controller --> link the model and the view
function deletTodo(event) {
    const deleteBtn = event.target;
    const idToDelete = deleteBtn.id;
    removeTodo(idToDelete);
}

function AddTodo() {
    let inputBox = document.querySelector('.input');
    const datePicker = document.querySelector('.date');
    let title = inputBox.value;
    const dueDate = datePicker.value;

    if( title ==="") {
        return;
    }
    else {
    createTodo(title,dueDate);
        render();
    }
}

// View  --> render the data on the web page
function render() {

    let rootElement = document.querySelector('#root');
  
    const todoItem = todos[todos.length-1];
    
    const todoName = createTodoName(todoItem);
    const todoDate = createTodoDate(todoItem);
    const deleteButton = createDeleteBtn(todoItem);

    const element = createElement();
    element.appendChild(todoName);
    element.appendChild(todoDate);
    element.appendChild(deleteButton);
    rootElement.appendChild(element);
    
    deleteButton.addEventListener('click',deletTodo);
}
let btn = document.querySelector('.btn');
btn.addEventListener('click',AddTodo); 


