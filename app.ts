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
