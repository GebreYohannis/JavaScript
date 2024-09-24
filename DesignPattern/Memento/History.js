export default class History {
  #stack = [];

  push(content) {
    this.#stack.push(content);
  }

  pop() {
    const lastState = this.#stack.pop();
    return lastState;
  }

  log() {
    this.#stack.forEach((item) => console.log(item));
  }
}
