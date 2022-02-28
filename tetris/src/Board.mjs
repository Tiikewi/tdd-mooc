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
          this.boardState[row][col] = this.block.color;

          console.log("col:", col, "row:", row);
          console.log("state", this.boardState);
        } else {
          string += this.EMPTY;
        }
      }
      string += "\n";
    }
    const joinedState = this.boardState
      .map((e) => e.join(""))
      .join("\n")
      .concat("\n");

    console.log("joined:", joinedState);
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
    for (let index = 0; index < this.height; index++) {
      this.boardState[index] = Array(this.width).fill(
        this.EMPTY,
        0,
        this.width
      );
    }
  }
}
