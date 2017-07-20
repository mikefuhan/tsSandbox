var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = (function () {
    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        console.log('User created: ' + this.name);
        console.log('User age is : ' + this.age);
    }
    User.prototype.register = function () {
        console.log(this.name + ' registered');
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + ' paid invoice');
    };
    return User;
}());
var Member = (function (_super) {
    __extends(Member, _super);
    function Member(id, name, age, email) {
        var _this = _super.call(this, name, age, email) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    ;
    return Member;
}(User));
// let John = new User('John',29,'john@aa.com');
//console.log('this is property is public : '+John.email);
var mike = new Member(1, 'mike', 24, 'mike@ab.com');
mike.payInvoice();
