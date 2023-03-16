//2)Convert the UML diagram to Typescript class. - use number for double
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getradius(){
        return(`the circle radius is ${this.radius} and color is ${this.color}`)
    }
}
var c1 = new Circle(5.36 , "green");
console.log(c1.getradius());