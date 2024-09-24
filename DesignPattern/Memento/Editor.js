import EditorState from "./EditorState.js";
export default class Editor {
  #content;

  setContent(content) {
    this.#content = content;
  }

  getContent() {
    return this.#content;
  }

  createState() {
    return new EditorState(this.#content);
  }

  restore(state) {
    this.#content = state.getContent();
  }
}
