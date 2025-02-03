import { Circle, Rectangle, Triangle, AreaCalculator } from '../../Solid/2.Ocp/Shape';

describe('Shape Classes', () => {
    describe('Circle', () => {
        it('calculates area correctly', () => {
            const circle = new Circle(5);
            expect(circle.calculateArea()).toBeCloseTo(Math.PI * 25, 5);
        });
    });

    describe('Rectangle', () => {
        it('calculates area correctly', () => {
            const rectangle = new Rectangle(4, 5);
            expect(rectangle.calculateArea()).toBe(20);
        });
    });

    describe('Triangle', () => {
        it('calculates area correctly', () => {
            const triangle = new Triangle(3);
            expect(triangle.calculateArea()).toBe(4.5);
        });
    });

    describe('AreaCalculator', () => {
        it('calculates total area of multiple shapes', () => {
            const shapes = [
                new Circle(5),
                new Rectangle(4, 5),
                new Triangle(3)
            ];
            const calculator = new AreaCalculator();

            const expectedTotalArea =
                (Math.PI * Math.pow(5, 2)) +
                (4 * 5) +
                (0.5 * 3 * 3);

            expect(calculator.calculateTotalArea(shapes)).toBeCloseTo(expectedTotalArea, 5);
        });

        it('handles empty array of shapes', () => {
            const calculator = new AreaCalculator();
            expect(calculator.calculateTotalArea([])).toBe(0);
        });
    });
});