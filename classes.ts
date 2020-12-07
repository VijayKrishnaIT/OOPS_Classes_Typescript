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
class class_one {
    var_one: any = "Parent Class !!!! ";
}
//Child Class 
//class two contain 2 variables
class class_two extends class_one {
    var_two: any = "Child Class !!!!";
}

//create object to class_one
//create object to class_two - we can access 2 variables

let obj1: class_one = new class_one();
console.log(obj1.var_one); //Parent Class !!!!

let obj2: class_two = new class_two();
console.log(obj2.var_one, obj2.var_two); //Parent Class !!!!  Child Class !!!!


