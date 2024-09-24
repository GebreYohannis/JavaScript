import { DirectionService } from "./DirectionService.js";

export class Map {
  #currentDiretionService = new DirectionService();
  estimatedTimeArival() {
    this.#currentDiretionService.estimatedTimeArival();
  }

  estimatedDirection() {
    this.#currentDiretionService.estimatedDirection();
  }

  setCurrentDirectionService(directionService) {
    this.#currentDiretionService = directionService;
  }

  getCurrentDirectionService() {
    return this.#currentDiretionService;
  }
}
