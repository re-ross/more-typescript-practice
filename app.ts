import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import * as util from "./lib/utilityFunctions";

function PrintBookInfo({ title: bookTitle, author: bookAuthor }): void {
  console.log(`${bookTitle} was authored by ${bookAuthor}`);
}

let [book1, book2] = util.GetAllBooks();

function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
  PrintBookInfo(book1);
  PrintBookInfo(book2);
  console.log(others);
}

// LogFavoriteBooks(util.GetAllBooks())

// let { title: bookTitle, author: bookAuthor } = book1;
// console.log(bookTitle);
// console.log(bookAuthor);

let schoolBooks: Book[] = [
  {
    id: 10,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    available: true,
    category: Category.Fiction,
  },
  {
    id: 11,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    available: true,
    category: Category.History,
  },
  {
    id: 12,
    title: "Clear Light of Day",
    author: "Anita Desai",
    available: true,
    category: Category.Fiction,
  },
];

let booksRead: Book[] = util.GetAllBooks();
booksRead.push(...schoolBooks);
// console.log(booksRead);

let poets: string[] = ["Shelley", "Collins", "Hughes"];
let authors: string[] = ["Tolstoy", "Fitzgerald", ...poets];
console.log(authors);
