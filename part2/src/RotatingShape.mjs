export class RotatingShape {
    shape;

    constructor(shape) {
        // Remove all whitespace with regex, cause trim() not enough
        this.shape = shape.replace(/ /g,'').split('\n')
    }

    toString() {
        let shapeWithEndline = [];

        this.shape.forEach((row) => {
          const row2 = row.concat("\n");
          shapeWithEndline.push(row2)
        });

        return shapeWithEndline.join("");
    }
}