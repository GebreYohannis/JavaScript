import Editor from "./Editor.js";
import History from "./History.js";

const editor = new Editor();
editor.setContent("a");

const history = new History();
history.push(editor.createState());
editor.setContent("b");
history.push(editor.createState());
editor.setContent("c");
history.push(editor.createState());
editor.setContent("d");
history.push(editor.createState());

editor.restore(history.pop());
editor.restore(history.pop());

console.log(editor.getContent());

history.log();
