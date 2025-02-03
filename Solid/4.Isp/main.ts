/**
 * *****************************************
 * 📝 UNCOMMENT THE CODE BELOW AND BEGIN YOUR SOLUTION:
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

// Segregated interfaces
export interface Printer {
    print(document: string): void;
}

export interface Scanner {
    scan(document: string): void;
}

export interface Fax {
    fax(document: string): void;
}

// Printer implementations
export class OldFashionedPrinter implements Printer {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }
}

export class AllInOnePrinter implements Printer, Scanner, Fax {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }

    scan(document: string): void {
        console.log(`Scanning document: ${document}`);
    }

    fax(document: string): void {
        console.log(`Faxing document: ${document}`);
    }
}