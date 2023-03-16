//4)write a class to calculate the uber price.

class Uber{
    constructor(distance,vehicletype,rate){
        this.distance= distance;
        this.vehicletype=vehicletype;
        this.rate=rate;
    }
setDistance(dist){
        this.distance=dist;
    }
getRideDetails(){
        return(`The distance of the ride is ${this.distance}km with Vehicle type of ${this.vehicletype} and rate of per Kilometer is ${this.rate}rs`)
    }
getRate(){
        let totalRate = (this.distance * this.rate)
        return (`The vehicle type is ${this.vehicletype} and rate is`+ totalRate);
    }
}
var customer1= new Uber (100,"bike",15)
console.log(customer1.getRideDetails());
console.log(customer1.getRate());