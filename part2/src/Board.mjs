const EMPTY_MARK = '.'

export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    let row = Array(this.width).fill(EMPTY_MARK)
    row.push('\n')

    // use join so there are no commas
    let board = Array(this.height).fill(row.join("")).join("")

    return board;

  }
}
