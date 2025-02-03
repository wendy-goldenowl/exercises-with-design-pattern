import {Printer, Scanner, Fax, OldFashionedPrinter, AllInOnePrinter} from '../../Solid/4.Isp/main';
describe('Printer Interfaces', () => {
    describe('OldFashionedPrinter', () => {
        it('should print a document', () => {
            const consoleSpy = jest.spyOn(console, 'log');
            const printer = new OldFashionedPrinter();

            printer.print('Test Document');

            expect(consoleSpy).toHaveBeenCalledWith('Printing document: Test Document');
            consoleSpy.mockRestore();
        });
    });

    describe('AllInOnePrinter', () => {
        let consoleSpy: jest.SpyInstance;
        let printer: AllInOnePrinter;

        beforeEach(() => {
            consoleSpy = jest.spyOn(console, 'log');
            printer = new AllInOnePrinter();
        });

        afterEach(() => {
            consoleSpy.mockRestore();
        });

        it('should print a document', () => {
            printer.print('Test Print');
            expect(consoleSpy).toHaveBeenCalledWith('Printing document: Test Print');
        });

        it('should scan a document', () => {
            printer.scan('Test Scan');
            expect(consoleSpy).toHaveBeenCalledWith('Scanning document: Test Scan');
        });

        it('should fax a document', () => {
            printer.fax('Test Fax');
            expect(consoleSpy).toHaveBeenCalledWith('Faxing document: Test Fax');
        });
    });
});