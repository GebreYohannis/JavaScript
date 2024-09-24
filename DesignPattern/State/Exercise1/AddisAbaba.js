import { DirectionService } from "./DirectionService.js";

export class AddisAbaba extends DirectionService {
  estimatedTimeArival() {
    console.log("It took 10 hour");
  }

  estimatedDirection() {
    console.log("North West");
  }
}
