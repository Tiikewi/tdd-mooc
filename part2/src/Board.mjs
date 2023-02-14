const EMPTY_MARK = ".";

export class Board {
  width;
  height;
  board;
  isFalling;
  fallingBlockRow;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.isFalling = false;
    this.fallingBlockRow = null

    this.initBoard();
  }

  initBoard() {
    // init board with rows with new reference.
    this.board = Array.from({ length: this.height }, (_) =>
      new Array(this.width).fill(EMPTY_MARK)
    );
  }

  toString() {
    let stringBoard = [];

    this.board.forEach((row) => {
      const row2 = row.concat("\n");
      stringBoard.push(row2.join(""));
    });

    return stringBoard.join("");
  }

  drop(block) {
    if (this.isFalling === true) throw new Error("already falling")

    this.fallingBlockRow = 0
    
    this.isFalling = true
    this.board[0][Math.floor(this.width / 2)] = block.color;
  }

  tick() {
    if (this.fallingBlockRow >= this.height - 1) {
      this.isFalling = false
      return
    }
    const fallingRow = this.board[this.fallingBlockRow]
    this.fallingBlockRow += 1

    this.board[this.fallingBlockRow] = fallingRow
    this.board[this.fallingBlockRow - 1] = new Array(this.width).fill(EMPTY_MARK)

    
  }

  hasFalling() {
    return this.isFalling
  }
}
