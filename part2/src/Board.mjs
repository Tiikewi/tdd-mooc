const EMPTY_MARK = ".";

export class Board {
  width;
  height;
  board;
  isFalling;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.isFalling = false;

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
    
    this.isFalling = true
    this.board[0][Math.floor(this.width / 2)] = block.color;
  }

  tick() {
    this.board.pop();
    const row = new Array(this.width).fill(EMPTY_MARK);
    this.board.unshift(row);
  }
}
