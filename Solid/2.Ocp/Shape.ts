export interface Shape {
    calculateArea(): number;
}
export class Circle implements Shape {
    constructor(public radius: number) {}
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

export class Rectangle implements Shape {
    constructor(public height: number, public width: number) {}

    calculateArea(): number {
        return this.height * this.width;
    }
}
export class Triangle implements Shape {
    constructor(public length: number) {}

    calculateArea(): number {
        return 0.5 * this.length * this.length;
    }
}

export class AreaCalculator {
    calculateTotalArea(shapes: Shape[]): number {
        return shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
    }
}

let shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 5),
    new Triangle(3)
];
const shapesInstance = new AreaCalculator();
console.log(shapesInstance.calculateTotalArea(shapes));