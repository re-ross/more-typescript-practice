"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var util = require("./lib/utilityFunctions");
function PrintBookInfo(_a) {
    var bookTitle = _a.title, bookAuthor = _a.author;
    console.log("".concat(bookTitle, " was authored by ").concat(bookAuthor));
}
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
function LogFavoriteBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    console.log(others);
}
// LogFavoriteBooks(util.GetAllBooks())
// let { title: bookTitle, author: bookAuthor } = book1;
// console.log(bookTitle);
// console.log(bookAuthor);
var schoolBooks = [
    {
        id: 10,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true,
        category: enums_1.Category.Fiction,
    },
    {
        id: 11,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        available: true,
        category: enums_1.Category.History,
    },
    {
        id: 12,
        title: "Clear Light of Day",
        author: "Anita Desai",
        available: true,
        category: enums_1.Category.Fiction,
    },
];
var booksRead = util.GetAllBooks();
booksRead.push.apply(booksRead, schoolBooks);
// console.log(booksRead);
var poets = ["Shelley", "Collins", "Hughes"];
var authors = __spreadArray(["Tolstoy", "Fitzgerald"], poets, true);
console.log(authors);
//# sourceMappingURL=app.js.map