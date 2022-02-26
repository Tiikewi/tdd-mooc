export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    const BOARD_MARKER = ".";
    let string = "";

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        string += BOARD_MARKER;
      }
      string += "\n";
    }
    return string;
  }
}
