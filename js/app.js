"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
var LibraryBook = /** @class */ (function () {
    function LibraryBook() {
    }
    LibraryBook.prototype.Checkout = function () {
        // do checkout stuff
        console.log("Checking out a book");
        return this;
    };
    LibraryBook.prototype.CheckIn = function () {
        // console.log("Checking in a book");
        if (this instanceof ChildrensBook) {
            console.log("Checking in a children's book");
        }
        if (this instanceof ElectronicBook) {
            console.log("Checking in an electrnoic book.");
        }
        return this;
    };
    return LibraryBook;
}());
var ChildrensBook = /** @class */ (function (_super) {
    __extends(ChildrensBook, _super);
    function ChildrensBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildrensBook.prototype.Clean = function () {
        //clean crayon marks
        console.log("Cleaning a book");
        return this;
    };
    return ChildrensBook;
}(LibraryBook));
var ElectronicBook = /** @class */ (function (_super) {
    __extends(ElectronicBook, _super);
    function ElectronicBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronicBook.prototype.RemoveFromCustomerDevice = function () {
        console.log("Removing book from device");
        return this;
    };
    return ElectronicBook;
}(LibraryBook));
var kidbook = new ChildrensBook();
kidbook.CheckIn().Clean().Checkout();
var ebook = new ElectronicBook();
ebook.CheckIn().RemoveFromCustomerDevice().Checkout();
//# sourceMappingURL=app.js.map