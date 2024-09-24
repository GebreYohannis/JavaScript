import Brush from "./Brush.js";
import { Canvas } from "./Canvas.js";
import Eraser from "./Eraser.js";
import Selection from "./Selection.js";

const canvas = new Canvas();

canvas.setCurrentTool(new Selection());
canvas.mouseDown();
canvas.mouseUp();

canvas.setCurrentTool(new Brush());
canvas.mouseDown();
canvas.mouseUp();

canvas.setCurrentTool(new Eraser());
canvas.mouseDown();
canvas.mouseUp();
