export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = false;
  }

  toString() {
    const BOARD_MARKER = ".";
    let string = "";

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (col === 1 && row === 0 && this.falling) {
          string += "X";
        } else {
          string += BOARD_MARKER;
        }
      }
      string += "\n";
    }
    return string;
  }

  drop() {
    this.falling = true;
  }
}
