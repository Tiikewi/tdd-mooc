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
    
    this.board = Array(this.height).fill(row)

  }

  toString() {
    let stringBoard = []

    this.board.forEach(row => {
      const row2 = row.concat('\n')
      stringBoard.push(row2.join(""))
    });



    
    return stringBoard.join("")
  }

  drop(block) {

  }
}
