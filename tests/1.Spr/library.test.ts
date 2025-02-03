import { Library } from './../../Solid/1.Srp/Library';
import { Book } from './../../Solid/1.Srp/Book';

describe('Library', () => {
    let library: Library;
    let book1: Book;
    let book2: Book;

    beforeEach(() => {
        library = new Library();
        book1 = new Book('Clean Code', 'Edric Cao', 2023);
        book2 = new Book('Design Pattern', 'Edric Cao', 2022);
    });

    test('should add a book to the library', () => {
        library.addBook(book1);
        expect(library.getListBooks()).toContain(book1);
    });

    test('should remove a book by title from the library', () => {
        library.addBook(book1);
        library.addBook(book2);
        library.removeBook('Clean Code');
        expect(library.getListBooks()).not.toContain(book1);
        expect(library.getListBooks()).toContain(book2);
    });

    test('should not remove any book if title not found', () => {
        library.addBook(book1);
        library.removeBook('Nonexistent Book');
        expect(library.getListBooks().length).toBe(1);
        expect(library.getListBooks()).toContain(book1);
    });

    test('should return the total number of books in the library', () => {
        library.addBook(book1);
        library.addBook(book2);
        expect(library.getTotalNumberOfBooks()).toBe(2);
    });

    test('should return an empty list when no books are added', () => {
        expect(library.getListBooks().length).toBe(0);
    });
});