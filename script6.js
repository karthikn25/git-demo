//3)Write a “person” class to hold all the details.

class Person{
    constructor(firstName,lastName,age,place){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.place=place;
    }
    getDetails(){
        return (`The name of the person is ${this.firstName} ${this.lastName} with age of ${this.age} born at ${this.place}`)
}
getAllNames(){
    return(`All the Names are ${this.firstName}`)
}
    }

var person1 = new Person ("varun chakravarthi","15","chennai");
var person2 = new Person ("dhoni","18", "raanji");
var person3 = new Person ("jadeja","16","delhi");
console.log(person2.getDetails());
console.log(person1.firstName,person2.firstName,person3.firstName);
