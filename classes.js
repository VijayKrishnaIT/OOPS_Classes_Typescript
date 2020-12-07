//default modifier is public
/*
class class_one {
    sub_one: string;
    sub_two: string;
    sub_three: string;
    constructor() {
        this.sub_one = "ReactJS";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB"
    }
}
//creat object to class_one

let obj: class_one = new class_one();
console.log(obj.sub_one, obj.sub_two, obj.sub_three);//ReactJS NodeJS MongoDB

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
class class_one {
    //parameter constructor
    constructor(public arg1: string, public arg2: string, public arg3: string) {

    }
}
// code is wrong in Java, C++, dot net

let obj1: class_one = new class_one("ReactJS", "NodeJS", "MondoDB");
console.log(obj1.arg1, obj1.arg2, obj1.arg3);//ReactJS NodeJS MondoDB


let obj2: class_one = new class_one("Angular11", "DENO", "CassandraDB");
console.log(obj2.arg1, obj2.arg2, obj2.arg3); //Angular11 DENO CassandraDB
*/
/*
class class_one {
    //recommeded modifiers for variables is private
    private sub_one: string;
    private sub_two: string;
    private sub_three: string;
    constructor() {
        this.sub_one = "ReactJS";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    };

    public getSubOne(): string {
        return this.sub_one;
    }
    public getSubTwo(): string {
        return this.sub_two;
    }
    public getSubThree(): string {
        return this.sub_three;
    }
};

let obj: class_one = new class_one();
//public functios we can access them
console.log(obj.getSubOne(), obj.getSubTwo(), obj.getSubThree()); //ReactJS NodeJS MongoDB

//we can't access the private members throough the objects.

*/
//Parent Class
//class one contain 1 variable
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Parent Class !!!! ";
    }
    return class_one;
}());
//Child Class 
//class two contain 2 variables
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Child Class !!!!";
        return _this;
    }
    return class_two;
}(class_one));
//create object to class_one
//create object to class_two - we can access 2 variables
var obj1 = new class_one();
console.log(obj1.var_one);
var obj2 = new class_two();
console.log(obj2.var_one, obj2.var_two);
