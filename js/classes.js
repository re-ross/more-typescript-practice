"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Researcher = exports.Employee = exports.ReferenceItem = exports.UniversityLibrarian = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.addToSchedule = function () {
        console.log("Employee added to schedule");
    };
    Employee.prototype.logTitle = function () {
        console.log("Employee has the title: ".concat(this.title));
    };
    return Employee;
}());
exports.Employee = Employee;
var Researcher = /** @class */ (function () {
    function Researcher() {
    }
    Researcher.prototype.doResearch = function (topic) {
        console.log("Doing research on: ".concat(topic));
    };
    return Researcher;
}());
exports.Researcher = Researcher;
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    UniversityLibrarian.prototype.addToSchedule = function () { };
    UniversityLibrarian.prototype.logTitle = function () { };
    UniversityLibrarian.prototype.doResearch = function (topic) { };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a new ReferenceItem...");
    }
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year, "."));
        console.log("Department: ".concat(ReferenceItem.department));
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.department = "Research";
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map