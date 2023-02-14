export class RotatingShape {
    shape = [];

    constructor(shape) {
        // Remove all whitespace with regex, cause trim() not enough
        const temp = shape.replace(/ /g,'').split('\n')
        temp.forEach(row => {
            this.shape.push(row.split(''))
        })
    }

    toString() {
        console.log("shape:", this.shape)
        let shapeWithEndline = [];

        this.shape.forEach((row) => {
            const row2 = row.concat("\n");
            shapeWithEndline.push(row2.join(""))
        });

        return shapeWithEndline.join("");
    }

    rotateRight() {
        let rotatedShape = []

        for (let i = 0; i < this.shape.length; i++) {
            let newRow = []

            for(let j = this.shape.length - 1; j >= 0; j--) {
                newRow.push(this.shape[j][i])
            }  
            rotatedShape.push(newRow)
        }

        let temp2 = [] 
        
        let shapeWithEndline = [];

        rotatedShape.forEach((row) => {
            const row2 = row.concat("\n");
            shapeWithEndline.push(row2.join(""))
        });

        return shapeWithEndline.join("");
    }
}