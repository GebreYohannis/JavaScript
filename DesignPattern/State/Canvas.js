import { Tool } from "./Tool.js";
export class Canvas {
  #curentTool = new Tool();
  mouseDown() {
    // if (this.#curentTool === toolType.selection) console.log("Selection icon");
    // else if (this.#curentTool === toolType.brush) console.log("Brush icon");
    // else if (this.#curentTool === toolType.eraser) console.log("Eraser icon");

    this.#curentTool.mouseDown();
  }

  mouseUp() {
    //     if (this.#curentTool === toolType.selection)
    //       console.log("Draw dashed rectangle.");
    //     else if (this.#curentTool === toolType.brush) console.log("Draw a line.");
    //     else if (this.#curentTool === toolType.eraser)
    //       console.log("Eraser Somthing...");

    this.#curentTool.mouseUp();
  }

  setCurrentTool(currentTool) {
    this.#curentTool = currentTool;
  }

  get getCurrentTool() {
    return this.#curentTool;
  }
}
