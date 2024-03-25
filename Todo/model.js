
import { View } from "./view.js";
export class Model {
    constructor() {
        this.todos = [{title:'Make dinner',
        dueDate:'2024-12-04',
        id:'ets17'}];
        this.view = new View();
        this.view.render()
    }
    
     createTodo(title,dueDate) {
        const id = String(new Date().getTime());
        this.todos.push({
            title:title,
            dueDate:dueDate,
            id:id
        });
    }
    
     createTodoName(todoItem) {
        let todoName = document.createElement('p');
        todoName.classList.add('todo-name');
        todoName.innerText = todoItem.title;
        return todoName;
    }
    
     createTodoDate(todoItem) {
        let todoDate = document.createElement('p');
        todoDate.classList.add('todo-date');
        todoDate.innerText = todoItem.dueDate;
        return todoDate;
    }
    
     createElement() {
        let element = document.createElement('div');
        element.classList.add('container');
        return element;
    }
    
     createDeleteBtn(todoItem) {
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'btn-delete';
        deleteButton.id = todoItem.id;
        return deleteButton;
    }
    
     removeTodo(idToDelete) {
        this.todos = this.todos.filter(todo => {
            if(todo.id !== idToDelete)  
              return true;    
            else
                document.querySelectorAll('.container')[this.todos.indexOf(todo)].remove();
          });
    }
}