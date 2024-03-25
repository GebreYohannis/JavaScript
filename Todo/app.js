import { Controller } from "./controller.js";
import { Model } from "./model.js";
import { View } from "./view.js";

const controler = new Controller();
let btn = document.querySelector('.btn');
btn.addEventListener('click',Controller.addTodo); 
