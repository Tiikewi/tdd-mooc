export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = false;
    this.block = null;
    this.dropRow = 0;
  }

  toString() {
    const BOARD_MARKER = ".";
    let string = "";

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (col === 1 && row === this.dropRow && this.falling) {
          string += this.block.color;
        } else {
          string += BOARD_MARKER;
        }
      }
      string += "\n";
    }
    return string;
  }

  drop(block) {
    this.block = block;
    this.falling = true;
  }

  tick() {
    this.dropRow += 1;
  }
}
