import { Model } from "./model.js";
import { View } from "./view.js";
export class Controller {
    #model = new Model();
     deletTodo(event) {
        const deleteBtn = event.target;
        const idToDelete = deleteBtn.id;
        this.#model.removeTodo(idToDelete);
    }
    
     AddTodo() {
        let inputBox = document.querySelector('.input');
        const datePicker = document.querySelector('.date');
        let title = inputBox.value;
        const dueDate = datePicker.value;
        const view = new View();
        if( title ==="") {
            return;
        }
        else {
        this.#model.createTodo(title,dueDate);
            view.render();
        }
    }
}