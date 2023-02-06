const EMPTY_MARK = '.'

export class Board {
  width;
  height;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    
    this.initBoard()
  }

  initBoard() {
    let row = Array(this.width).fill(EMPTY_MARK)
    row.push('\n')
    
    // use join so there are no commas
    this.board = Array(this.height).fill(row.join(""))
  }

  toString() {
    return this.board.join("");
  }

  drop(block) {
    
  }
}
