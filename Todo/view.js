
import { Controller } from "./controller.js";
import { Model } from "./model.js";
export class View {
     render() {
        const model = new Model();
        let rootElement = document.querySelector('#root');
        
        const todoItem = model.todos[todos.length-1];
        
        const todoName = model.createTodoName(todoItem);
        const todoDate = model.createTodoDate(todoItem);
        const deleteButton = model.createDeleteBtn(todoItem);
    
        const element = model.createElement();
        element.appendChild(todoName);
        element.appendChild(todoDate);
        element.appendChild(deleteButton);
        rootElement.appendChild(element);
        
        const controler = new Controller();
        deleteButton.addEventListener('click',controler.deletTodo);
    }
}