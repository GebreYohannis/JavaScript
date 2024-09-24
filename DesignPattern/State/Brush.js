import { Tool } from "./Tool.js";
class Brush extends Tool {
  mouseDown() {
    console.log("Brush icon");
  }

  mouseUp() {
    console.log("Draw a line.");
  }
}

export default Brush;
