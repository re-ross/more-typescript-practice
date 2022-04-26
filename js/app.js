"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=app.js.map