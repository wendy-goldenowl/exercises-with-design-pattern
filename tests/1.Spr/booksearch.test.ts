import { Book } from './../../Solid/1.Srp/Book';
import { BookSearch } from './../../Solid/1.Srp/BookSearch';

describe('BookSearch', () => {
    let books: Book[];
    let search: BookSearch;

    beforeEach(() => {
        books = [
            new Book('Clean Code', 'Edric Cao', 2023),
            new Book('Design Pattern', 'Edric Cao', 2022),
            new Book('Refactoring', 'Martin Fowler', 2018),
        ];
        search = new BookSearch(books);
    });

    test('should find a book by title', () => {
        const book = search.getBookByTitle('Clean Code');
        expect(book).toBeDefined();
        expect(book?.author).toBe('Edric Cao');
    });

    test('should return undefined when no book matches the title', () => {
        const book = search.getBookByTitle('Nonexistent Book');
        expect(book).toBeUndefined();
    });

    test('should return books by author', () => {
        const authorBooks = search.getBooksByAuthor('Edric Cao');
        expect(authorBooks.length).toBe(2);
    });

    test('should return an empty array when no books match the author', () => {
        const authorBooks = search.getBooksByAuthor('Unknown Author');
        expect(authorBooks.length).toBe(0);
    });

    test('should return books by publication year', () => {
        const booksByYear = search.getBooksByPublicationYear(2022);
        expect(booksByYear.length).toBe(1);
        expect(booksByYear[0].title).toBe('Design Pattern');
    });

    test('should return an empty array when no books match the publication year', () => {
        const booksByYear = search.getBooksByPublicationYear(1999);
        expect(booksByYear.length).toBe(0);
    });
});