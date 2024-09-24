import { Tool } from "./Tool.js";

class Eraser extends Tool {
  mouseDown() {
    console.log("Eraser icon");
  }
  mouseUp() {
    console.log("Erase something...");
  }
}

export default Eraser;
