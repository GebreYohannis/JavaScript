import { DirectionService } from "./DirectionService.js";

export class MehalMeda extends DirectionService {
  estimatedTimeArival() {
    console.log("It took 8 hour");
  }

  estimatedDirection() {
    console.log("North East");
  }
}
