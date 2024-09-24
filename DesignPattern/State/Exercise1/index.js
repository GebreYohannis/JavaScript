import { AddisAbaba } from "./AddisAbaba.js";
import { Map } from "./Map.js";
import { MehalMeda } from "./MehalMeda.js";

const map = new Map();
map.setCurrentDirectionService(new MehalMeda());
map.estimatedDirection();
map.estimatedTimeArival();

map.setCurrentDirectionService(new AddisAbaba());
map.estimatedDirection();
map.estimatedTimeArival();
