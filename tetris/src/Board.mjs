export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.EMPTY = ".";
    this.boardState = Array(height);
    this.falling = false;
    this.block = null;
    this.dropRow = 0;
    this.initBoard();
  }

  toString() {
    let string = "";

    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (col === 1 && row === this.dropRow && this.falling) {
          string += this.block.color;
        } else {
          string += this.EMPTY;
        }
      }
      string += "\n";
    }
    return string;
  }

  drop(block) {
    if (this.falling) throw "already falling";
    this.block = block;
    this.falling = true;
  }
  tick() {
    this.dropRow += 1;
  }
  hasFalling() {
    return this.falling;
  }

  initBoard() {
    this.boardState.fill(
      Array(this.width).fill(this.EMPTY, 0, this.width),
      0,
      this.height
    );
    console.log("after init: ", this.boardState);
  }
}
