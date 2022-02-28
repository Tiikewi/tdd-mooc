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
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        if (this.dropRow === this.height) {
          this.falling = false;
          this.boardState[2][1] = this.block.color;
        }
        if (col === 1 && row === this.dropRow && this.falling) {
          this.boardState[row][col] = this.block.color;
        }
      }
    }
    // Make string of boardState array and add line break to the end
    const stateAsString = this.boardState
      .map((e) => e.join(""))
      .join("\n")
      .concat("\n");

    return stateAsString;
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
    for (let index = 0; index < this.height; index++) {
      this.boardState[index] = Array(this.width).fill(
        this.EMPTY,
        0,
        this.width
      );
    }
  }
}
