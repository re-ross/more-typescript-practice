import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import {
  CLASS_INFO,
  PublicLibrarian,
  UniversityLibrarian,
  ReferenceItem,
  Employee,
  Researcher,
} from "./classes";
import * as util from "./lib/utilityFunctions";
import "./LibrarianExtension";
// function PrintBookInfo({ title: bookTitle, author: bookAuthor }): void {
//   console.log(`${bookTitle} was authored by ${bookAuthor}`);
// }

// let [book1, book2] = util.GetAllBooks();

// // ~REST~
// function LogFavoriteBooks([book1, book2, ...others]: Book[]) {
//   PrintBookInfo(book1);
//   PrintBookInfo(book2);
//   console.log(others);
// }

// // LogFavoriteBooks(util.GetAllBooks())

// // let { title: bookTitle, author: bookAuthor } = book1;
// // console.log(bookTitle);
// // console.log(bookAuthor);

// let schoolBooks: Book[] = [
//   {
//     id: 10,
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     available: true,
//     category: Category.Fiction,
//   },
//   {
//     id: 11,
//     title: "Crime and Punishment",
//     author: "Fyodor Dostoevsky",
//     available: true,
//     category: Category.History,
//   },
//   {
//     id: 12,
//     title: "Clear Light of Day",
//     author: "Anita Desai",
//     available: true,
//     category: Category.Fiction,
//   },
// ];

// // ~SPREAD~

// let booksRead: Book[] = util.GetAllBooks();
// booksRead.push(...schoolBooks);
// // console.log(booksRead);

// let poets: string[] = ["Shelley", "Collins", "Hughes"];
// let authors: string[] = ["Tolstoy", "Fitzgerald", ...poets];
// // console.log(authors);

// // ~TUPLES~

// // let catalogLocation: [string, Book] = ["A 123.345", book1];

// interface KeyValuePair<K, V> extends Array<K | V> {
//   0: K;
//   1: V;
// }

// //~KEY VALUE PAIRS~

// let catalogLocation: KeyValuePair<string, Book> = ["A 123.345", book1];
// catalogLocation[2] = "some string";

// let allBooks: Book[] = util.GetAllBooks();
// let allMagazines: Magazine[] = util.GetAllMagazines();

// // ~UNION TYPE~

// let readingMaterial: PrintMaterial = allBooks[0];

// function printTitle(item: PrintMaterial): void {
//   console.log(item.title);
// }

// printTitle(allBooks[0]);
// printTitle(allMagazines[0]);

// ~INTERSECTION TYPE~

// let serialNovel: Serial = {
//   id: 100,
//   title: "The Gradual Tale",
//   author: "Occasional Pen",
//   available: true,
//   category: Category.Fiction,
//   publisher: "Serial Press",
// };

// // ~CREATING MIXIN~

// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//   baseCtors.forEach((baseCtor) => {
//     Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
//       derivedCtor.prototype[name] = baseCtor.prototype[name];
//     });
//   });
// }

// applyMixins(UniversityLibrarian, [Employee, Researcher]);
// let newLibrarian = new UniversityLibrarian();
// // newLibrarian.doResearch("Economics");

// // ~STRING LITERALS AND TYPE ALIASES~

// // let frequency: 'monthly' | 'annually' = 'annually'
// type Frequency = "monthly" | "annually";

// function getMagazineByFrequency(preferredFrequency: Frequency) {
//   // do something
// }

// type PrintMaterial = Book | Magazine;
// type Serial = Book & Magazine;

// ~POLYMORPHIC THIS~

// class LibraryBook {
//   Checkout(): this {
//     // do checkout stuff
//     console.log("Checking out a book");
//     return this;
//   }

//   CheckIn(): this {
//     // console.log("Checking in a book");

//     if (this instanceof ChildrensBook) {
//       console.log("Checking in a children's book");
//     }
//     if (this instanceof ElectronicBook) {
//       console.log("Checking in an electrnoic book.");
//     }
//     return this;
//   }
// }

// class ChildrensBook extends LibraryBook {
//   Clean(): this {
//     //clean crayon marks
//     console.log("Cleaning a book");
//     return this;
//   }
// }

// class ElectronicBook extends LibraryBook {
//   RemoveFromCustomerDevice(): this {
//     console.log("Removing book from device");
//     return this;
//   }
// }

// let kidbook = new ChildrensBook();
// kidbook.CheckIn().Clean().Checkout();

// let ebook = new ElectronicBook();
// ebook.CheckIn().RemoveFromCustomerDevice().Checkout();

// ~MERGING INTERFACES~
// let mergedBook: Book;
// mergedBook.publisher = 'Programming Press'

// let newLibrarian = new UniversityLibrarian();
// newLibrarian.phone = "555-5555";
// newLibrarian.hostSeminar("test");

// ~TYPE GUARDS (type of)~

// function logVisitor(param: number | string) {
//   if (typeof param === "number") {
//     console.log(`${param} new visitors arrived`);
//   } else {
//     console.log(`${param.toUpperCase()} visited`);
//   }
// }

// logVisitor(5);
// logVisitor("ryan");

// let lib: Librarian;

// if (lib instanceof UniversityLibrarian) {
//   lib.assistFaculty();
// }
// if (lib instanceof PublicLibrarian) {
//   lib.teachCommunity();
// }

//~TYPE GUARDS (custom typeguard)~

// function isBook(text: Book | Magazine): text is Book {
//   return (<Book>text).author !== undefined;
// }

// let readingMaterial: Book | Magazine = util.GetAllBooks()[0];

// if (isBook(readingMaterial)) {
//   console.log(`The book's author is ${readingMaterial.author}`);
// } else {
//   console.log(`The magazine's publisher is ${readingMaterial.publisher}`);
// }

// ~Symbols~

// let mySymbol = Symbol("first_symbol");
// let anotherSymbol = Symbol("first_symbol");

// // console.log(mySymbol === anotherSymbol);
// // console.log(typeof mySymbol);
// let myObject = {
//   [mySymbol]: "value for my symbol",
// };
// // console.log(myObject[mySymbol]);
// let librarian = new UniversityLibrarian();
// // librarian[CLASS_INFO]();

// let libraryCustomer = {
//   name: "Thorne",
//   assistCustomer: (custName: string) => console.log(`Assisting ${custName}`),
// };

// if (libraryCustomer instanceof UniversityLibrarian) {
//   console.log("A helpful librarian");
// } else {
//   console.log("Not a librarian");
// }

// let lib1 = new UniversityLibrarian();
// let lib2 = new PublicLibrarian();

// try {
//   lib1.assistFaculty = () => console.log("assist faculty replacement method");
//   lib2.teachCommunity = () => console.log("teachCommunity replacement method");
// } catch (error) {
//   console.log(error.message);
// }
// lib1.assistFaculty();
// lib2.teachCommunity();

// async w/ callbacks

// interface LibMgrCallback {
//   (err: Error, titles: string[]): void;
// }

// function getBooksByCategory(cat: Category, cb: LibMgrCallback): void {
//   setTimeout(() => {
//     try {
//       let foundBooks: string[] = util.GetBookTitlesByCategory(cat);

//       if (foundBooks.length > 0) {
//         cb(null, foundBooks);
//       } else {
//         throw new Error("No books found");
//       }
//     } catch (error) {
//       cb(error, null);
//     }
//   }, 2000);
// }

// function logCategorySearch(err: Error, titles: string[]): void {
//   if (err) {
//     console.log(`Error message: ${err.message}`);
//   } else {
//     console.log("Found the following titles:");
//     console.log(titles);
//   }
// }

// console.log("Beginning search...");
// getBooksByCategory(Category.Fiction, logCategorySearch);
// console.log("Search submitted...");
