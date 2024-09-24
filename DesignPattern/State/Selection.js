import { Tool } from "./Tool.js";
class Selection extends Tool {
  mouseDown() {
    console.log("Selection icon");
  }
  mouseUp() {
    console.log("Draw dashed rectangle.");
  }
}

export default Selection;
