import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import * as util from "./lib/utilityFunctions";

function PrintBookInfo({ title: bookTitle, author: bookAuthor }): void {
  console.log(`${bookTitle} was authored by ${bookAuthor}`);
}

let [book1, book2] = util.GetAllBooks();

// REST
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

// spread
let booksRead: Book[] = util.GetAllBooks();
booksRead.push(...schoolBooks);
// console.log(booksRead);

let poets: string[] = ["Shelley", "Collins", "Hughes"];
let authors: string[] = ["Tolstoy", "Fitzgerald", ...poets];
// console.log(authors);

// tuples
// let catalogLocation: [string, Book] = ["A 123.345", book1];

interface KeyValuePair<K, V> extends Array<K | V> {
  0: K;
  1: V;
}

//Key value pairs
let catalogLocation: KeyValuePair<string, Book> = ["A 123.345", book1];
catalogLocation[2] = "some string";

let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

// union type
let readingMaterial: Book | Magazine = allBooks[0];

function printTitle(item: Book | Magazine): void {
  console.log(item.title);
}

printTitle(allBooks[0]);
printTitle(allMagazines[0]);

// intersection type
let serialNovel: Book & Magazine = {
  id: 100,
  title: "The Gradual Tale",
  author: "Occasional Pen",
  available: true,
  category: Category.Fiction,
  publisher: "Serial Press",
};
